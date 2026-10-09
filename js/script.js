document.addEventListener('DOMContentLoaded', () => {
  const photos = [
    { src: 'images/photo1.jpeg', caption: 'A day off from studying at the campus' },
    { src: 'images/photo2.jpeg', caption: 'A calm afternoon view around campus' },
    { src: 'images/photo3.jpeg', caption: 'Taking a quick break during study breaks' }
  ];

  let currentIndex = 0;

  const imgEl = document.getElementById('gallery-img');
  const captionEl = document.getElementById('gallery-caption');
  const counterEl = document.getElementById('photo-counter');
  const prevBtn = document.getElementById('prev-photo-btn');
  const nextBtn = document.getElementById('next-photo-btn');

  if (!imgEl || !prevBtn || !nextBtn) return;

  function updateGallery(index) {
    currentIndex = index;
    imgEl.src = photos[currentIndex].src;
    imgEl.alt = photos[currentIndex].caption;
    if (captionEl) captionEl.textContent = photos[currentIndex].caption;
    if (counterEl) counterEl.textContent = `Photo ${currentIndex + 1} of ${photos.length}`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateGallery(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateGallery(currentIndex);
  });
