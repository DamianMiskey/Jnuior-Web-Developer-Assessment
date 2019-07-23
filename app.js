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
        slidesToScroll: 1
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
  slidesToShow: 4,
  slidesToScroll: 4,
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
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      ]
});


/*Paragraph selector*/

// var casinoText = "<h2>Casino</h2> <p>Hllo There";
//
// document.getElementById("button1").addEventListener("click", function(){
//   document.querySelector(".text").innerHTML = casinoText;});
//
// document.getElementById("button2").addEventListener("click", function(){
//   document.querySelector(".text").innerHTML = "Hello there You";
// });
// document.getElementById("button3").addEventListener("click", function(){
//   document.querySelector(".text").innerHTML = "Hello there!!!!";
// });
// document.getElementById("button4").addEventListener("click", function(){
//   document.querySelector(".text").innerHTML = "213";
// });
// document.getElementById("button5").addEventListener("click", function(){
//   document.querySelector(".text").innerHTML = "456";
// });
// document.getElementById("button6").addEventListener("click", function(){
//   document.querySelector(".text").innerHTML = "789";
// });
