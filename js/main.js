$(document).ready(function() {
  const mainElement = $('.main');
  const themeToggler = $('#theme-toggler');
  const darkMode = $('#dark-mode');
  const lightMode = $('#light-mode');
  let theme = false;

  const dashboardSidebar = $('#dashboard-side');
  const productSidebar = $('#products-side');
  const usersSidebar = $('#users-side');

  const dashboardMain = $('#dashboard-main');
  const productsMain = $('#products-main');
  const usersMain = $('#users-main');

  const mainTitle = $('#title');

  dashboardSidebar.addClass('active');
  lightMode.addClass('active');

  dashboardMain.css('display', 'grid');
  productsMain.css('display', 'none');
  usersMain.css('display', 'none');

  dashboardSidebar.on('click', onDashboardTabClick);
  productSidebar.on('click', onProductTabClick);
  usersSidebar.on('click', onUsersTabClick);
  themeToggler.on('click', onThemeTogglerClick);

  function onDashboardTabClick() {
    dashboardSidebar.addClass('active');
    productSidebar.removeClass('active');
    usersSidebar.removeClass('active');

    dashboardMain.css('display', 'grid');
    productsMain.css('display', 'none');
    usersMain.css('display', 'none');
  }

  function onProductTabClick() {
    dashboardSidebar.removeClass('active');
    productSidebar.addClass('active');
    usersSidebar.removeClass('active');

    dashboardMain.css('display', 'none');
    productsMain.css('display', 'grid');
    usersMain.css('display', 'none');
  }

  function onUsersTabClick() {
    dashboardSidebar.removeClass('active');
    productSidebar.removeClass('active');
    usersSidebar.addClass('active');

    dashboardMain.css('display', 'none');
    productsMain.css('display', 'none');
    usersMain.css('display', 'grid');
  }

  function onThemeTogglerClick() {
    if (!theme) {
      darkMode.addClass('active');
      lightMode.removeClass('active');
    } else {
      lightMode.addClass('active');
      darkMode.removeClass('active');
    }
    theme = !theme;
    $('body').toggleClass('dark-theme-variables');
  }
});
