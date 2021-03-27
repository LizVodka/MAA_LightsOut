window.addEventListener("load",init);

function $(nev) {
    return document.querySelectorAll(nev)
};

function ID(nev) {
    return document.getElementById(nev)
} 

function init() {
    /*Elemek hozzáadása a HTML-hez*/
    for (var i = 0; i < 25; i++) {
        $("article")[0].innerHTML += "<div id='"+[i]+"'></div>";
    }
    for (var i = 0; i < $("article div").length; i++) {
      var erme = Math.floor(Math.random() * 5);
      if(erme == 0) {
        $("div")[i].classList.add("felkapcsolva");

      }
    }
    for (var i = 0; i < $("article div").length; i++) {
        $("div")[i].addEventListener("click", kattintasesemeny);
    }
};
//egér fölé vitel esetén és kattintásra történő funkciók
    
/*elég egy olyan esemény, ami megvizsgálja, hogy van-e class, ha van, kiveszi, ha nincs, beteszi*/ 
function kattintasesemeny() {
  //$(this).closest(".ablak").toggleClass("felkapcsolva"); 
  this.classList.toggle("felkapcsolva");
  var x = Number((this.id));
  var felette = x-5;
  var alatta = x+5;
  var jobbra = x+1;
  var balra = x-1;
  if(!(felette<0 || felette >24)){
    ID(felette).classList.toggle("felkapcsolva");
  }
  if(!(alatta<0 || alatta >24)){
    ID(alatta).classList.toggle("felkapcsolva");
  }
    if(!(jobbra<0 || jobbra >24) && jobbra%5!=0) {
      ID(jobbra).classList.toggle("felkapcsolva");
    }
  
  if(!(balra<0 || balra >24) && balra%5!=4) {
    ID(balra).classList.toggle("felkapcsolva");
  }
  //Zseniális a toggle :D //Annyi van, hogy jQuery-s szintaxist találtál. Hasonló ,de nem ugyanaz. 
  // ez a jsthis.classList.toggle("felkapcsolva");
  //köszönöm!
}


//*feladás gombra való felugró üzenet
function felad() {
  var on =  document.getElementsByClassName("felkapcsolva").length;
  alert("Feladom! "+on+" lámpa maradt felkapcsolva.");
    retolt();
}
function retolt() {
  for(var i = 0; i < 25; i++) {
    ID(i).remove();
  }
  init();
}

/**SZUPERÜL HALADTOK! */
//Nekem ez a this még nem teljesen világis :)
