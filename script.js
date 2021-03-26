// $(document).ready(function(){
//     //$("#loader").fadeOut(8000);
// 	$("#container").delay(9000).fadeOut();
//   });
//   function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

$(document).ready(function(){
  $(".backToTop").click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
})

$(window).scroll(function() {
  if($(this).scrollTop() > 900){
    $(".backToTop").show();
  }
  else{
    $(".backToTop").hide();
  }
});


