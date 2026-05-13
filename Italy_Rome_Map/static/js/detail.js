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
  const websiteName = r.website
    ? r.website.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]
    : r.address;
  document.getElementById('detailAddress').textContent  = r.website ? websiteName : r.address;
  document.getElementById('detailAddress').href         = r.website || '#';
  document.getElementById('detailPrice').textContent    = r.price;
  document.getElementById('detailHours').textContent    = r.hours || t('hours_na');
  const catLabel = t('categories')[r.category] || categories[r.category]?.label || r.category;
  document.getElementById('detailCategory').textContent = catLabel;
  document.getElementById('detailBadge').textContent    = catLabel;
  document.getElementById('detailStars').textContent    = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  document.getElementById('directionsBtn').textContent  = t('directions');
  document.getElementById('directionsBtn').href         = r.maps_url;

  try {
    const walkEl   = document.getElementById('detailWalkTime');
    const cityName = document.getElementById('cityNameHeader')?.textContent || 'Rome';
    if (userLocation) {
      const dist    = distanceMeters(userLocation.lat, userLocation.lng, r.lat, r.lng);
      const minutes = Math.round((dist * 1.3) / 80);
      if (minutes >= 60) {
        walkEl.textContent = `🚶 ~${Math.round(minutes / 60)}h walk`;
      } else {
        walkEl.textContent = t('walk', minutes);
      }
    } else {
      walkEl.textContent = t('walk_set', cityName);
    }
    walkEl.style.display = 'flex';
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