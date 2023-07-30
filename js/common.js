$(function(){

    if( screen.width<768 ){
        $("nav a").click(function(e){
            $(".collapse").slideUp();
            $(".btn-mob").removeClass("active");
        })
    }
   

    $(".btn-mob").click(function(){
       $(this).toggleClass("active");
       $(".collapse").slideToggle();
    });

     $("nav a").click(function(e){
          e.preventDefault();
  
          $("nav a").removeClass("active");
          $(this).addClass("active");
  
          let id=$(this).attr("href");
          let ot=$(id).offset().top;
          
          $("html,body").animate({
              scrollTop:ot-$(".wrap-1").outerHeight()
          });
  
      });
      $(".top").click(function(e){
          e.preventDefault();
          $("html,body").animate({ scrollTop:0 });
      });
  
      $("#portfolio .btn").click(function(){
          $("#portfolio .btn").removeClass("active");
          $(this).addClass("active");
  
          if( $(this).text()=="All" ){
              $(".work").fadeIn();
          }
          else if( $(this).text()=="Website" ){
              $(".work").fadeOut();
              $(".work:eq(0),.work:eq(1),.work:eq(2)").fadeIn();
          }
          else if( $(this).text()=="Branding" ){
              $(".work").fadeOut();
              $(".work:eq(3),.work:eq(4),.work:eq(5)").fadeIn();
          }
      });
  
      $(".accordion li a").click(function(e){
          e.preventDefault();
  
         if($(this).hasClass("active")==false){
          $(".accordion li a").removeClass("active");
          $(this).addClass("active");
          $(".accordion li p").slideUp();
          $(this).next("p").slideDown();
         }
  
      });

      $(".slider").bxSlider({
        auto:true,
        hover:true
      });
 
 });