// ── Shared state ──────────────────────────────────────────────
let allRestaurants = [];
let categories     = {};
let activeCategory = 'all';
let activePrice    = 'all';
let markers        = {};
let activeMarker   = null;
let clusterGroup   = null;
let locationMarker = null;
let userLocation   = null;
let currentCity    = null;
let map            = null;

try {
  const saved = localStorage.getItem('userLocation');
  if (saved) userLocation = JSON.parse(saved);
} catch(e) {}

// ── Category colors & icons ───────────────────────────────────
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
  bistecca:    '#8B1A1A',
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
  bistecca:    '🥩',
};