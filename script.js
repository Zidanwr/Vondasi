window.addEventListener('scroll', () => {
  const button = document.querySelector('.start-btn');
  const triggerHeight = window.innerHeight / 2;

  if (window.scrollY > triggerHeight) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});

function goToNextPage() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "halaman2.html";
  }, 1000); // waktu fade 1 detik
}
