function loader() {
  var path1 = anime.path('.letter-w');
  var path2 = anime.path('.letter-d');

  anime({
    targets: '.red',
    translateX: path1('x'),
    translateY: path1('y'),
    rotate: path1('angle'),
    duration: 5000,
    loop: true,
    easing: 'linear'
  });
  anime({
    targets: '.white',
    translateX: path2('x'),
    translateY: path2('y'),
    rotate: path2('angle'),
    duration: 3600,
    loop: true,
    easing: 'linear'
  });
  // showOverlay();
  // setTimeout(hideOverlay, 1400);
  // setTimeout(showPage, 1800);
}
// function showOverlay(){
//   $('.overlay-section').css("opacity", "1.0");
// }
// function hideOverlay(){
//   $('.overlay-section').css("opacity", "0");
// }
// function showPage() {
//   $('.overlay').hide();
//   $('.page__overlay').removeClass('page__overlay');
// }
