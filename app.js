$(function() {
    $('.box1').slideDown(3000, function(){
      $('.box1').css({
        'background-color': '#0000FF',
        'height': '100px',
        'weight': '200px'
      }).slideUp(3000);
    });
});