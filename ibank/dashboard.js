const menu = document.getElementById('menu');
const backIcon = document.getElementById('back-icon');
const sidebar = document.querySelector('.sidebar');
const nonHeader = document.querySelector('.dashboard-non-header');
const header = document.querySelector('.header2');


menu.addEventListener('click', function() {
    sidebar.classList.add('show');
    nonHeader.classList.add('show');
    header.classList.add('show');
});

backIcon.addEventListener('click', function() {
    sidebar.classList.remove('show');
    nonHeader.classList.remove('show');
    header.classList.remove('show');
});