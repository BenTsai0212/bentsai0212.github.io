i=1;  //page count

setInterval(function() {
  $(".main .movingPage" ).css("margin-left", "-"+ 100*i +"%");
  i = i+1;
  if(i>=8)i=0;
},5000);

$(".arrow").click(function() {
  $('html, body').scrollTop(0);
}); 

$(".main .product .p1 ").click(function() {
  $('html, body').scrollTop(1709);
});

$(".main .product .p2 ").click(function() {
  $('html, body').scrollTop(2709);
});

$(".main .product .p3 ").click(function() {
  $('html, body').scrollTop(5209);
});

$(".main .product .p4 ").click(function() {
  $('html, body').scrollTop(6309);
});