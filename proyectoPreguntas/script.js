let pregunta1 = {
    numeroPregunta: 1,
    preguntaTexto: 'Esta es mi pregunta 1',
    respuesta: ''
}
let pregunta2 = {
    numeroPregunta: 2,
    preguntaTexto: 'Esta es mi pregunta 2',
    respuesta: ''
}
let pregunta3 = {
    numeroPregunta: 3,
    preguntaTexto: 'Esta es mi pregunta 3',
    respuesta: ''
}
let pregunta4 = {
    numeroPregunta: 4,
    preguntaTexto: 'Esta es mi pregunta 4',
    respuesta: ''
}
let pregunta5 = {
    numeroPregunta: 5,
    preguntaTexto: 'Esta es mi pregunta 5',
    respuesta: ''
}
let pregunta6 = {
    numeroPregunta: 6,
    preguntaTexto: 'Esta es mi pregunta 6',
    respuesta: ''
}

let arregloPreguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6]











let miPregunta;
let numeroPregunta = 0;
let botonEnviar = document.getElementById('enviar');
let botonSiguiente = document.getElementById('siguiente');
let gpoPreguntas = document.getElementsByName('opcion');
let espacioPregunta = document.getElementById('preguntaTexto');
let estadoEnviado = false;
let respuestas = [6];
let opcionSeleccionada;


espacioPregunta.innerHTML = arregloPreguntas[numeroPregunta].numeroPregunta + ('.- ') + arregloPreguntas[numeroPregunta].preguntaTexto;
botonSiguiente.setAttribute("disabled", "disabled");
checarRespuestasSiguiente(gpoPreguntas);



function siguiente(){
    numeroPregunta = numeroPregunta + 1;
    espacioPregunta.innerHTML = arregloPreguntas[numeroPregunta].numeroPregunta + ('.- ') + arregloPreguntas[numeroPregunta].preguntaTexto;
    vaciarRespuestas();

    if (numeroPregunta == arregloPreguntas.length-1) {
        botonSiguiente.style.display = 'none';
        botonEnviar.style.display = 'block';
        botonEnviar.setAttribute("disabled", "disabled");
        botonEnviar.style.backgroundColor = 'gray';
        botonEnviar.style.cursor = 'default';
    }

    opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
    respuestas[numeroPregunta-1] = opcionSeleccionada.value;

    botonSiguiente.setAttribute("disabled", "disabled");
    botonSiguiente.style.backgroundColor = 'gray';
    botonSiguiente.style.cursor = 'default';
}

function enviar(){
    opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
    respuestas[numeroPregunta-1] = opcionSeleccionada.value;

    for(let l = 0; l <= respuestas.length-1; i++){
        console.log(respuestas[l]);
    }
}

function vaciarRespuestas(){
    let radioButtons = document.getElementsByName('opcion'); // reemplaza 'nombreDelGrupo' con el nombre del atributo 'name' de los botones de opción
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}

function checarRespuestasSiguiente(gpoPreguntas){
    for (let i = 0; i < gpoPreguntas.length; i++) {
        gpoPreguntas[i].addEventListener('click',
            function() {
                for (let j = 0; j < gpoPreguntas.length; j++) {
                    if (gpoPreguntas[j].checked) {
                        botonSiguiente.removeAttribute("disabled");
                        botonEnviar.removeAttribute("disabled");
                        botonSiguiente.style.backgroundColor = 'rgb(62, 62, 214)';
                        botonEnviar.style.backgroundColor = 'rgb(62, 62, 214)';
                        botonSiguiente.style.cursor = 'pointer';
                        botonEnviar.style.cursor = 'pointer';
                        return;
                    }
                }
            botonSiguiente.disable = false;
        });
    }
}