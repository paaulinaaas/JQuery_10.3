$(function(){ // Wczytanie skryptu dopiero po wczytaniu DOM
   var carouselList = $("#carousel ul"); // pobranie z id carousel listy ul

    setInterval(changeSlides, 3000); //interwal co 3 sek zmiana zdjecia
    
    function changeSlides() { //funkcja powodujaca zmianę slajdow
        carouselList.animate({'marginLeft':-400}, 700, moveFirstSlide);
    }   //wbudowany efekt .animate() wywoluje animacje wedlug podanych parametrow
        //animujemy lewy margines -400 to szerokosc obrazka, jesli będzie mniej/wiecej,
        // to będzie przeskakiwac, 700 to predkosc "przeskoku"
    function moveFirstSlide() { //funkcja dziala po zakonczeniu animacji
        var firstItem = carouselList.find("li:first"); //1-szy slajd ma wskoczyc za ostatni element listy
        var lastItem = carouselList.find("li:last");// metoda .find znajdzie 1 i ostatni element
        lastItem.after(firstItem); // dodaje za ostatni el, pierwszy
        carouselList.css({marginLeft:0}); 
    }
})