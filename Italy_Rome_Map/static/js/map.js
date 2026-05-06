// ── Translations ──────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    flag: 'https://flagcdn.com/w20/gb.png',
    search_placeholder: 'Search restaurants…',
    filter_category: 'Filter by Category',
    filter_price: 'Filter by Price',
    listings: 'Listings',
    all: 'All',
    directions: 'Get Directions →',
    hours_na: 'Hours not available',
    walk: (n) => `🚶 ${n} min walk away`,
    walk_set: '📍 Set location in Rome for walk times',
    you_here: '📍 You are here',
    geo_unsupported: 'Geolocation is not supported by your browser.',
    geo_error: 'Could not get your location. Make sure location access is allowed.',
    onboard_sub: 'Your personal guide to eating well in Rome',
    onboard_step1_title: 'Explore the map',
    onboard_step1_desc: 'Tap any marker to see details. Zoom in to ungroup clustered pins.',
    onboard_step2_title: 'Filter by category & price',
    onboard_step2_desc: 'Use the sidebar to filter by type of food or budget.',
    onboard_step3_title: 'Find what\'s nearby',
    onboard_step3_desc: 'Tap the location button to see walk times and sort restaurants by distance.',
    onboard_step4_title: 'Get directions',
    onboard_step4_desc: 'Open any restaurant and tap Get Directions to navigate straight there.',
    onboard_step5_title: 'Switch language',
    onboard_step5_desc: 'Tap the flag in the top right to switch between 6 languages.',
    onboard_btn: 'Let\'s Eat →',
    onboard_skip: 'Don\'t show this again',
    view_details: 'View Details',
    categories: {
      fine_dining: 'Fine Dining',
      trattoria: 'Trattoria',
      cafe: 'Café',
      pizza: 'Pizza',
      dessert: 'Dessert',
      pasta: 'Pasta',
      sandwich: 'Sandwich',
      snack: 'Snacks',
      drinks: 'Drinks',
    }
  },
  sv: {
    flag: 'https://flagcdn.com/w20/se.png',
    search_placeholder: 'Sök restauranger…',
    filter_category: 'Filtrera efter kategori',
    filter_price: 'Filtrera efter pris',
    listings: 'Restauranger',
    all: 'Alla',
    directions: 'Vägbeskrivning →',
    hours_na: 'Öppettider saknas',
    walk: (n) => `🚶 ${n} min promenad`,
    walk_set: '📍 Ange plats i Rom för gångtider',
    you_here: '📍 Du är här',
    geo_unsupported: 'Geolokalisering stöds inte av din webbläsare.',
    geo_error: 'Kunde inte hämta din plats. Kontrollera att platsåtkomst är tillåten.',
    onboard_sub: 'Din personliga guide till att äta gott i Rom',
    onboard_step1_title: 'Utforska kartan',
    onboard_step1_desc: 'Tryck på en markör för att se detaljer. Zooma in för att dela upp kluster.',
    onboard_step2_title: 'Filtrera efter kategori och pris',
    onboard_step2_desc: 'Använd sidofältet för att filtrera efter mattyp eller budget.',
    onboard_step3_title: 'Hitta vad som finns i närheten',
    onboard_step3_desc: 'Tryck på platsknappen för att se gångtider och sortera efter avstånd.',
    onboard_step4_title: 'Få vägbeskrivning',
    onboard_step4_desc: 'Öppna en restaurang och tryck på Vägbeskrivning för att navigera dit.',
    onboard_step5_title: 'Byt språk',
    onboard_step5_desc: 'Tryck på flaggan uppe till höger för att byta mellan 6 språk.',
    onboard_btn: 'Vi äter! →',
    onboard_skip: 'Visa inte igen',
    view_details: 'Visa detaljer',
    categories: {
      fine_dining: 'Finrestaurang',
      trattoria: 'Trattoria',
      cafe: 'Café',
      pizza: 'Pizza',
      dessert: 'Dessert',
      pasta: 'Pasta',
      sandwich: 'Smörgås',
      snack: 'Snacks',
      drinks: 'Drinkar',
    }
  },
  it: {
    flag: 'https://flagcdn.com/w20/it.png',
    search_placeholder: 'Cerca ristoranti…',
    filter_category: 'Filtra per categoria',
    filter_price: 'Filtra per prezzo',
    listings: 'Ristoranti',
    all: 'Tutti',
    directions: 'Indicazioni →',
    hours_na: 'Orari non disponibili',
    walk: (n) => `🚶 ${n} min a piedi`,
    walk_set: '📍 Imposta posizione a Roma per i tempi',
    you_here: '📍 Sei qui',
    geo_unsupported: 'La geolocalizzazione non è supportata dal tuo browser.',
    geo_error: 'Impossibile ottenere la tua posizione. Verifica che l\'accesso sia consentito.',
    onboard_sub: 'La tua guida personale per mangiare bene a Roma',
    onboard_step1_title: 'Esplora la mappa',
    onboard_step1_desc: 'Tocca un segnaposto per vedere i dettagli. Zoom per separare i cluster.',
    onboard_step2_title: 'Filtra per categoria e prezzo',
    onboard_step2_desc: 'Usa la barra laterale per filtrare per tipo di cibo o budget.',
    onboard_step3_title: 'Trova cosa c\'è vicino',
    onboard_step3_desc: 'Tocca il pulsante posizione per vedere i tempi a piedi e ordinare per distanza.',
    onboard_step4_title: 'Ottieni indicazioni',
    onboard_step4_desc: 'Apri un ristorante e tocca Indicazioni per navigare direttamente.',
    onboard_step5_title: 'Cambia lingua',
    onboard_step5_desc: 'Tocca la bandiera in alto a destra per cambiare lingua.',
    onboard_btn: 'Mangiamo! →',
    onboard_skip: 'Non mostrare più',
    view_details: 'Vedi dettagli',
    categories: {
      fine_dining: 'Alta Cucina',
      trattoria: 'Trattoria',
      cafe: 'Caffè',
      pizza: 'Pizza',
      dessert: 'Dolci',
      pasta: 'Pasta',
      sandwich: 'Panino',
      snack: 'Snack',
      drinks: 'Bevande',
    }
  },
  de: {
    flag: 'https://flagcdn.com/w20/de.png',
    search_placeholder: 'Restaurants suchen…',
    filter_category: 'Nach Kategorie filtern',
    filter_price: 'Nach Preis filtern',
    listings: 'Restaurants',
    all: 'Alle',
    directions: 'Route →',
    hours_na: 'Öffnungszeiten nicht verfügbar',
    walk: (n) => `🚶 ${n} Min. zu Fuß`,
    walk_set: '📍 Standort in Rom setzen für Gehzeiten',
    you_here: '📍 Du bist hier',
    geo_unsupported: 'Geolokalisierung wird von deinem Browser nicht unterstützt.',
    geo_error: 'Standort konnte nicht ermittelt werden. Bitte Standortzugriff erlauben.',
    onboard_sub: 'Dein persönlicher Guide zum gut Essen in Rom',
    onboard_step1_title: 'Karte erkunden',
    onboard_step1_desc: 'Tippe auf einen Marker für Details. Zoom um Cluster aufzuteilen.',
    onboard_step2_title: 'Nach Kategorie & Preis filtern',
    onboard_step2_desc: 'Nutze die Seitenleiste zum Filtern nach Essensart oder Budget.',
    onboard_step3_title: 'Finde was in der Nähe ist',
    onboard_step3_desc: 'Tippe den Standort-Button für Gehzeiten und Sortierung nach Entfernung.',
    onboard_step4_title: 'Route abrufen',
    onboard_step4_desc: 'Öffne ein Restaurant und tippe Route um direkt dorthin zu navigieren.',
    onboard_step5_title: 'Sprache wechseln',
    onboard_step5_desc: 'Tippe auf die Flagge oben rechts um die Sprache zu wechseln.',
    onboard_btn: 'Essen gehen! →',
    onboard_skip: 'Nicht mehr anzeigen',
    view_details: 'Details anzeigen',
    categories: {
      fine_dining: 'Feine Küche',
      trattoria: 'Trattoria',
      cafe: 'Café',
      pizza: 'Pizza',
      dessert: 'Dessert',
      pasta: 'Pasta',
      sandwich: 'Sandwich',
      snack: 'Snacks',
      drinks: 'Getränke',
    }
  },
  es: {
    flag: 'https://flagcdn.com/w20/es.png',
    search_placeholder: 'Buscar restaurantes…',
    filter_category: 'Filtrar por categoría',
    filter_price: 'Filtrar por precio',
    listings: 'Restaurantes',
    all: 'Todos',
    directions: 'Cómo llegar →',
    hours_na: 'Horario no disponible',
    walk: (n) => `🚶 ${n} min caminando`,
    walk_set: '📍 Establece ubicación en Roma para tiempos',
    you_here: '📍 Estás aquí',
    geo_unsupported: 'La geolocalización no está soportada por tu navegador.',
    geo_error: 'No se pudo obtener tu ubicación. Asegúrate de permitir el acceso.',
    onboard_sub: 'Tu guía personal para comer bien en Roma',
    onboard_step1_title: 'Explora el mapa',
    onboard_step1_desc: 'Toca cualquier marcador para ver detalles. Zoom para separar grupos.',
    onboard_step2_title: 'Filtra por categoría y precio',
    onboard_step2_desc: 'Usa la barra lateral para filtrar por tipo de comida o presupuesto.',
    onboard_step3_title: 'Encuentra lo que hay cerca',
    onboard_step3_desc: 'Toca el botón de ubicación para ver tiempos a pie y ordenar por distancia.',
    onboard_step4_title: 'Obtén indicaciones',
    onboard_step4_desc: 'Abre un restaurante y toca Cómo llegar para navegar directamente.',
    onboard_step5_title: 'Cambiar idioma',
    onboard_step5_desc: 'Toca la bandera arriba a la derecha para cambiar el idioma.',
    onboard_btn: '¡A comer! →',
    onboard_skip: 'No mostrar de nuevo',
    view_details: 'Ver detalles',
    categories: {
      fine_dining: 'Alta Cocina',
      trattoria: 'Trattoria',
      cafe: 'Café',
      pizza: 'Pizza',
      dessert: 'Postre',
      pasta: 'Pasta',
      sandwich: 'Sándwich',
      snack: 'Snacks',
      drinks: 'Bebidas',
    }
  },
  fr: {
    flag: 'https://flagcdn.com/w20/fr.png',
    search_placeholder: 'Chercher des restaurants…',
    filter_category: 'Filtrer par catégorie',
    filter_price: 'Filtrer par prix',
    listings: 'Restaurants',
    all: 'Tous',
    directions: 'Itinéraire →',
    hours_na: 'Horaires non disponibles',
    walk: (n) => `🚶 ${n} min à pied`,
    walk_set: '📍 Définir position à Rome pour les temps',
    you_here: '📍 Vous êtes ici',
    geo_unsupported: 'La géolocalisation n\'est pas supportée par votre navigateur.',
    geo_error: 'Impossible d\'obtenir votre position. Vérifiez que l\'accès est autorisé.',
    onboard_sub: 'Votre guide personnel pour bien manger à Rome',
    onboard_step1_title: 'Explorer la carte',
    onboard_step1_desc: 'Appuyez sur un marqueur pour voir les détails. Zoomez pour séparer les groupes.',
    onboard_step2_title: 'Filtrer par catégorie et prix',
    onboard_step2_desc: 'Utilisez la barre latérale pour filtrer par type de nourriture ou budget.',
    onboard_step3_title: 'Trouver ce qui est proche',
    onboard_step3_desc: 'Appuyez sur le bouton de localisation pour voir les temps de marche.',
    onboard_step4_title: 'Obtenir l\'itinéraire',
    onboard_step4_desc: 'Ouvrez un restaurant et appuyez sur Itinéraire pour naviguer directement.',
    onboard_step5_title: 'Changer de langue',
    onboard_step5_desc: 'Appuyez sur le drapeau en haut à droite pour changer de langue.',
    onboard_btn: 'On mange ! →',
    onboard_skip: 'Ne plus afficher',
    view_details: 'Voir les détails',
    categories: {
      fine_dining: 'Gastronomie',
      trattoria: 'Trattoria',
      cafe: 'Café',
      pizza: 'Pizza',
      dessert: 'Dessert',
      pasta: 'Pâtes',
      sandwich: 'Sandwich',
      snack: 'Snacks',
      drinks: 'Boissons',
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function t(key, ...args) {
  const val = TRANSLATIONS[currentLang][key];
  return typeof val === 'function' ? val(...args) : val;
}

function applyLanguage() {
  const lang = TRANSLATIONS[currentLang];

  // Flag
  document.getElementById('langFlag').src = lang.flag;

  // Search
  document.getElementById('searchInput').placeholder = lang.search_placeholder;

  // Sidebar titles
  const titles = document.querySelectorAll('.sidebar-title');
  titles[0].textContent = lang.filter_category;
  titles[1].textContent = lang.filter_price;
  titles[2].textContent = lang.listings;

  // All filter button
  document.querySelector('[data-cat="all"] .filter-label').textContent = lang.all;

  // Category filter buttons
  document.querySelectorAll('.filter-btn[data-cat]').forEach(btn => {
    const cat = btn.dataset.cat;
    if (cat !== 'all' && lang.categories[cat]) {
      btn.querySelector('.filter-label').textContent = lang.categories[cat];
    }
  });

  // Directions button
  document.getElementById('directionsBtn').textContent = lang.directions;

  // Onboarding
  document.getElementById('onboardSub').textContent        = lang.onboard_sub;
  document.getElementById('onboardStep1Title').textContent = lang.onboard_step1_title;
  document.getElementById('onboardStep1Desc').textContent  = lang.onboard_step1_desc;
  document.getElementById('onboardStep2Title').textContent = lang.onboard_step2_title;
  document.getElementById('onboardStep2Desc').textContent  = lang.onboard_step2_desc;
  document.getElementById('onboardStep3Title').textContent = lang.onboard_step3_title;
  document.getElementById('onboardStep3Desc').textContent  = lang.onboard_step3_desc;
  document.getElementById('onboardStep4Title').textContent = lang.onboard_step4_title;
  document.getElementById('onboardStep4Desc').textContent  = lang.onboard_step4_desc;
  document.getElementById('onboardStep5Title').textContent = lang.onboard_step5_title;
  document.getElementById('onboardStep5Desc').textContent  = lang.onboard_step5_desc;
  document.getElementById('onboardBtn').textContent        = lang.onboard_btn;
  document.getElementById('onboardSkip').textContent       = lang.onboard_skip;

  // Refresh all popups with new language
  Object.values(markers).forEach(({ marker, restaurant: r }) => {
    const catLabel = lang.categories[r.category] || categories[r.category]?.label || r.category;
    const popupHtml = `
      <div class="popup-inner">
        <div class="popup-cat">${catLabel}</div>
        <div class="popup-name">${r.name}</div>
        <div class="popup-desc">${r.description.slice(0, 90)}…</div>
        <div class="popup-price">${r.price}</div>
      </div>
      <button class="popup-btn" onclick="showDetailById(${r.id})">${lang.view_details}</button>
    `;
    marker.setPopupContent(popupHtml);
  });

  // Re-render restaurant list with new language
  applyFilters();
}

// ── State ───────────────────────────────────────────────────
let allRestaurants = [];
let categories     = {};
let activeCategory = 'all';
let activePrice    = 'all';
let markers        = {};
let activeMarker   = null;
let clusterGroup   = null;
let locationMarker = null;
let userLocation   = null;

try {
  const saved = localStorage.getItem('userLocation');
  if (saved) userLocation = JSON.parse(saved);
} catch(e) {}

// ── Map init ─────────────────────────────────────────────────
const map = L.map('map', {
  center: [41.9028, 12.4964],
  zoom: 14,
  zoomControl: false,
});

L.control.zoom({ position: 'bottomleft' }).addTo(map);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
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
  dessert:     '#9B6BB5',
  pasta:       '#E8A838',
  sandwich:    '#7BAE7F',
  snack:       '#E07B54',
  drinks:      '#4A90C4',
};

const CAT_ICONS = {
  fine_dining: '🍽️',
  trattoria:   '🫕',
  cafe:        '☕',
  pizza:       '🍕',
  dessert:     '🍦',
  pasta:       '🍝',
  sandwich:    '🥪',
  snack:       '🍿',
  drinks:      '🍹',
};

// ── Open/Closed check ─────────────────────────────────────────
function isOpenNow(r) {
  if (!r.hours_structured) return null;

  // Use Rome time (UTC+1 in winter, UTC+2 in summer)
  const now = new Date();
  const romeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Rome' }));
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const day = days[romeTime.getDay()];
  const currentMinutes = romeTime.getHours() * 60 + romeTime.getMinutes();

  const slots = r.hours_structured[day];
  if (!slots || slots.length === 0) return false;

  for (const slot of slots) {
    const [openH, openM]   = slot.open.split(':').map(Number);
    const [closeH, closeM] = slot.close.split(':').map(Number);
    let openMins  = openH * 60 + openM;
    let closeMins = closeH * 60 + closeM;

    // Handle past midnight (e.g. close at 02:00)
    if (closeMins <= openMins) closeMins += 24 * 60;
    if (currentMinutes < openMins) {
      // Check if we're in the overnight window
      if (currentMinutes + 24 * 60 <= closeMins) return true;
    } else if (currentMinutes >= openMins && currentMinutes < closeMins) {
      return true;
    }
  }
  return false;
}

// ── Fetch data ───────────────────────────────────────────────
async function loadData() {
  try {
    const res = await fetch('/api/restaurants');
    if (!res.ok) throw new Error('Network response was not ok');

    const data = await res.json();
    allRestaurants = data.restaurants;
    categories     = data.categories;

    buildFilters();
    renderRestaurants(allRestaurants);
    placeMarkers(allRestaurants);
    updateCount(allRestaurants.length);
    applyLanguage();

    // Hide loading overlay smoothly
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('hidden');
    setTimeout(() => loadingOverlay.style.display = 'none', 500);

  } catch (err) {
    console.error('Failed to load data:', err);
    document.getElementById('loadingOverlay').style.display = 'none';
    document.getElementById('errorOverlay').classList.remove('hidden');
  }
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
      <span class="filter-label">${t('categories')[key] || cat.label}</span>
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
  applyFilters();
}

// ── Search ───────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('input', function () {
  applyFilters();
});

