const btn = document.querySelector('.burger');
const list = document.querySelector('.navbar--list');
const listItems = document.querySelectorAll('.navbar--list li > a');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
var rootElement = document.documentElement;
btn.addEventListener('click', () => {
  list.classList.toggle('active');
  btn.classList.toggle('active');
  listItems.forEach((item, index) => {
    if (item.style.animation == '') {
      item.style.animation = `show 1.5s ease ${index / 7 + 0.1}s `;
    } else {
      item.style.animation = '';
    }
  });
});

scrollToTopBtn.addEventListener('click', scrollToTop);
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if (rootElement.scrollTop / scrollTotal < 0.4) {
    scrollToTopBtn.classList.add('hide');
  } else {
    scrollToTopBtn.classList.remove('hide');
  }
}
document.addEventListener('scroll', handleScroll);
