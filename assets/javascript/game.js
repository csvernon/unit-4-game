
    var min=19; 
    var max=121;  
    var targetNumber = Math.floor(Math.random() * (+max - +min)) + +min; 
    var number1 = Math.floor(Math.random() * (+13 - +1)) + +1;   
    var number2 = Math.floor(Math.random() * (+13 - +1)) + +1; 
    var number3 = Math.floor(Math.random() * (+13 - +1)) + +1; 
    var number4 = Math.floor(Math.random() * (+13 - +1)) + +1; 
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var image1 = "https://pbs.twimg.com/profile_images/531994916181012480/EBap51cO_400x400.png"
    var image2 = "https://stemgemsbook.com/wp-content/uploads/2016/03/pink-gem.png"
    var image3 = "https://jooinn.com/images/gem-1.png"
    var image4 = "http://clipart-library.com/data_images/363846.png"
    
  function reset(){
    targetNumber = Math.floor(Math.random() * (+max - +min)) + +min; 
    number1 = Math.floor(Math.random() * (+13 - +1)) + +1;   
    number2 = Math.floor(Math.random() * (+13 - +1)) + +1; 
    number3 = Math.floor(Math.random() * (+13 - +1)) + +1; 
    number4 = Math.floor(Math.random() * (+13 - +1)) + +1; 
    counter = 0;
    $("#number-to-guess").text(targetNumber);
  };
  
  $("#number-to-guess").text(targetNumber);
  var numberOptions = [number1, number2, number3, number4];
  var images = [image1, image2, image3, image4]
  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", images[i]);

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    document.querySelector('.counter').innerHTML= "Your current score is: " + counter;

    if (counter === targetNumber) {
      wins++
      document.querySelector('#wins').innerHTML= "Wins: " + wins;
      document.querySelector('#outcome').innerHTML= "You won!!";
      reset();
    }

    else if (counter >= targetNumber) {
      losses++
      document.querySelector('#losses').innerHTML= "Losses: " + losses;
      document.querySelector('#outcome').innerHTML= "You lost!!";
      reset();
    }

  });

  