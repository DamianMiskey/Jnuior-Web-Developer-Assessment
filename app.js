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
  slidesToScroll: 3,
  nextArrow: $(".Fnext"),
  prevArrow: $(".Fprev"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
var casinoText = "<h3 style=text-align:center;>Casino</h3><br>Casino tokens (also known as casino or gaming chips, checks, or cheques) are small discs used in lieu of currency in casinos. Colored metal, injection-molded plastic or compression molded clay tokens of various denominations are used primarily in table games, as opposed to metal token coins, used primarily in slot machines. Casino tokens are also widely used as play money in casual or tournament games.Some casinos also use rectangular gaming plaques for high-stakes table games ($25,000 and above). Plaques differ from chips in that they are larger, usually rectangular in shape and contain serial numbers.</p>";
var sportsText = "<h3 style=text-align:center;>Sports</h3><br>SPORTS ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
var casinoGamesText = "<h3 style=text-align:center;>Casino Games</h3><br>Games available in most casinos are commonly called casino games. In a casino game, the players gamble casino chips on various possible random outcomes or combinations of outcomes. Casino games are also available in online casinos, where permitted by law. Casino games can also be played outside casinos for entertainment purposes like in parties or in school competitions, some on machines that simulate gambling.";
var liveCasinoText = "<h3 style=text-align:center;>Live Casino</h3><br>Live! Casino & Hotel, formerly Maryland Live! Casino, is a casino, entertainment complex and hotel in Hanover, Maryland, adjacent to Arundel Mills Mall, owned and operated by The Cordish Companies. The casino opened its first phase on June 6, 2012, which included 3,200 slot machines and electronic table games. The second phase opened in September 2012, bringing the total to 4,750 machines.[1] Because the casino was built on what was formerly mall parking lots, Live! Casino & Hotel features a six-story parking garage that is free to visitors of both the mall and the casino";
var bankingText = "<h3 style=text-align:center;>Banking</h3><br>With online banking and mobile apps for managing your accounts, how often do you actually step into your bank to handle transactions anymore? Direct deposit, remote check capture (the feature that allows you to deposit a check by taking a picture of it with your phone), and online bill pay have largely eliminated the need for you to do your banking with a live person.";
var blackjackText = "<h3 style=text-align:center;>Blackjack</h3><br>Blackjack is the American variant of a globally popular banking game known as Twenty-One, whose relatives include Pontoon and Vingt-et-Un.[1] It is a comparing card game between one or more players and a dealer, where each player in turn competes against the dealer. Players do not compete against each other. It is played with one or more decks of 52 cards, and is the most widely played casino banking game in the world";

document.getElementById("button1").addEventListener("click", function(){
  document.querySelector(".sports-text").innerHTML = casinoText;});

document.getElementById("button2").addEventListener("click", function(){
  document.querySelector(".sports-text").innerHTML = sportsText;});

document.getElementById("button3").addEventListener("click", function(){
  document.querySelector(".sports-text").innerHTML = casinoGamesText;});

document.getElementById("button4").addEventListener("click", function(){
  document.querySelector(".sports-text").innerHTML = liveCasinoText;});

document.getElementById("button5").addEventListener("click", function(){
  document.querySelector(".sports-text").innerHTML = bankingText;});

  document.getElementById("button6").addEventListener("click", function(){
    document.querySelector(".sports-text").innerHTML = blackjackText;});
