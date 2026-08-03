const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('siteNav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewerImage');
document.querySelectorAll('.open-image').forEach(button => {
  button.addEventListener('click', () => {
    viewerImage.src = button.dataset.image;
    viewer.showModal();
  });
});
document.getElementById('closeViewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });
