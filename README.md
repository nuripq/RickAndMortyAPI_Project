HTML:
<!DOCTYPE html>: Define la versión de HTML utilizada en el documento, en este caso, HTML5.

<html lang="en">: Define el comienzo del documento HTML y especifica el idioma como inglés ("en").

Etiqueta <head>: Contiene metadatos sobre el documento HTML, como el título de la página, la codificación de caracteres, la escala de la ventana gráfica y referencias a hojas de estilo y scripts.

<meta charset="UTF-8">: Especifica la codificación de caracteres utilizada en el documento como UTF-8, que es compatible con la mayoría de los caracteres internacionales.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Define cómo el contenido se ajusta al tamaño de la pantalla del dispositivo y establece la escala inicial en 1.0.

<title>Rick and Morty!!!</title>: Define el título de la página que aparecerá en la barra de título del navegador.

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">: Enlaza la hoja de estilos de Bootstrap, una biblioteca de CSS, para estilizar la página.

<link rel="stylesheet" href="rickmortystyle.css">: Enlaza un archivo CSS local llamado "rickmortystyle.css" para agregar estilos adicionales a la página.

Etiqueta <body>: Contiene todo el contenido visible de la página web.

<header>: Sección que contiene el encabezado de la página.

<h1 class="text-center my-4">PERSONAJES DE LA SERIE</h1>: Encabezado de nivel 1 que indica el título principal de la página. La clase "text-center" centra el texto horizontalmente y la clase "my-4" agrega márgenes en la parte superior e inferior.

<div class="container">: Define un contenedor principal para el contenido de la página. Bootstrap utiliza contenedores para alinear y establecer el ancho del contenido.

<div id="characterList" class="row"></div>: Crea un contenedor con el identificador "characterList" y la clase "row" para contener la lista de personajes. Esta lista se poblará dinámicamente con JavaScript.

<script src="rickMorty.js"></script>: Enlaza un archivo de script llamado "rickMorty.js", que probablemente contiene funciones para cargar y mostrar la lista de personajes de "Rick and Morty".

JS:
DOMContentLoaded Event Listener: Espera a que el DOM (Documento Object Model) esté completamente cargado antes de ejecutar el código. Esto asegura que el código JavaScript se ejecute solo cuando la estructura HTML de la página esté lista.

Fetch API: Hace una solicitud GET a la API de Rick and Morty (https://rickandmortyapi.com/api/character) para obtener información sobre los personajes de la serie.

Promesas y Manejo de Respuestas: Utiliza el método fetch() para enviar una solicitud a la API. Luego, encadena las promesas con .then() para manejar la respuesta de la solicitud. La primera promesa convierte la respuesta en formato JSON utilizando el método response.json(). La segunda promesa recibe los datos JSON resultantes.

Iteración sobre los Personajes: Itera sobre los resultados de los personajes obtenidos de la API usando data.results.forEach(). Para cada personaje, crea una tarjeta de personaje con la información relevante, como el nombre, estado y especie del personaje.

Actualización del HTML: Agrega dinámicamente las tarjetas de personajes al elemento HTML con el id "characterList" utilizando characterList.innerHTML += characterCard.

Captura de Errores: Si hay algún error al realizar la solicitud o procesar los datos, se maneja en el bloque .catch(), donde se registra el error en la consola.

