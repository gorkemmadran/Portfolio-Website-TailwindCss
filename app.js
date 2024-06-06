const closebtn = document.querySelector('#closebtn');
const dropdown = document.querySelector('#dropdown');
const dropdownMenu = document.querySelector('#dropdown-menu');

dropdown.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

closebtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    dropdownMenu.classList.toggle('hidden');
});