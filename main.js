var contador =0;
var contadorL = 0;
var contadorC =0;

var word = palabraNueva(true)
var WordF = [];
var letrasAA = [];

function repetida(letra) {
  console.log("repetida")
  var letraIn = !letrasAA.includes(letra)
  letrasAA.push(letra)
  console.info(letraIn)
  return letraIn
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function  palabraNueva(boll) {

  var words = ['html', 'java','alura']
  // localStorage.removeItem("Pal");

var boll =  localStorage.getItem("Bool");

// console.log(bool)
console.log(boll)
if (boll) {
   // se ejecutan estas instrucciones
   console.log("random")
   var randN = getRandomInt(words.length);
   return words[randN]
}
else {
   // estas instrucciones no se ejecutan
   console.log("Palabra nueva")
   console.log(localStorage.getItem("Pal"))
   return localStorage.getItem("Pal")
}

}

function valida_envia(){
  //valido el nombre
  if (document.fvalida.palabra.value.length==0){
       alert("Tiene que escribir una palabra")
       document.fvalida.palabra.focus()
       localStorage.setItem("Bool",false);
       return 0;
  }
  else{
    var Wer =document.fvalida.palabra.value;
    localStorage.setItem("Pal",Wer);
    localStorage.setItem("Bool",true);
    console.log("gato")
    document.fvalida.submit();
    return Wer
  }

  
}


function palabraD(Palabra){
  var word = Palabra
let arrWord = word.split('');
return arrWord
}


console.log(word)


var arrWord = palabraD(word)

function tablero() {
  var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");		
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,690,400); 
return pincel
}

var pincel = tablero()

function line(x1,y1,x2,y2){
        pincel.lineWidth = 1;
				pincel.strokeStyle = "####";
				//dibuja la primera línea 
				pincel.beginPath();
				pincel.moveTo(x1, y1);
        pincel.lineTo(x2,y2);
				pincel.stroke();
}

function lines(y,x){

var i =0;
var pos =0;
var posi = [];
for (const key in word) {
  if (Object.hasOwnProperty.call(word, key)) {
    const element = word[key];
      // console.log(element);
      pos = 60+i;
      // line2(pos,y)
      line2(pos,y)
      posi.push(pos)
      // pincel.translate(1, 0);
      i+=60;
  }
}
  
return posi;
}
function line2(a,b){
        pincel.beginPath();
				pincel.moveTo(a, b);
				pincel.lineTo(a+40, b);
				pincel.stroke();
}

  
function limpiarPantalla(){
  pincel.clearRect(0,0,600,400);
}



function adivina(keyValue) {
  var letra = word.indexOf(keyValue);
  palabraDict = []
  for (let index = 0; index < word.length; index++) {
    // const element = array[index];
    // dataP.set(word[index],data[index]);
    palabraDict.push({key:word[index],value:data[index]});
    console.log(index)
  }

  if (-1!=letra) {
  console.log(word.indexOf(keyValue))
  pincel.beginPath() //iniciar ruta
  pincel.strokeStyle="blue"; //color externo
  pincel.fillStyle="black"; //color de relleno
  pincel.font="bold 20px arial"; //estilo de texto
  texto = keyValue;
    if (word.includes(keyValue)){   
      var boolG =false;
      var indices = [];
var idx = arrWord.indexOf(keyValue);

while (idx != -1) {
  indices.push(idx);
  idx = arrWord.indexOf(keyValue, idx + 1);
 
}

var y= 290;
var xd = -14;
if (contadorL<arrWord.length) {
 if (indices.length==1){
  pincel.fillText(texto,data[indices]-xd,y);
  contadorL+=1;
 }
 else{
indices.forEach(element => {
  console.log(element)
  pincel.fillText(texto,data[element]-xd,y); 
  contadorL+=1;
  console.log(contadorL,"contador")
});
 
 }
}
if (contadorL == arrWord.length){
  pincel.beginPath();

			pincel.fillStyle = "#008000";
			pincel.lineWidth = 1
      var msnG = "Felicidades, has Ganado!";
      pincel.fillText(msnG,300,150); 

    document.removeEventListener("keydown", handler);  
}
// [0, 2, 4]
    }
  
  }  
  else{
 if(keyValue){
  var letra = keyValue
  horca(keyValue,word.length) 
 }  
    
   

  }
 
  
}

