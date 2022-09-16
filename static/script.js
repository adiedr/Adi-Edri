const activePage = window.location.pathname;

const activeNav=document.querySelectorAll('nav a').forEach(
    MyLinks =>{
        if (MyLinks.href.includes(`${activePage}`)) {
            MyLinks.classList.add('Active');
        }
    }
)
