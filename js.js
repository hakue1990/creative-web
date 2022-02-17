const btn = document.querySelector('.burger');
const list = document.querySelector('.navbar--list');
const listItems = document.querySelectorAll('.navbar--list li > a');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

//menu links show delay

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

// Scroll to top logic

scrollToTopBtn.addEventListener('click', scrollToTop);
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if (rootElement.scrollTop / scrollTotal < 0.2) {
    scrollToTopBtn.style.transform = 'translateX(100px)';
  } else {
    scrollToTopBtn.style.transform = 'translateX(0)';
  }
}
document.addEventListener('scroll', handleScroll);
