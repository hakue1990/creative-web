const btn = document.querySelector('.burger');
const list =  document.querySelector('.navbar--list');

btn.addEventListener('click', () => {
    list.classList.toggle('active')
    btn.classList.toggle('active')
})

const listItems = document.querySelectorAll('.navbar--list li');