// ── Apply all filters ─────────────────────────────────────────
function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();

  let filtered = allRestaurants;

  if (activeCategory !== 'all') {
    filtered = filtered.filter(r => r.category === activeCategory);
  }

  if (activePrice !== 'all') {
    filtered = filtered.filter(r => r.price === activePrice);
  }

  if (query) {
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(query) ||
      r.description.toLowerCase().includes(query)
    );
  }

  if (userLocation) {
    filtered = [...filtered].sort((a, b) => {
      const distA = Math.pow(a.lat - userLocation.lat, 2) + Math.pow(a.lng - userLocation.lng, 2);
      const distB = Math.pow(b.lat - userLocation.lat, 2) + Math.pow(b.lng - userLocation.lng, 2);
      return distA - distB;
    });
  }

  renderRestaurants(filtered);
  updateMarkerVisibility(filtered);
  updateCount(filtered.length);
  if (filtered.length > 0) fitMapToVisible(filtered);
}

// ── Restaurant sidebar list ──────────────────────────────────
function renderRestaurants(list) {
  const container = document.getElementById('restaurantList');
  container.innerHTML = '';
  list.forEach((r, i) => {
    const catLabel = t('categories')[r.category] || categories[r.category]?.label || r.category;
    const isOpen = isOpenNow(r);

    const card = document.createElement('div');
    card.className = 'rest-card';
    card.dataset.id = r.id;
    card.style.animationDelay = `${i * 30}ms`;
    card.innerHTML = `
      <img class="rest-card-thumb" src="${r.image}" alt="${r.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=44&h=44&fit=crop'">
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
        sidebar.classList.remove('expanded');
        setTimeout(() => map.invalidateSize(), 320);
      }
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

    const catLabel = t('categories')[r.category] || categories[r.category]?.label || r.category;
    const popupHtml = `
      <div class="popup-inner">
        <div class="popup-cat">${catLabel}</div>
        <div class="popup-name">${r.name}</div>
        <div class="popup-desc">${r.description.slice(0, 90)}…</div>
        <div class="popup-price">${r.price}</div>
      </div>
      <button class="popup-btn" onclick="showDetailById(${r.id})">${t('view_details')}</button>
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
    alert(t('geo_unsupported'));
    btn.textContent = '📍';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      userLocation = { lat: latitude, lng: longitude };
      localStorage.setItem('userLocation', JSON.stringify(userLocation));
      applyFilters();

      if (locationMarker) map.removeLayer(locationMarker);

      map.flyTo([latitude, longitude], 15, { duration: 1 });

      const youIcon = L.divIcon({
        className: '',
        html: `<div style="
          width: 28px; height: 28px;
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
        .bindPopup(`<b>${t('you_here')}</b>`)
        .openPopup();

      btn.textContent = '📍';
    },
    () => {
      alert(t('geo_error'));
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
  document.getElementById('detailImage').src             = r.image;
  document.getElementById('detailName').textContent      = r.name;
  document.getElementById('detailDesc').textContent      = r.description;
  document.getElementById('detailAddress').textContent   = r.address;
  document.getElementById('detailAddress').href          = r.website;
  document.getElementById('detailPrice').textContent     = r.price;
  document.getElementById('detailHours').textContent     = r.hours || t('hours_na');
  document.getElementById('detailCategory').textContent  = t('categories')[r.category] || categories[r.category]?.label || r.category;
  document.getElementById('detailBadge').textContent     = t('categories')[r.category] || categories[r.category]?.label || r.category;
  document.getElementById('detailStars').textContent     = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  document.getElementById('directionsBtn').textContent   = t('directions');
  document.getElementById('directionsBtn').href          = r.maps_url;

  try {
    const walkEl = document.getElementById('detailWalkTime');
    if (userLocation) {
      const R = 6371000;
      const dLat = (r.lat - userLocation.lat) * Math.PI / 180;
      const dLng = (r.lng - userLocation.lng) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(userLocation.lat * Math.PI / 180) *
                Math.cos(r.lat * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
      const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const minutes = Math.round((distance * 1.3) / 80);
      if (minutes >= 60) {
        const hours = Math.round(minutes / 60);
        walkEl.textContent = `🚶 ~${hours}h walk`;
      } else {
        walkEl.textContent = t('walk', minutes);
      }
      walkEl.style.display = 'flex';
    } else {
      walkEl.style.display = 'none';
    }
  } catch(e) {
    console.error('Walk time error:', e);
  }

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

// ── Price filter ──────────────────────────────────────────────
document.querySelectorAll('.price-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    activePrice = btn.dataset.price;
    document.querySelectorAll('.price-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.price === activePrice);
    });
    applyFilters();
  });
});

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

// ── Onboarding ────────────────────────────────────────────────
const onboardBackdrop = document.getElementById('onboardBackdrop');
const onboardBtn      = document.getElementById('onboardBtn');
const onboardSkip     = document.getElementById('onboardSkip');
const helpBtn         = document.getElementById('helpBtn');

if (localStorage.getItem('onboardDone')) {
  onboardBackdrop.classList.add('hidden');
}

onboardBtn.addEventListener('click', () => {
  onboardBackdrop.classList.add('hidden');
});

onboardSkip.addEventListener('click', () => {
  localStorage.setItem('onboardDone', 'true');
  onboardBackdrop.classList.add('hidden');
});

helpBtn.addEventListener('click', () => {
  onboardBackdrop.classList.remove('hidden');
});

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
loadData();

setTimeout(() => {
  map.invalidateSize();
  map.setView([41.9028, 12.4964], 14);
}, 300);