var data =lines(300,10);

var handler = (event) => {
  
  var keyValue = event.key;
  var keyCode = event.keyCode;
  console.log(keyCode)
  
let strStartsWithALetter = isLetter(keyCode);
 
 if(event.repeat){
  event.preventDefault();
}else{
 if (strStartsWithALetter){
  var array=(localStorage.getItem("C"));

 localStorage.setItem("C", keyValue);
//Recuperamos el valor almacenado
var array=(localStorage.getItem("C"));
console.log(array+"local"); 
if(repetida(keyValue)){
  adivina(keyValue)}}
 }
 }
 
 function isLetter(char){
  console.log(char)
    return (!(char >1 && (char < 65 || char >90) && (char < 97 || char > 122)));
}


 

document.addEventListener('keydown', handler, false);  


function horca(key,Nword) {
//   1.1. Dibujar la Horca
// 1.2. Dibujar la cabeza
// 1.3.Dibujar el tronco
// 1.4 Dibujar la pierna izquierda
// 1.5 Dibujar la pierna derecha
// 1.6 Dibujar el brazo izquierdo
// 1.6 Dibujar el brazo derecho
  console.log("Eve",key,Nword)
  
 
  console.log(contador)
var mag=20
  switch (contador) {
    case 0:{
            line(100,250,300,250)
            var msnF = key;
            var psx = 100;
            pincel.beginPath();
            pincel.fillStyle = "#FF0000";
            pincel.lineWidth = 1;
            pincel.font="bold 20px arial";
            pincel.fillText(msnF,psx,350); 
break;
    }   
     case 1:{
      line(150,250,150,50)
      var msnF = key;
      
      pincel.fillText(msnF,130,350); 
break;
    }     case 2:{
      line(150,50,225,50)
      let msnF = key;
      
      pincel.fillText(msnF,160,350); 
break;
    }  case 3:{
line(225,50,225,100)
let msnF = key;
pincel.fillText(msnF,190,350); 
break;
    } case 4:{
      pincel.beginPath();
      var X = 225;
			var Y = 120;
			var r = 20;
				pincel.strokeStyle = "#006400";
					pincel.fillStyle = "#6ab150";
					pincel.lineWidth = 1;
					pincel.arc(X,Y,r,0,2*Math.PI);
					pincel.fill();
					pincel.stroke();
      pincel.stroke();
      let msnF = key;
      
      pincel.fillText(msnF,220,350); 
break;
    }
    case 5:{
     line(225,140,225,200)
     let msnF = key;
     
     pincel.fillText(msnF,250,350); 
      break;
    }
    case 6:{
      line(225,160,210,170)
      let msnF = key;
      
      pincel.fillText(msnF,280,350); 
      break;
    }   case 7:{
      line(225,160,240,170)
      let msnF = key;
      
      pincel.fillText(msnF,310,350); 
      break;
    }   case 8:{
      line(225,200,220,220)
      let msnF = key;
      
      pincel.fillText(msnF,340,350); 
      break;
    }   case 9:{
      line(225,200,230,220)
      var msnF = "Fin del Juego!";
      pincel.beginPath();
			pincel.fillStyle = "#FF0000";
			pincel.lineWidth = 1;
      pincel.fillText(msnF,300,150); 
      let msnk = key;
      
      pincel.fillText(msnk,370,350); 
      
    document.removeEventListener("keydown", handler);  
    // limpiarPantalla()
      break;
    }
    default:
      break;
  }
  contador++;
  
}

