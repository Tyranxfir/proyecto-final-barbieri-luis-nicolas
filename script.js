let titulopestaña = document.title 

 window.addEventListener('blur', () => {
	titulopestaña = document.title;
	document.title = 'Descuida, tomate un tiempo y vuelve a verme!!';
})

window.addEventListener('focus', () => {
	document.title = titulopestaña;
}) 

document.getElementById('Boton1dehabilidades').onclick = ('click', function mostrar1() {
	document.getElementById('Graficos_Habilidades1').style.display = 'unset';
	document.getElementById('Graficos_Habilidades2').style.display = 'unset';
	document.getElementById('Graficos_Habilidades3').style.display = 'unset';
	document.getElementById('NivelTexto1').style.display = 'unset';
	document.getElementById('NivelTexto2').style.display = 'unset';
	document.getElementById('NivelTexto3').style.display = 'unset';
	document.getElementById('Boton1dehabilidades').style.display = 'none';
	document.getElementById('ocultargraficos').style.display = 'unset';
})

document.getElementById('AgregarInformacion1').onclick = ('click', function Agregar1() {

})
document.getElementById('AgregarInformacion2').onclick = ('click', function Agregar2() {	
})

document.getElementById('Boton1desplegable').onclick = ('click', function mostraritems1() {
document.getElementById('contenido1').style.display = 'unset';
document.getElementById('titulocontenido2').style.display = 'unset';
document.getElementById('titulocontenido3').style.display = 'unset';
})

const seccionexperiencia = document.getElementById("Boton1desplegable");

seccionexperiencia.addEventListener("dblclick" , function(){
 document.getElementById('contenido1').style.display = 'none';
document.getElementById('titulocontenido2').style.display = 'none';
document.getElementById('titulocontenido3').style.display = 'none';
})

document.getElementById('Boton2desplegable').onclick = ('click', function mostraritems2() {
	document.getElementById('contenido2').style.display = 'unset';
	document.getElementById('titulocontenido4').style.display = 'unset';
})

const seccionformacion = document.getElementById("Boton2desplegable");

seccionformacion.addEventListener("dblclick" , function(){
	document.getElementById('contenido2').style.display = 'none';
	document.getElementById('titulocontenido4').style.display = 'none';
})

document.getElementById('MostrarSoftware').onclick = ('click', function mostrar2() {
	document.getElementById('graficosoftware').style.display = 'unset';
	document.getElementById('MostrarSoftware').style.display = 'none';
	document.getElementById('ocultargraficos').style.display = 'unset';
})

document.getElementById('MostrarIdiomas').onclick = ('click', function mostrar3() {
	document.getElementById('graficoidiomas').style.display = 'unset';
	document.getElementById('displaytitulosidiomas').style.display = 'unset';
	document.getElementById('MostrarIdiomas').style.display = 'none';
	document.getElementById('ocultargraficos').style.display = 'unset';
})

document.getElementById('ocultargraficos').onclick = ('click', function ocultar() {
    document.getElementById('Graficos_Habilidades1').style.display = 'none';
	document.getElementById('Graficos_Habilidades2').style.display = 'none';
	document.getElementById('Graficos_Habilidades3').style.display = 'none';
	document.getElementById('NivelTexto1').style.display = 'none';
	document.getElementById('NivelTexto2').style.display = 'none';
	document.getElementById('NivelTexto3').style.display = 'none';
    document.getElementById('graficosoftware').style.display = 'none';
    document.getElementById('graficoidiomas').style.display = 'none';
    document.getElementById('displaytitulosidiomas').style.display = 'none';
    document.getElementById('MostrarSoftware').style.display = 'unset';
    document.getElementById('MostrarIdiomas').style.display = 'unset';
    document.getElementById('Boton1dehabilidades').style.display = 'unset';
    document.getElementById('ocultargraficos').style.display = 'none'
})