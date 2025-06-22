let bar = document.getElementById('bar');
let sidebar = document.getElementById('sidebar');
let cross = document.getElementById('cross');

bar.addEventListener('click', () => {
    sidebar.style.display = 'flex';
    void sidebar.offsetWidth;
    sidebar.style.right = '0%';
});

cross.addEventListener('click', () => {
    sidebar.style.right = '-80%';
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 500);
});
