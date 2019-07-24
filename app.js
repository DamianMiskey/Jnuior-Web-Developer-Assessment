//jshint esversion:6
/*burger Menu*/
(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);


/*Modal Pop*/
document.getElementById("button").addEventListener("click", function(){
  document.querySelector(".modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function(){
document.querySelector(".modal").style.display = "none";
});

// slick slider

$('.post-wrapper').slick({
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      ]
});

// /*Featured slider*/

$(".Fpost-wrapper").slick({
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  nextArrow: $(".Fnext"),
  prevArrow: $(".Fprev"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
      ]
});


// /*Paragraph selector*/
function show(elementId) {
 document.getElementById("id1").style.display="none";
 document.getElementById("id2").style.display="none";
 document.getElementById("id3").style.display="none";
 document.getElementById("id4").style.display="none";
 document.getElementById("id5").style.display="none";
 document.getElementById("id6").style.display="none";

 document.getElementById(elementId).style.display="block";
}
