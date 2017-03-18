export default function scroll() {
  var block = document.querySelector('.header');
  var html = document.documentElement;
  var body = document.body;
  var scrollTop = html.scrollTop || body && body.scrollTop || 0;
  scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)

  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 50) {
      block.classList.add('header--scroll');
    } else {
      block.classList.remove('header--scroll');
    }
  }
}