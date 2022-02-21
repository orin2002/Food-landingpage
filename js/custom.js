$(document).ready(()=>{
  // ================for sticky nav ==============//
    $(window).scroll(function(){
      var smoothScroll = $(this).scrollTop();
      if(smoothScroll>100){
        $(".navbar").addClass("smooth-scroll");
      }else{
          $(".navbar").removeClass("smooth-scroll")
      }
    });
    // =================init wow js=======================//
    new WOW().init();
})