const sidebar = document.querySelector('#sidebar');
const showSidebar = document.querySelector('#show-sidebar');
const closeSidebar = document.querySelector('#close-sidebar');
const overlay = document.querySelector('.overlay');


showSidebar.onclick = () => {
  sidebar.classList.toggle('collapsed');
  overlay.classList.add('active');
};

closeSidebar.onclick = () => {
  sidebar.classList.toggle('collapsed');
  overlay.classList.remove('active');
};

overlay.addEventListener("click", function(){
    sidebar.classList.toggle('collapsed');
    overlay.classList.remove('active');
});