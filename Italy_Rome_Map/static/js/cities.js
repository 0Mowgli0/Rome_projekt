// ── City selector ─────────────────────────────────────────────
async function loadCities() {
  try {
    const res  = await fetch('/api/cities');
    const data = await res.json();
    const grid = document.getElementById('cityGrid');
    grid.innerHTML = '';
    data.cities.forEach((city, index) => {
      const card = document.createElement('div');
      card.className = 'city-card';
      card.style.animationDelay = `${index * 120}ms`;
      card.innerHTML = `
        <img class="city-card-img" loading="lazy" src="${city.image}" alt="${city.name}">
        <div class="city-card-overlay"></div>
        <div class="city-card-body">
          <div class="city-card-country">${city.country}</div>
          <div class="city-card-name">${city.name}</div>
          <div class="city-card-desc">${city.description}</div>
        </div>
        <div class="city-card-count">${city.count} places</div>
      `;
      card.addEventListener('click', () => selectCity(city.id, city.name));
      grid.appendChild(card);
    });
  } catch(e) {
    console.error('Failed to load cities:', e);
  }
}

function selectCity(cityId, cityName) {
  currentCity = cityId;
  document.getElementById('citySelector').classList.add('hidden');
  document.getElementById('mapApp').classList.remove('hidden');
  document.getElementById('cityNameHeader').textContent = cityName;
  window.history.pushState({}, '', '/' + cityId);
  loadData(cityId);
  setTimeout(() => map.invalidateSize(), 300);
}

document.getElementById('backToCities').addEventListener('click', () => {
  document.getElementById('mapApp').classList.add('hidden');
  document.getElementById('citySelector').classList.remove('hidden');
  window.history.pushState({}, '', '/');
  loadCities();
});

window.addEventListener('popstate', () => {
  const pathCity = window.location.pathname.replace('/', '').toLowerCase();
  if (!pathCity) {
    document.getElementById('mapApp').classList.add('hidden');
    document.getElementById('citySelector').classList.remove('hidden');
    loadCities();
    return;
  }
  currentCity = pathCity;
  document.getElementById('citySelector').classList.add('hidden');
  document.getElementById('mapApp').classList.remove('hidden');
  document.getElementById('cityNameHeader').textContent =
    pathCity.charAt(0).toUpperCase() + pathCity.slice(1);
  loadData(pathCity);
});