// ── Open/Closed check ─────────────────────────────────────────
function isOpenNow(r) {
  if (!r.hours_structured) return null;
  const now      = new Date();
  const romeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Rome' }));
  const days     = ['sun','mon','tue','wed','thu','fri','sat'];
  const day      = days[romeTime.getDay()];
  const cur      = romeTime.getHours() * 60 + romeTime.getMinutes();
  const slots    = r.hours_structured[day];
  if (!slots || slots.length === 0) return false;
  for (const slot of slots) {
    const [oH, oM] = slot.open.split(':').map(Number);
    const [cH, cM] = slot.close.split(':').map(Number);
    let oMins = oH * 60 + oM;
    let cMins = cH * 60 + cM;
    if (cMins <= oMins) cMins += 24 * 60;
    if (cur < oMins) { if (cur + 24 * 60 <= cMins) return true; }
    else if (cur >= oMins && cur < cMins) return true;
  }
  return false;
}

// ── Marker icons ──────────────────────────────────────────────
function createMarkerIcon(cat, active = false) {
  const color = CAT_COLORS[cat] || '#888';
  const icon  = CAT_ICONS[cat]  || '●';
  return L.divIcon({
    className: '',
    html: `<div class="custom-marker${active ? ' active' : ''}" style="background:${color}">
             <span class="marker-icon-inner">${icon}</span>
           </div>`,
    iconSize:    [32, 32],
    iconAnchor:  [16, 32],
    popupAnchor: [0, -34],
  });
}

function placeMarkers(list) {
  list.forEach(r => {
    if (markers[r.id]) return;
    const marker = L.marker([r.lat, r.lng], {
      icon: createMarkerIcon(r.category),
      title: r.name,
    });
    const catLabel = t('categories')[r.category] || categories[r.category]?.label || r.category;
    marker.bindPopup(`
      <div class="popup-inner">
        <div class="popup-cat">${catLabel}</div>
        <div class="popup-name">${r.name}</div>
        <div class="popup-desc">${r.description.slice(0, 90)}…</div>
        <div class="popup-price">${r.price}</div>
      </div>
      <button class="popup-btn" onclick="showDetailById(${r.id})">${t('view_details')}</button>
    `, { maxWidth: 220, minWidth: 200 });
    marker.on('click', () => {
      resetActiveMarker();
      marker.setIcon(createMarkerIcon(r.category, true));
      activeMarker = { marker, cat: r.category };
    });
    marker.on('popupclose', () => resetActiveMarker());
    clusterGroup.addLayer(marker);
    markers[r.id] = { marker, restaurant: r };
  });
}

function resetActiveMarker() {
  if (activeMarker) {
    activeMarker.marker.setIcon(createMarkerIcon(activeMarker.cat, false));
    activeMarker = null;
  }
}

function updateMarkerVisibility(visible) {
  const visibleIds = new Set(visible.map(r => r.id));
  clusterGroup.clearLayers();
  Object.values(markers).forEach(({ marker, restaurant }) => {
    if (visibleIds.has(restaurant.id)) clusterGroup.addLayer(marker);
  });
}

function fitMapToVisible(list) {
  if (list.length === 0) return;
  const bounds = L.latLngBounds(list.map(r => [r.lat, r.lng]));
  map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
}

function flyToMarker(r) {
  map.flyTo([r.lat, r.lng], 16, { duration: 0.8 });
  setTimeout(() => {
    if (markers[r.id]) {
      clusterGroup.zoomToShowLayer(markers[r.id].marker, () => {
        markers[r.id].marker.openPopup();
      });
      resetActiveMarker();
      markers[r.id].marker.setIcon(createMarkerIcon(r.category, true));
      activeMarker = { marker: markers[r.id].marker, cat: r.category };
    }
  }, 900);
}

// ── Restaurant list ───────────────────────────────────────────
function renderRestaurants(list) {
  const container = document.getElementById('restaurantList');
  container.innerHTML = '';
  list.forEach((r, i) => {
    const catLabel = t('categories')[r.category] || categories[r.category]?.label || r.category;
    const isOpen   = isOpenNow(r);
    const card     = document.createElement('div');
    card.className        = 'rest-card';
    card.dataset.id       = r.id;
    card.style.animationDelay = `${i * 30}ms`;
    card.innerHTML = `
      <img class="rest-card-thumb" src="${r.image}" alt="${r.name}" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=44&h=44&fit=crop'">
      <div class="rest-card-info">
        <div class="rest-card-name">${r.name}</div>
        <div class="rest-card-meta">${catLabel} · ${r.price}</div>
        <div class="rest-card-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      </div>
    `;
    card.style.borderLeftColor = isOpen === true ? '#4CAF50' : isOpen === false ? '#E05C3A' : '#EDE5D8';
    card.addEventListener('click', () => {
      flyToMarker(r);
      showDetail(r);
      if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.remove('expanded');
        setTimeout(() => map.invalidateSize(), 320);
      }
    });
    container.appendChild(card);
  });
}

function updateCount(n) {
  document.getElementById('visibleCount').textContent = n;
}