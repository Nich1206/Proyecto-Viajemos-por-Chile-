$(document).ready(function(){


    $(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });



    $('h2').on("dblclick",function(){
      $(this).css("color", "#239DBF")
    });
    
  
  $("p").dblclick(function(){
      $("p").hide('slow');
  });

  $("i").click(function(){
    $("p").show('slow');
});
});


/* smooth control */
$(document).ready(function(){
 $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

