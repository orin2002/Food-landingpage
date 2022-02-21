$(document).ready(()=>{
    $(window).scroll(function(){
      var smoothScroll = $(this).scrollTop();
      if(smoothScroll>50){
        $(".navbar").addClass("smooth-scroll");
      }else{
          $(".navbar").removeClass("smooth-scroll")
      }
    })
})