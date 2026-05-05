// ── State ───────────────────────────────────────────────────
let allRestaurants = [];
let categories     = {};
let activeCategory = 'all';
let markers        = {};
let activeMarker   = null;
let clusterGroup   = null;
let locationMarker = null;

// ── Map init ─────────────────────────────────────────────────
const map = L.map('map', {
  center: [41.9028, 12.4964],
  zoom: 14,
  zoomControl: false,
});

L.control.zoom({ position: 'bottomleft' }).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// ── Cluster group ─────────────────────────────────────────────
clusterGroup = L.markerClusterGroup({
  maxClusterRadius: 50,
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
});
map.addLayer(clusterGroup);

// ── Category colors ──────────────────────────────────────────
const CAT_COLORS = {
  fine_dining: '#C9A84C',
  trattoria:   '#E05C3A',
  cafe:        '#6B9E78',
  pizza:       '#D4547A',
  gelato:      '#5B8EC4',
};

const CAT_ICONS = {
  fine_dining: '✦',
  trattoria:   '◈',
  cafe:        '◉',
  pizza:       '◆',
  gelato:      '◇',
};

// ── Fetch data ───────────────────────────────────────────────
async function loadData() {
  const res  = await fetch('/api/restaurants');
  const data = await res.json();

  allRestaurants = data.restaurants;
  categories     = data.categories;

  buildFilters();
  renderRestaurants(allRestaurants);
  placeMarkers(allRestaurants);
  updateCount(allRestaurants.length);
}

// ── Filter UI ────────────────────────────────────────────────
function buildFilters() {
  const list = document.getElementById('filterList');
  document.getElementById('count-all').textContent = allRestaurants.length;

  for (const [key, cat] of Object.entries(categories)) {
    const count = allRestaurants.filter(r => r.category === key).length;
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.cat = key;
    btn.innerHTML = `
      <span class="filter-icon" style="color:${CAT_COLORS[key]}">${CAT_ICONS[key]}</span>
      <span class="filter-label">${cat.label}</span>
      <span class="filter-count" id="count-${key}">${count}</span>
    `;
    btn.addEventListener('click', () => setFilter(key));
    list.appendChild(btn);
  }

  document.querySelector('[data-cat="all"]').addEventListener('click', () => setFilter('all'));
}

function setFilter(cat) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });

  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const base  = cat === 'all' ? allRestaurants : allRestaurants.filter(r => r.category === cat);
  const filtered = query ? base.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.description.toLowerCase().includes(query)
  ) : base;

  renderRestaurants(filtered);
  updateMarkerVisibility(filtered);
  updateCount(filtered.length);
  fitMapToVisible(filtered);
}

// ── Search ───────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();
  const base  = activeCategory === 'all'
    ? allRestaurants
    : allRestaurants.filter(r => r.category === activeCategory);

  const filtered = query
    ? base.filter(r =>
        r.name.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query)
      )
    : base;

  renderRestaurants(filtered);
  updateMarkerVisibility(filtered);
  updateCount(filtered.length);
  if (filtered.length > 0) fitMapToVisible(filtered);
});

// ── Restaurant sidebar list ──────────────────────────────────
function renderRestaurants(list) {
  const container = document.getElementById('restaurantList');
  container.innerHTML = '';
  list.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'rest-card';
    card.dataset.id = r.id;
    card.style.animationDelay = `${i * 30}ms`;
    card.innerHTML = `
      <img class="rest-card-thumb" src="${r.image}" alt="${r.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=44&h=44&fit=crop'">
      <div class="rest-card-info">
        <div class="rest-card-name">${r.name}</div>
        <div class="rest-card-meta">${categories[r.category]?.label || r.category} · ${r.price}</div>
        <div class="rest-card-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      </div>
      <div class="rest-card-dot" style="background:${CAT_COLORS[r.category]}"></div>
    `;
    card.addEventListener('click', () => {
      flyToMarker(r);
      showDetail(r);
    });
    container.appendChild(card);
  });
}

