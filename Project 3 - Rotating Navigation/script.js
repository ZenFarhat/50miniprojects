const open = document.getElementById('open')
const close = document.getElementById('close')
const contianer = document.querySelector('.container')



open.addEventListener('click', () => contianer.classList.add('show-nav'))
close.addEventListener('click', () => contianer.classList.remove('show-nav'))