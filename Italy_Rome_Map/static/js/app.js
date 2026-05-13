// ── URL routing on load ───────────────────────────────────────
const pathCity = window.location.pathname.replace('/', '').toLowerCase();
if (pathCity && pathCity !== '') {
  document.getElementById('citySelector').classList.add('hidden');
  document.getElementById('mapApp').classList.remove('hidden');
  currentCity = pathCity;
  document.getElementById('cityNameHeader').textContent =
    pathCity.charAt(0).toUpperCase() + pathCity.slice(1);
} else {
  loadCities();
}

// ── Load city data ────────────────────────────────────────────
async function loadData(cityId = 'rome') {
  try {
    const res  = await fetch(`/api/cities/${cityId}`);
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    allRestaurants = data.restaurants;
    categories     = data.categories;
    clusterGroup.clearLayers();
    markers = {};
    if (data.city) map.setView([data.city.center.lat, data.city.center.lng], data.city.zoom);
    buildFilters();
    renderRestaurants(allRestaurants);
    placeMarkers(allRestaurants);
    updateCount(allRestaurants.length);
    applyLanguage();
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.add('hidden');
    setTimeout(() => overlay.style.display = 'none', 500);
  } catch(err) {
    console.error('Failed to load data:', err);
    document.getElementById('loadingOverlay').style.display = 'none';
    document.getElementById('errorOverlay').classList.remove('hidden');
  }
}

// ── Language switcher ─────────────────────────────────────────
const langOrder = ['en', 'sv', 'it', 'de', 'es', 'fr'];
document.getElementById('langFlag').addEventListener('click', () => {
  const idx = langOrder.indexOf(currentLang);
  currentLang = langOrder[(idx + 1) % langOrder.length];
  localStorage.setItem('lang', currentLang);
  applyLanguage();
});

// ── Sidebar toggle (mobile) ───────────────────────────────────
const sidebar = document.getElementById('sidebar');
const handle  = document.getElementById('sidebarHandle');
if (handle) {
  handle.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    setTimeout(() => map.invalidateSize(), 320);
  });
}

// ── Error retry ───────────────────────────────────────────────
document.getElementById('errorRetry').addEventListener('click', () => {
  document.getElementById('errorOverlay').classList.add('hidden');
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex';
  overlay.classList.remove('hidden');
  document.querySelector('.loading-bar-fill').style.animation = 'none';
  setTimeout(() => {
    document.querySelector('.loading-bar-fill').style.animation = 'loading-progress 1.8s ease forwards';
    loadData();
  }, 50);
});

// ── Boot ─────────────────────────────────────────────────────
if (pathCity && pathCity !== '') loadData(pathCity);

setTimeout(() => map.invalidateSize(), 300);

document.querySelector('[data-cat="all"]').addEventListener('click', () => setFilter('all'));