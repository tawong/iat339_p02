$(document).ready(function(){
    
    //Open Unicorn Modal
    $("#open-modal").click(function(){
        $(".modal-display").fadeIn();
        $("#unicorn").fadeIn();
    });
    
    $(".modal-display").click(function(){
        $(".modal-display").fadeOut();
        $("#unicorn").fadeOut();
    });
    
    $(".base-select").click(function(){
        $(this).parent().parent().toggleClass("selected");
        $(this).parent().parent().siblings().removeClass("selected");
        var type = $(this).attr("data-base");
        var img_src = $(this).parent().parent().children().attr("src");
        $("img.order-splash").attr("src", img_src);
        $("p#cookie-base").empty();
        $("p#cookie-base").text(type);
    });
    
    $(".mix-select").click(function(){
        $(this).parent().parent().toggleClass("selected");
        var type = $(this).attr("data-mix");
        $("p#" + type).fadeToggle();
    });
    
    $("#goto-confirm").click(function(){
        $("#choose-community").fadeOut(1000);
        $("#confirm-order").fadeIn(2500);
    });
    
    $("#goback-choose").click(function(){
        $("#choose-community").fadeIn(2500);
        $("#confirm-order").fadeOut(1000);;
    });
    
    $(".nav-col-menu button").click(function(){
        if($(this).text() == "X"){
            $(".nav-col-group").slideUp();
            $(".grid-container").css("display", "flex");
            $(this).text("MENU");  
            
        }else{
            $(".nav-col-group").slideDown();
            $(".grid-container").css("display", "block");
            $(this).text("X");  
        }
        
    });
    
    
    
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(window).resize(function(){
   var ww = window.innerWidth;
    if(ww > 1024){
        $(".nav-col-group").css("display", "block");
    }else{
        if($(".nav-col-menu button").text() == "X"){
            $(".nav-col-group").css("display", "block");
            
        }else{
            $(".nav-col-group").css("display", "none"); 
        }
    }
    
});