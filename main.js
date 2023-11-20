function clock () {
    var areaDoRelogio = document.querySelector(".display");
    var horaAgora = new Date();
    var hours = horaAgora.getHours ();
    var minutes = horaAgora.getMinutes ();
    var seconds = horaAgora.getSeconds ();
    var text = "Am"
    var s= 0 ;
    if(hours === 0){
      hours = 12;
  };

  if(hours > 12){
    hours = hours - 12;
    text = "PM";
      
  };
    var formatoHoras = hours.toString ().padStart(2, "0");
    var formatoMinutos = minutes.toString ().padStart(2, "0");
    var formatoSegundos = seconds.toString ().padStart(2, "0");


areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos} ${text}`;

}

setInterval (clock, 1000);
var s=0;
function off() {
  if(s===0){
    
  document.getElementById("display").style.backgroundColor = "#000";
    
     document.getElementById("btns").style.backgroundColor = "#000";
      
       document.getElementById("btnSom").style.backgroundColor = "#000";
        document.getElementById("btnSom2").style.backgroundColor = "#000";
         document.getElementById("btnSom3").style.backgroundColor = "#000";
        document.getElementById("btnSom4").style.backgroundColor = "#000";
  s++;

}
else {
    
  document.getElementById("display").style.backgroundColor = "#fff";
    
     document.getElementById("btns").style.backgroundColor = "#fff";
      
       document.getElementById("btnSom").style.backgroundColor = "#fff";
        document.getElementById("btnSom2").style.backgroundColor = "#fff";
         document.getElementById("btnSom3").style.backgroundColor = "#fff";
        document.getElementById("btnSom4").style.backgroundColor = "#fff";
  s--;
}
}

const botaoSom = document.querySelector('#btnSom');
const som = new Audio('./camShot.mp3');

botaoSom.addEventListener('click', function() {
  som.play();
});


const botaoSom2 = document.querySelector('#btnSom2');
const som2 = new Audio('./music.mp3');

botaoSom2.addEventListener('click', function() {
  som2.play();
});


const botaoSom3 = document.querySelector('#btnSom3');
const som3 = new Audio('./telefone.mp3');

botaoSom3.addEventListener('click', function() {
  som3.play();
});

const botaoSom4 = document.querySelector('#btnSom4');
const som4 = new Audio('./despertador.mp3');

botaoSom4.addEventListener('click', function() {
  setTimeout(function() {
    som4.play();
  }, 10000); 
});
