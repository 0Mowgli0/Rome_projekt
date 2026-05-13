// ── Onboarding ────────────────────────────────────────────────
const onboardBackdrop = document.getElementById('onboardBackdrop');
const onboardBtn      = document.getElementById('onboardBtn');
const onboardSkip     = document.getElementById('onboardSkip');
const helpBtn         = document.getElementById('helpBtn');

if (localStorage.getItem('onboardDone')) {
  onboardBackdrop.classList.add('hidden');
}

onboardBtn.addEventListener('click',  () => onboardBackdrop.classList.add('hidden'));
onboardSkip.addEventListener('click', () => {
  localStorage.setItem('onboardDone', 'true');
  onboardBackdrop.classList.add('hidden');
});
helpBtn.addEventListener('click', () => onboardBackdrop.classList.remove('hidden'));

document.querySelectorAll('.onboard-step.expandable').forEach(step => {
  step.addEventListener('click', (e) => {
    if (e.target.classList.contains('onboard-show-btn')) return;
    step.classList.toggle('open');
  });
});

document.getElementById('backToGuide').addEventListener('click', () => {
  document.getElementById('backToGuide').classList.add('hidden');
  onboardBackdrop.classList.remove('hidden');
  closeDetail();
  if (window.innerWidth < 768) {
    document.getElementById('sidebar').classList.remove('expanded');
  }
});

function demoStep(step) {
  onboardBackdrop.classList.add('hidden');
  document.getElementById('backToGuide').classList.remove('hidden');

  if (step === 1) {
    map.flyTo([41.9028, 12.4964], 15, { duration: 1.2 });
    setTimeout(() => {
      const first = Object.values(markers)[0];
      if (first) clusterGroup.zoomToShowLayer(first.marker, () => first.marker.openPopup());
    }, 1400);
  }
  if (step === 2) {
    const fl = document.getElementById('filterList');
    fl.classList.add('demo-highlight');
    if (window.innerWidth < 768) document.getElementById('sidebar').classList.add('expanded');
    document.getElementById('sidebar').scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => fl.classList.remove('demo-highlight'), 4000);
  }
  if (step === 3) {
    const lb = document.getElementById('locateBtn');
    lb.classList.add('demo-highlight');
    lb.style.transform = 'scale(1.3)';
    lb.style.transition = 'transform 0.3s ease';
    setTimeout(() => { lb.style.transform = 'scale(1)';
      setTimeout(() => { lb.style.transform = 'scale(1.3)';
        setTimeout(() => { lb.style.transform = ''; lb.style.transition = ''; lb.classList.remove('demo-highlight'); }, 300);
      }, 300);
    }, 300);
  }
  if (step === 4) {
    if (allRestaurants.length > 0) {
      showDetail(allRestaurants[0]);
      setTimeout(() => {
        const btn = document.getElementById('directionsBtn');
        btn.classList.add('demo-highlight');
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => btn.classList.remove('demo-highlight'), 3000);
      }, 500);
    }
  }
  if (step === 5) {
    const flag = document.getElementById('langFlag');
    flag.classList.add('demo-highlight');
    flag.style.transform = 'scale(1.8)';
    setTimeout(() => { flag.style.transform = ''; flag.classList.remove('demo-highlight'); }, 3000);
  }
}
window.demoStep = demoStep;