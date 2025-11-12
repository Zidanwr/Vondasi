window.addEventListener('scroll', () => {
  const button = document.querySelector('.start-btn');
  const triggerHeight = window.innerHeight / 2;

  if (window.scrollY > triggerHeight) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});
