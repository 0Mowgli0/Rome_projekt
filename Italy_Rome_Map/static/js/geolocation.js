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
      const { latitude: lat, longitude: lng } = pos.coords;
      userLocation = { lat, lng };
      localStorage.setItem('userLocation', JSON.stringify(userLocation));
      applyFilters();
      if (locationMarker) map.removeLayer(locationMarker);
      map.flyTo([lat, lng], 15, { duration: 1 });
      const youIcon = L.divIcon({
        className: '',
        html: `<div style="
          width:28px;height:28px;background:#C9A84C;
          border:3px solid #fff;border-radius:50%;
          box-shadow:0 0 0 6px rgba(201,168,76,0.4);
          animation:pulse 1.5s ease infinite;
        "></div>`,
        iconSize: [28, 28], iconAnchor: [14, 14],
      });
      locationMarker = L.marker([lat, lng], { icon: youIcon, zIndexOffset: 9999 })
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