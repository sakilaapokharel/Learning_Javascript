var mainImg = document.getElementById("mainimg");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

text1.addEventListener("click",()=>{
      text1.style.color="#053634"
      text3.style.color="#84b8a7"
      text2.style.color="#84b8a7"
      mainImg.src = "img/service1.jpg"
})

text2.addEventListener("click",()=>{
      text2.style.color="#053634"
      text3.style.color="#84b8a7"
      text1.style.color="#84b8a7"
      mainImg.src = "img/service2.jpg"
})

text3.addEventListener("click",()=>{
      text3.style.color="#053634"
      text2.style.color="#84b8a7"
      text1.style.color="#84b8a7"
      mainImg.src = "img/service3.jpg"
})
   
// var imgcontainer = document.getElementById("portfolio-img");

// imgcontainer.addEventListener("click", function() {
//     var popup = document.getElementById("img-open");
//     // popup.style.display = "none";
// });

var portfolioCards = document.querySelectorAll('.portfolio-card');
var currentIndex = 0;

portfolioCards.forEach(function(card, index) {
    card.addEventListener('click', function() {
        var popup = document.getElementById('img-open');
        var popupImage = popup.querySelector('img');

        var cardImage = this.querySelector('img');

        popupImage.src = cardImage.src;
        currentIndex = index; // Update the current index when a card is clicked
        popup.style.display = 'block';
    });
});

var close = document.getElementById('close');

close.addEventListener('click', function() {
    var popup = document.getElementById('img-open');
    popup.style.display = 'none';
});

var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.previous');

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % portfolioCards.length;
    var popupImage = document.querySelector('.portfolio-open img');
    popupImage.src = portfolioCards[currentIndex].querySelector('img').src;
});

prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + portfolioCards.length) % portfolioCards.length;
    var popupImage = document.querySelector('.portfolio-open img');
    popupImage.src = portfolioCards[currentIndex].querySelector('img').src;
});

