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
    walk_set: (city) => `📍 Set location in ${city} for walk times`,
    you_here: '📍 You are here',
    geo_unsupported: 'Geolocation is not supported by your browser.',
    geo_error: 'Could not get your location. Make sure location access is allowed.',
    onboard_sub: (city) => `Your personal guide to eating well in ${city}`,
    onboard_step1_title: 'Explore the map',
    onboard_step1_desc: 'Tap any marker to see details. Zoom in to ungroup clustered pins.',
    onboard_step1_extra: 'Tap any colored pin to see the restaurant popup. Tap \'View Details\' for the full info panel. Zoom in to split grouped clusters into individual pins.',
    onboard_step2_title: 'Filter by category & price',
    onboard_step2_desc: 'Use the sidebar to filter by type of food or budget.',
    onboard_step2_extra: 'Tap a category like Pizza or Dessert to show only those restaurants on the map. Use the price buttons (€ to €€€€) to filter by budget. Tap All to reset.',
    onboard_step3_title: 'Find what\'s nearby',
    onboard_step3_desc: 'Tap the location button to see walk times and sort restaurants by distance.',
    onboard_step3_extra: 'Tap the 📍 button on the map. Allow location access when prompted. The list will sort by distance and each restaurant will show your walk time.',
    onboard_step4_title: 'Get directions',
    onboard_step4_desc: 'Open any restaurant and tap Get Directions to navigate straight there.',
    onboard_step4_extra: 'Tap any restaurant card or map pin. Scroll down in the detail panel and tap Get Directions — this opens Google Maps with navigation ready to go.',
    onboard_step5_title: 'Switch language',
    onboard_step5_desc: 'Tap the flag in the top right to switch between 6 languages.',
    onboard_step5_extra: 'Tap the flag icon in the top right corner. Each tap cycles: 🇬🇧 English → 🇸🇪 Swedish → 🇮🇹 Italian → 🇩🇪 German → 🇪🇸 Spanish → 🇫🇷 French.',
    onboard_show_btn: 'Show me →',
    onboard_btn: 'Let\'s Eat →',
    onboard_skip: 'Don\'t show this again',
    view_details: 'View Details',
    city_label: 'English',
    categories: {
      fine_dining: 'Fine Dining', trattoria: 'Trattoria', cafe: 'Café',
      pizza: 'Pizza', dessert: 'Dessert', pasta: 'Pasta',
      sandwich: 'Sandwich', snack: 'Snacks', drinks: 'Drinks', bistecca: 'Bistecca',
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
    walk_set: (city) => `📍 Ange plats i ${city} för gångtider`,
    you_here: '📍 Du är här',
    geo_unsupported: 'Geolokalisering stöds inte av din webbläsare.',
    geo_error: 'Kunde inte hämta din plats. Kontrollera att platsåtkomst är tillåten.',
    onboard_sub: (city) => `Din personliga guide till att äta gott i ${city}`,
    onboard_step1_title: 'Utforska kartan',
    onboard_step1_desc: 'Tryck på en markör för att se detaljer. Zooma in för att dela upp kluster.',
    onboard_step1_extra: 'Tryck på en färgad nål för att se restaurangpopupen. Tryck på \'Visa detaljer\' för hela infopanelen. Zooma in för att dela upp kluster.',
    onboard_step2_title: 'Filtrera efter kategori och pris',
    onboard_step2_desc: 'Använd sidofältet för att filtrera efter mattyp eller budget.',
    onboard_step2_extra: 'Tryck på en kategori som Pizza eller Dessert för att visa bara dem. Använd prisknapparna (€ till €€€€) för att filtrera efter budget. Tryck Alla för att återställa.',
    onboard_step3_title: 'Hitta vad som finns i närheten',
    onboard_step3_desc: 'Tryck på platsknappen för att se gångtider och sortera efter avstånd.',
    onboard_step3_extra: 'Tryck på 📍-knappen på kartan. Tillåt platsåtkomst när det efterfrågas. Listan sorteras efter avstånd och varje restaurang visar din gångtid.',
    onboard_step4_title: 'Få vägbeskrivning',
    onboard_step4_desc: 'Öppna en restaurang och tryck på Vägbeskrivning för att navigera dit.',
    onboard_step4_extra: 'Tryck på ett restaurangkort eller en nål. Scrolla ner i infopanelen och tryck på Vägbeskrivning — detta öppnar Google Maps med navigering.',
    onboard_step5_title: 'Byt språk',
    onboard_step5_desc: 'Tryck på flaggan uppe till höger för att byta mellan 6 språk.',
    onboard_step5_extra: 'Tryck på flaggikonen uppe till höger. Varje tryck byter: 🇬🇧 Engelska → 🇸🇪 Svenska → 🇮🇹 Italienska → 🇩🇪 Tyska → 🇪🇸 Spanska → 🇫🇷 Franska.',
    onboard_show_btn: 'Visa mig →',
    onboard_btn: 'Vi äter! →',
    onboard_skip: 'Visa inte igen',
    view_details: 'Visa detaljer',
    city_label: 'Svenska',
    categories: {
      fine_dining: 'Finrestaurang', trattoria: 'Trattoria', cafe: 'Café',
      pizza: 'Pizza', dessert: 'Dessert', pasta: 'Pasta',
      sandwich: 'Smörgås', snack: 'Snacks', drinks: 'Drinkar', bistecca: 'Bistecca',
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
    walk_set: (city) => `📍 Imposta posizione a ${city} per i tempi`,
    you_here: '📍 Sei qui',
    geo_unsupported: 'La geolocalizzazione non è supportata dal tuo browser.',
    geo_error: 'Impossibile ottenere la tua posizione. Verifica che l\'accesso sia consentito.',
    onboard_sub: (city) => `La tua guida personale per mangiare bene a ${city}`,
    onboard_step1_title: 'Esplora la mappa',
    onboard_step1_desc: 'Tocca un segnaposto per vedere i dettagli. Zoom per separare i cluster.',
    onboard_step1_extra: 'Tocca qualsiasi spillo colorato per vedere il popup. Tocca \'Vedi dettagli\' per il pannello completo. Zoom per separare i cluster raggruppati.',
    onboard_step2_title: 'Filtra per categoria e prezzo',
    onboard_step2_desc: 'Usa la barra laterale per filtrare per tipo di cibo o budget.',
    onboard_step2_extra: 'Tocca una categoria come Pizza o Dolci per mostrare solo quei ristoranti. Usa i pulsanti prezzo (€ a €€€€) per filtrare per budget. Tocca Tutti per resettare.',
    onboard_step3_title: 'Trova cosa c\'è vicino',
    onboard_step3_desc: 'Tocca il pulsante posizione per vedere i tempi a piedi e ordinare per distanza.',
    onboard_step3_extra: 'Tocca il pulsante 📍 sulla mappa. Consenti l\'accesso alla posizione. La lista si ordinerà per distanza e ogni ristorante mostrerà il tempo a piedi.',
    onboard_step4_title: 'Ottieni indicazioni',
    onboard_step4_desc: 'Apri un ristorante e tocca Indicazioni per navigare direttamente.',
    onboard_step4_extra: 'Tocca qualsiasi scheda ristorante o spillo. Scorri verso il basso nel pannello e tocca Indicazioni — si apre Google Maps con la navigazione pronta.',
    onboard_step5_title: 'Cambia lingua',
    onboard_step5_desc: 'Tocca la bandiera in alto a destra per cambiare lingua.',
    onboard_step5_extra: 'Tocca l\'icona della bandiera in alto a destra. Ogni tocco cambia: 🇬🇧 Inglese → 🇸🇪 Svedese → 🇮🇹 Italiano → 🇩🇪 Tedesco → 🇪🇸 Spagnolo → 🇫🇷 Francese.',
    onboard_show_btn: 'Mostrami →',
    onboard_btn: 'Mangiamo! →',
    onboard_skip: 'Non mostrare più',
    view_details: 'Vedi dettagli',
    city_label: 'Italiano',
    categories: {
      fine_dining: 'Alta Cucina', trattoria: 'Trattoria', cafe: 'Caffè',
      pizza: 'Pizza', dessert: 'Dolci', pasta: 'Pasta',
      sandwich: 'Panino', snack: 'Snack', drinks: 'Bevande', bistecca: 'Bistecca',
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
    walk_set: (city) => `📍 Standort in ${city} setzen für Gehzeiten`,
    you_here: '📍 Du bist hier',
    geo_unsupported: 'Geolokalisierung wird von deinem Browser nicht unterstützt.',
    geo_error: 'Standort konnte nicht ermittelt werden. Bitte Standortzugriff erlauben.',
    onboard_sub: (city) => `Dein persönlicher Guide zum gut Essen in ${city}`,
    onboard_step1_title: 'Karte erkunden',
    onboard_step1_desc: 'Tippe auf einen Marker für Details. Zoom um Cluster aufzuteilen.',
    onboard_step1_extra: 'Tippe auf einen farbigen Pin für das Restaurant-Popup. Tippe \'Details anzeigen\' für das vollständige Panel. Zoome um gruppierte Cluster aufzuteilen.',
    onboard_step2_title: 'Nach Kategorie & Preis filtern',
    onboard_step2_desc: 'Nutze die Seitenleiste zum Filtern nach Essensart oder Budget.',
    onboard_step2_extra: 'Tippe auf eine Kategorie wie Pizza oder Dessert um nur diese zu zeigen. Nutze die Preisknöpfe (€ bis €€€€) zum Filtern nach Budget. Tippe Alle zum Zurücksetzen.',
    onboard_step3_title: 'Finde was in der Nähe ist',
    onboard_step3_desc: 'Tippe den Standort-Button für Gehzeiten und Sortierung nach Entfernung.',
    onboard_step3_extra: 'Tippe den 📍-Button auf der Karte. Erlaube Standortzugriff wenn gefragt. Die Liste wird nach Entfernung sortiert und zeigt deine Gehzeit.',
    onboard_step4_title: 'Route abrufen',
    onboard_step4_desc: 'Öffne ein Restaurant und tippe Route um direkt dorthin zu navigieren.',
    onboard_step4_extra: 'Tippe eine Restaurantkarte oder einen Pin. Scrolle im Panel nach unten und tippe Route — das öffnet Google Maps mit der Navigation.',
    onboard_step5_title: 'Sprache wechseln',
    onboard_step5_desc: 'Tippe auf die Flagge oben rechts um die Sprache zu wechseln.',
    onboard_step5_extra: 'Tippe das Flaggensymbol oben rechts. Jeder Tipp wechselt: 🇬🇧 Englisch → 🇸🇪 Schwedisch → 🇮🇹 Italienisch → 🇩🇪 Deutsch → 🇪🇸 Spanisch → 🇫🇷 Französisch.',
    onboard_show_btn: 'Zeig mir →',
    onboard_btn: 'Essen gehen! →',
    onboard_skip: 'Nicht mehr anzeigen',
    view_details: 'Details anzeigen',
    city_label: 'Deutsch',
    categories: {
      fine_dining: 'Feine Küche', trattoria: 'Trattoria', cafe: 'Café',
      pizza: 'Pizza', dessert: 'Dessert', pasta: 'Pasta',
      sandwich: 'Sandwich', snack: 'Snacks', drinks: 'Getränke', bistecca: 'Bistecca',
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
    walk_set: (city) => `📍 Establece ubicación en ${city} para tiempos`,
    you_here: '📍 Estás aquí',
    geo_unsupported: 'La geolocalización no está soportada por tu navegador.',
    geo_error: 'No se pudo obtener tu ubicación. Asegúrate de permitir el acceso.',
    onboard_sub: (city) => `Tu guía personal para comer bien en ${city}`,
    onboard_step1_title: 'Explora el mapa',
    onboard_step1_desc: 'Toca cualquier marcador para ver detalles. Zoom para separar grupos.',
    onboard_step1_extra: 'Toca cualquier pin de color para ver el popup. Toca \'Ver detalles\' para el panel completo. Zoom para separar los grupos de pines.',
    onboard_step2_title: 'Filtra por categoría y precio',
    onboard_step2_desc: 'Usa la barra lateral para filtrar por tipo de comida o presupuesto.',
    onboard_step2_extra: 'Toca una categoría como Pizza o Postre para mostrar solo esos restaurantes. Usa los botones de precio (€ a €€€€) para filtrar por presupuesto. Toca Todos para resetear.',
    onboard_step3_title: 'Encuentra lo que hay cerca',
    onboard_step3_desc: 'Toca el botón de ubicación para ver tiempos a pie y ordenar por distancia.',
    onboard_step3_extra: 'Toca el botón 📍 en el mapa. Permite el acceso a la ubicación. La lista se ordenará por distancia y cada restaurante mostrará tu tiempo a pie.',
    onboard_step4_title: 'Obtén indicaciones',
    onboard_step4_desc: 'Abre un restaurante y toca Cómo llegar para navegar directamente.',
    onboard_step4_extra: 'Toca cualquier tarjeta o pin. Desplázate hacia abajo en el panel y toca Cómo llegar — esto abre Google Maps con la navegación lista.',
    onboard_step5_title: 'Cambiar idioma',
    onboard_step5_desc: 'Toca la bandera arriba a la derecha para cambiar el idioma.',
    onboard_step5_extra: 'Toca el icono de bandera arriba a la derecha. Cada toque cambia: 🇬🇧 Inglés → 🇸🇪 Sueco → 🇮🇹 Italiano → 🇩🇪 Alemán → 🇪🇸 Español → 🇫🇷 Francés.',
    onboard_show_btn: 'Muéstrame →',
    onboard_btn: '¡A comer! →',
    onboard_skip: 'No mostrar de nuevo',
    view_details: 'Ver detalles',
    city_label: 'Español',
    categories: {
      fine_dining: 'Alta Cocina', trattoria: 'Trattoria', cafe: 'Café',
      pizza: 'Pizza', dessert: 'Postre', pasta: 'Pasta',
      sandwich: 'Sándwich', snack: 'Snacks', drinks: 'Bebidas', bistecca: 'Bistecca',
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
    walk_set: (city) => `📍 Définir position à ${city} pour les temps`,
    you_here: '📍 Vous êtes ici',
    geo_unsupported: 'La géolocalisation n\'est pas supportée par votre navigateur.',
    geo_error: 'Impossible d\'obtenir votre position. Vérifiez que l\'accès est autorisé.',
    onboard_sub: (city) => `Votre guide personnel pour bien manger à ${city}`,
    onboard_step1_title: 'Explorer la carte',
    onboard_step1_desc: 'Appuyez sur un marqueur pour voir les détails. Zoomez pour séparer les groupes.',
    onboard_step1_extra: 'Appuyez sur une épingle colorée pour voir le popup. Appuyez sur \'Voir les détails\' pour le panneau complet. Zoomez pour séparer les groupes.',
    onboard_step2_title: 'Filtrer par catégorie et prix',
    onboard_step2_desc: 'Utilisez la barre latérale pour filtrer par type de nourriture ou budget.',
    onboard_step2_extra: 'Appuyez sur une catégorie comme Pizza ou Dessert pour n\'afficher que ceux-là. Utilisez les boutons de prix (€ à €€€€) pour filtrer par budget. Appuyez sur Tous pour réinitialiser.',
    onboard_step3_title: 'Trouver ce qui est proche',
    onboard_step3_desc: 'Appuyez sur le bouton de localisation pour voir les temps de marche.',
    onboard_step3_extra: 'Appuyez sur le bouton 📍 sur la carte. Autorisez l\'accès à la localisation. La liste sera triée par distance et chaque restaurant affichera votre temps de marche.',
    onboard_step4_title: 'Obtenir l\'itinéraire',
    onboard_step4_desc: 'Ouvrez un restaurant et appuyez sur Itinéraire pour naviguer directement.',
    onboard_step4_extra: 'Appuyez sur une carte ou une épingle. Faites défiler vers le bas et appuyez sur Itinéraire — cela ouvre Google Maps avec la navigation prête.',
    onboard_step5_title: 'Changer de langue',
    onboard_step5_desc: 'Appuyez sur le drapeau en haut à droite pour changer de langue.',
    onboard_step5_extra: 'Appuyez sur l\'icône du drapeau en haut à droite. Chaque appui change: 🇬🇧 Anglais → 🇸🇪 Suédois → 🇮🇹 Italien → 🇩🇪 Allemand → 🇪🇸 Espagnol → 🇫🇷 Français.',
    onboard_show_btn: 'Montre-moi →',
    onboard_btn: 'On mange ! →',
    onboard_skip: 'Ne plus afficher',
    view_details: 'Voir les détails',
    city_label: 'Français',
    categories: {
      fine_dining: 'Gastronomie', trattoria: 'Trattoria', cafe: 'Café',
      pizza: 'Pizza', dessert: 'Dessert', pasta: 'Pâtes',
      sandwich: 'Sandwich', snack: 'Snacks', drinks: 'Boissons', bistecca: 'Bistecca',
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
  document.getElementById('langFlag').src = lang.flag;
  document.getElementById('searchInput').placeholder = lang.search_placeholder;
  const titles = document.querySelectorAll('.sidebar-title');
  titles[0].textContent = lang.filter_category;
  titles[1].textContent = lang.filter_price;
  titles[2].textContent = lang.listings;
  document.querySelector('[data-cat="all"] .filter-label').textContent = lang.all;
  document.querySelectorAll('.filter-btn[data-cat]').forEach(btn => {
    const cat = btn.dataset.cat;
    if (cat !== 'all' && lang.categories[cat]) {
      btn.querySelector('.filter-label').textContent = lang.categories[cat];
    }
  });
  document.getElementById('directionsBtn').textContent = lang.directions;
  const cityName = document.getElementById('cityNameHeader')?.textContent || 'Rome';
  document.getElementById('onboardSub').textContent        = t('onboard_sub', cityName);
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
  document.getElementById('step1Extra').textContent = lang.onboard_step1_extra;
  document.getElementById('step2Extra').textContent = lang.onboard_step2_extra;
  document.getElementById('step3Extra').textContent = lang.onboard_step3_extra;
  document.getElementById('step4Extra').textContent = lang.onboard_step4_extra;
  document.getElementById('step5Extra').textContent = lang.onboard_step5_extra;
  document.querySelectorAll('.onboard-show-btn').forEach(btn => {
    btn.textContent = lang.onboard_show_btn;
  });
  const citySpan = document.querySelector('.header-location span');
  if (citySpan) citySpan.textContent = lang.city_label;
  Object.values(markers).forEach(({ marker, restaurant: r }) => {
    const catLabel = lang.categories[r.category] || categories[r.category]?.label || r.category;
    marker.setPopupContent(`
      <div class="popup-inner">
        <div class="popup-cat">${catLabel}</div>
        <div class="popup-name">${r.name}</div>
        <div class="popup-desc">${r.description.slice(0, 90)}…</div>
        <div class="popup-price">${r.price}</div>
      </div>
      <button class="popup-btn" onclick="showDetailById(${r.id})">${lang.view_details}</button>
    `);
  });
  applyFilters();
}