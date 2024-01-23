

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active')
}

function closeSidebar(){
    const element = document.getElementById('sidebar')
        element.classList.remove('active')
}