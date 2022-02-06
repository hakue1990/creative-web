const btn = document.querySelector('.burger');
const list =  document.querySelector('.navbar--list');
const listItems = document.querySelectorAll('.navbar--list li > a');

btn.addEventListener('click', () => {
    list.classList.toggle('active')
    btn.classList.toggle('active')
    listItems.forEach((item, index) => {
        if(item.style.animation == ''){
            item.style.animation = `show 1.5s ease ${index / 7+ .1}s `;
        }else {
            item.style.animation = ''
        }
    })
})


console.log(listItems)