// ── Markers ──────────────────────────────────────────────────
function createMarkerIcon(cat, active = false) {
  const color = CAT_COLORS[cat] || '#888';
  const icon  = CAT_ICONS[cat]  || '●';
  return L.divIcon({
    className: '',
    html: `<div class="custom-marker${active ? ' active' : ''}" style="background:${color}">
             <span class="marker-icon-inner">${icon}</span>
           </div>`,
    iconSize:   [32, 32],
    iconAnchor: [16, 32],
    popupAnchor:[0, -34],
  });
}

function placeMarkers(list) {
  list.forEach(r => {
    if (markers[r.id]) return;
    const marker = L.marker([r.lat, r.lng], {
      icon: createMarkerIcon(r.category),
      title: r.name,
    });

    const popupHtml = `
      <div class="popup-inner">
        <div class="popup-cat">${categories[r.category]?.label || r.category}</div>
        <div class="popup-name">${r.name}</div>
        <div class="popup-desc">${r.description.slice(0, 90)}…</div>
        <div class="popup-price">${r.price}</div>
      </div>
      <button class="popup-btn" onclick="showDetailById(${r.id})">View Details</button>
    `;

    marker.bindPopup(popupHtml, { maxWidth: 220, minWidth: 200 });
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
    if (visibleIds.has(restaurant.id)) {
      clusterGroup.addLayer(marker);
    }
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

// ── Locate me ────────────────────────────────────────────────
document.getElementById('locateBtn').addEventListener('click', () => {
  const btn = document.getElementById('locateBtn');
  btn.textContent = '⏳';

  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser.');
    btn.textContent = '📍';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;

      if (locationMarker) {
        map.removeLayer(locationMarker);
      }

      map.flyTo([latitude, longitude], 15, { duration: 1 });

      const youIcon = L.divIcon({
        className: '',
        html: `<div style="
          width: 28px;
          height: 28px;
          background: #C9A84C;
          border: 3px solid #fff;
          border-radius: 50%;
          box-shadow: 0 0 0 6px rgba(201,168,76,0.4);
          animation: pulse 1.5s ease infinite;
        "></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      locationMarker = L.marker([latitude, longitude], { icon: youIcon, zIndexOffset: 9999 })
        .addTo(map)
        .bindPopup('<b>📍 You are here</b>')
        .openPopup();

      btn.textContent = '📍';
    },
    () => {
      alert('Could not get your location. Make sure location access is allowed.');
      btn.textContent = '📍';
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
});

// ── Detail panel ─────────────────────────────────────────────
const panel    = document.getElementById('detailPanel');
const backdrop = document.getElementById('detailBackdrop');

function showDetailById(id) {
  const r = allRestaurants.find(x => x.id === id);
  if (r) showDetail(r);
}
window.showDetailById = showDetailById;

function showDetail(r) {
  document.getElementById('detailImage').src            = r.image;
  document.getElementById('detailName').textContent     = r.name;
  document.getElementById('detailDesc').textContent     = r.description;
  document.getElementById('detailAddress').textContent  = r.address;
  document.getElementById('detailPrice').textContent    = r.price;
  document.getElementById('detailCategory').textContent = categories[r.category]?.label || r.category;
  document.getElementById('detailBadge').textContent    = categories[r.category]?.label || r.category;
  document.getElementById('detailStars').textContent    = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  panel.classList.add('open');
  backdrop.classList.add('open');
}

function closeDetail() {
  panel.classList.remove('open');
  backdrop.classList.remove('open');
}

document.getElementById('detailClose').addEventListener('click', closeDetail);
backdrop.addEventListener('click', closeDetail);

// ── Helpers ──────────────────────────────────────────────────
function updateCount(n) {
  document.getElementById('visibleCount').textContent = n;
}

// ── Sidebar toggle (mobile) ───────────────────────────────────
const sidebar = document.getElementById('sidebar');
const handle  = document.getElementById('sidebarHandle');
if (handle) {
  handle.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    setTimeout(() => map.invalidateSize(), 320);
  });
}

// ── Boot ─────────────────────────────────────────────────────
loadData();

// ── Fix mobile initial view ───────────────────────────────────
setTimeout(() => {
  map.invalidateSize();
  map.setView([41.9028, 12.4964], 14);
}, 300);