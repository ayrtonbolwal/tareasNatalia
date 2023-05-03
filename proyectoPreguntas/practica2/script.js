// Estas son tus preguntas
let arregloPreguntas = [];
arregloPreguntas[0] = 'Pregunta 1';
arregloPreguntas[1] = 'Pregunta 2';
arregloPreguntas[2] = 'Pregunta 3';
arregloPreguntas[3] = 'Pregunta 4';
arregloPreguntas[4] = 'Pregunta 5';

// Aquí se van a guardar tus respuestas
let arregloRespuestas = [];

// Aquí inicializamos variables
let numeroPregunta = 0;
let miRespuesta;

// Aquí invocamos nuestros elementos HTML
let miPregunta = document.getElementById('espacioPregunta');
let miFormulario = document.getElementById('miFormulario');
let gpoRespuestas = document.getElementsByName('miOpcion');
let botonSiguiente = document.getElementById('siguiente');

// Aquí vamos insertando las preguntas en pantalla, empezamos por la 0.
miPregunta.innerHTML = arregloPreguntas[numeroPregunta];
// Le decimos al botón que inicie deshabilitado.
botonSiguiente.setAttribute("disabled", "disabled");
// Esta función se mantiene escuchando esperando a que des clic en una opción para habilitar el botón.
activarBoton(gpoRespuestas);




// -- FUNCIONES -- //

// Esta función espera a que demos clic en una opción para activar botón. 
function activarBoton(gpoRespuestas){
    for(let i = 0; i < gpoRespuestas.length; i++){
        // Acción que se ejecuta cuando hay clic
        gpoRespuestas[i].addEventListener('click', function(){
            // Checa cuál es el botón seleccionado
            for(let j = 0; j < gpoRespuestas.length; j++){
                if(gpoRespuestas[j].checked){
                    console.log('Ha sido seleccionado el botón: ' + (j+1));
                    miRespuesta = j+1;
                }
            }
            // Cuando hay un clic se remueve el Atributo de deshabilitado
            botonSiguiente.removeAttribute("disabled");
        })
    }
}


// Lo que sucede cuando se da clic en siguiente.
function siguiente(){
    //Esta función guarda la respuesta en el arreglo.
    guardarRespuesta(miRespuesta);
    //Esto muestra la respuesta seleccionada en consola.
    console.log(arregloRespuestas[numeroPregunta]);
    //Vuelve a deshabilitar el botón para que en la siguiente pregunta no esté activado.
    botonSiguiente.setAttribute("disabled", "disabled");
    //Se deseleccionan las respuestas. 
    vaciarRespuestas();

    //Si el número de pregunta es la penúltima, entonces el texto del botón en la última pregunta será de "Siguiente" a "Enviar"
    if(numeroPregunta == arregloPreguntas.length-2){
        botonSiguiente.innerHTML = 'Enviar';
    }

    //Si el número de pregunta es la última, entonces imprimirá las respuestas. 
    if(numeroPregunta == arregloPreguntas.length-1){
        console.log(arregloRespuestas);
    } else { //Si el número de pregunta no es la última entonces se muestra la siguiente pregunta. 
        numeroPregunta = numeroPregunta + 1;
        miPregunta.innerHTML = arregloPreguntas[numeroPregunta];
    }
}

// Esta funcion guardar en el arreglo las respuestas.  
function guardarRespuesta(respuesta){
    arregloRespuestas[numeroPregunta] = respuesta;
}

// Esta función hace que se deseleccionen las posibles respuestas. 
function vaciarRespuestas(){
    for (let k = 0; k < gpoRespuestas.length; k++) {
        gpoRespuestas[k].checked = false;
    }
}