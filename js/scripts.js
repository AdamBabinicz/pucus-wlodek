window.addEventListener('load', () =>
  document.querySelector('.preloader').classList.add('hidePreloader')
);

$('.menu').on('click', function() {
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
});
$('.nav a').on('click', function() {
  $('.menu').removeClass('active');
  $('.overlay').removeClass('menu-open');
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });
  $('#scroll-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
