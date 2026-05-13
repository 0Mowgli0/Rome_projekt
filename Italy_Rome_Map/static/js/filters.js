// ── Distance helper ───────────────────────────────────────────
function distanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ── Filter UI ─────────────────────────────────────────────────
function buildFilters() {
  const list = document.getElementById('filterList');
  list.querySelectorAll('.filter-btn:not([data-cat="all"])').forEach(btn => btn.remove());
  document.getElementById('count-all').textContent = allRestaurants.length;
  for (const [key, cat] of Object.entries(categories)) {
    const count = allRestaurants.filter(r => r.category === key).length;
    const btn   = document.createElement('button');
    btn.className    = 'filter-btn';
    btn.dataset.cat  = key;
    btn.innerHTML    = `
      <span class="filter-icon" style="color:${CAT_COLORS[key]}">${CAT_ICONS[key]}</span>
      <span class="filter-label">${t('categories')[key] || cat.label}</span>
      <span class="filter-count" id="count-${key}">${count}</span>
    `;
    btn.addEventListener('click', () => setFilter(key));
    list.appendChild(btn);
  }
}

function setFilter(cat) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  applyFilters();
}

function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  let filtered = allRestaurants;
  if (activeCategory !== 'all') filtered = filtered.filter(r => r.category === activeCategory);
  if (activePrice    !== 'all') filtered = filtered.filter(r => r.price === activePrice);
  if (query) filtered = filtered.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.description.toLowerCase().includes(query)
  );
  if (userLocation) {
    filtered = [...filtered].sort((a, b) =>
      distanceMeters(userLocation.lat, userLocation.lng, a.lat, a.lng) -
      distanceMeters(userLocation.lat, userLocation.lng, b.lat, b.lng)
    );
  }
  renderRestaurants(filtered);
  updateMarkerVisibility(filtered);
  updateCount(filtered.length);
  if (filtered.length > 0) fitMapToVisible(filtered);
}

document.getElementById('searchInput').addEventListener('input', () => applyFilters());

document.querySelectorAll('.price-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    activePrice = btn.dataset.price;
    document.querySelectorAll('.price-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.price === activePrice)
    );
    applyFilters();
  });
});