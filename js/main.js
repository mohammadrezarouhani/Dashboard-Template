
const mainElement = document.querySelector('.main')

const themeToggler =document.getElementById('theme-toggler')
const darkMode=document.getElementById('dark-mode')
const lightMode=document.getElementById('light-mode')
let theme=false

const dashboarSidebar = document.getElementById('dashboard-side')
const productSidebar = document.getElementById('products-side')
const usersSidebar = document.getElementById('users-side')

const dashboardMain = document.getElementById('dashboard-main')
const productsMain = document.getElementById('products-main')
const usersMain = document.getElementById('users-main')

const mainTitle=document.getElementById('title')

dashboarSidebar.classList.add('active')
lightMode.classList.add('active')

dashboardMain.style.display = 'grid'
productsMain.style.display = 'none'
usersMain.style.display = 'none'

dashboarSidebar.onclick = onDashboardTabClick
productSidebar.onclick = onProductTabClick
usersSidebar.onclick = onUsersTabClick
themeToggler.onclick=onThemeTogglerClick


function onDashboardTabClick() {
    dashboarSidebar.classList.add('active')
    productSidebar.classList.remove('active')
    usersSidebar.classList.remove('active')

    dashboardMain.style.display = 'grid'
    productsMain.style.display = 'none'
    usersMain.style.display = 'none'

}

function onProductTabClick() {
    dashboarSidebar.classList.remove('active')
    productSidebar.classList.add('active')
    usersSidebar.classList.remove('active')

    dashboardMain.style.display = 'none'
    productsMain.style.display = 'grid'
    usersMain.style.display = 'none'

}

function onUsersTabClick() {
    dashboarSidebar.classList.remove('active')
    productSidebar.classList.remove('active')
    usersSidebar.classList.add('active')

    dashboardMain.style.display = 'none'
    productsMain.style.display = 'none'
    usersMain.style.display = 'grid'

}

function onThemeTogglerClick(){
    if(!theme){
        darkMode.classList.add('active')
        lightMode.classList.remove('active')
    }else{
        lightMode.classList.add('active')
        darkMode.classList.remove('active')
    }
    theme=!theme
    document.body.classList.toggle('dark-theme-variables');
}
