$(document).ready(function () {


    /* ARRAYS QUE CONTIENE LOS ATRIBUTOS DE LOS CURSOS LOS CUALES CONSTITUYEN LOS ITEMS QUE SE VENDEN EN EL ECOMMERCE*/

    var cursosArray = `[
{
"categoria": "front",
"precio": 10,
"ruta": "resources/images/cursos/img_html.jpg",
"id": 1,
"tema": "html",
"video": "https://www.youtube.com/embed/rbuYtrNUxg4",
"instructor": "SANCHEZ CARLOS",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "front",
"precio": 25,
"ruta": "resources/images/cursos/img_css.jpg",
"id": 2,
"tema": "css",
"video": "https://www.youtube.com/embed/24gNhTcy6pw",
"instructor": "POSO DAYANA",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "front",
"precio": 35,
"ruta": "resources/images/cursos/img_javascript.jpg",
"id": 3,
"tema": "JavaScript",
"video": "https://www.youtube.com/embed/xnWtGNiG2lg",
"instructor":"PRADO LIZBETH",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "front",
"precio": 15,
"ruta": "resources/images/cursos/img_bootstrap.jpg",
"id": 4,
"tema": "Bootstrap",
"video": "https://www.youtube.com/embed/7s1RjItUBqU",
"instructor": "MORA JOHNNY",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "front",
"precio": 7,
"ruta": "resources/images/cursos/img_materialize.jpg",
"id": 5,
"tema": "Materialize",
"video": "https://www.youtube.com/embed/YJKWkUi2r5g",
"instructor": "NAVAS MONICA",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "front",
"precio": 20,
"ruta": "resources/images/cursos/img_bulma.jpg",
"id": 6,
"tema": "Bulma",
"video": "https://www.youtube.com/embed/mjB7NrhC644",
"instructor": "FLORES VANESSA",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "front",
"precio": 24,
"ruta": "resources/images/cursos/img_sass.jpg",
"id": 7,
"tema": "SASS",
"video": "https://www.youtube.com/embed/mhLq2nn6evA",
"instructor": "MOLINA OMAR",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "front",
"precio": 30,
"ruta": "resources/images/cursos/img_less.jpg",
"id": 8,
"tema": "LESS",
"video": "https://www.youtube.com/embed/OEufmBXzS5M",
"instructor": "MORALES DARWIN",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "front",
"precio": 10,
"ruta": "resources/images/cursos/img_devexpress.jpg",
"id": 9,
"tema": "Dev Express",
"video": "https://www.youtube.com/embed/KUiNgwpY7DE",
"instructor": "MACAS CATTY",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "back",
"precio": 45,
"ruta": "resources/images/cursos/img_csharp.jpg",
"id": 10,
"tema": "C#",
"video":"https://www.youtube.com/embed/6EBNIgkrU74",
"instructor": "ENRIQUEZ ERICA",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "back",
"precio": 95,
"ruta": "resources/images/cursos/img_java.jpg",
"id": 11,
"tema": "JAVA",
"video": "https://www.youtube.com/embed/4sZHxFEyEiE",
"instructor": "FARINANGO ANGEL",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "back",
"precio": 10,
"ruta": "resources/images/cursos/img_php.jpg",
"id": 12,
"tema": "PHP",
"video": "https://www.youtube.com/embed/vXf5gaozWcc",
"instructor": "ARMAS LUIS",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "back",
"precio": 15,
"ruta": "resources/images/cursos/img_aspnet.jpg",
"id": 13,
"tema": "aspnet",
"video": "https://www.youtube.com/embed/y2E9OnVV_C4",
"instructor": "ERAZO DIANA",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "back",
"precio": 20,
"ruta": "resources/images/cursos/img_nodejs.jpg",
"id": 14,
"tema": "Node JS",
"video": "https://www.youtube.com/embed/APbb-z8A3Zc",
"instructor": "POZO JESSICA",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "back",
"precio": 40,
"ruta": "resources/images/cursos/img_laravel.jpg",
"id": 15,
"tema": "Laravel",
"video": "https://www.youtube.com/embed/k23NTveLzso",
"instructor": "OTUNA WILSON",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "back",
"precio": 20,
"ruta": "resources/images/cursos/img_ruby.jpg",
"id": 16,
"tema": "Ruby",
"video": "https://www.youtube.com/embed/R3MhA8vWGsg",
"instructor": "BURBANO GABRIEL",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "back",
"precio": 20,
"ruta": "resources/images/cursos/img_scala.jpg",
"id": 17,
"tema": "Scala",
"video": "https://www.youtube.com/embed/t6pl0gacuX0",
"instructor": "SEVILLA RAUL",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "back",
"precio": 15,
"ruta": "resources/images/cursos/img_kotlin.jpg",
"id": 18,
"tema": "Kotlin",
"video": "https://www.youtube.com/embed/s0BB-1h0d58",
"instructor": "ALTA JAVIER",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "basesdatos",
"precio": 70,
"ruta": "resources/images/cursos/img_mysql.jpg",
"id": 19,
"tema": "MySQl",
"video": "https://www.youtube.com/embed/Q6sn6UMgR54",
"instructor": "ARROYO CINTHIA",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "basesdatos",
"precio": 85,
"ruta": "resources/images/cursos/img_sqlserver.jpg",
"id": 20,
"tema": "SQL Server",
"video": "https://www.youtube.com/embed/VdTdhRRBSZM",
"instructor": "DIAZ STEPHANY",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "basesdatos",
"precio": 20,
"ruta": "resources/images/cursos/img_postgresql.jpg",
"id": 21,
"tema": "Postgresql",
"video": "https://www.youtube.com/embed/RYA1HqbC0Lg",
"instructor": "BURGOS MAURICIO",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "basesdatos",
"precio": 35,
"ruta": "resources/images/cursos/img_mariadb.jpg",
"id": 22,
"tema": "Maria DB",
"video": "https://www.youtube.com/embed/uxfHWKXyXDo",
"instructor": "MESA IRENE",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "basesdatos",
"precio": 10,
"ruta": "resources/images/cursos/img_firebase.jpg",
"id": 23,
"tema": "Firebase",
"video": "https://www.youtube.com/embed/gsePWTrOCZE",
"instructor": "HARO JAVIER",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "basesdatos",
"precio": 25,
"ruta": "resources/images/cursos/img_redis.jpg",
"id": 24,
"tema": "Redis",
"video": "https://www.youtube.com/embed/GU6N8Qk2dBE",
"instructor": "GORDILLO VIVIANA",
"idioma": "ES",
"reputacion":4
},
{
"categoria": "basesdatos",
"precio": 25,
"ruta": "resources/images/cursos/img_oracle.jpg",
"id": 25,
"tema": "Oracle",
"video": "https://www.youtube.com/embed/izqQx3I-ePw",
"instructor": "GOMEZ ALEXIS",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "basesdatos",
"precio": 40,
"ruta": "resources/images/cursos/img_db2.jpg",
"id": 26,
"tema": "DB2",
"video": "https://www.youtube.com/embed/aMnBCOq9qrk",
"instructor": "ESCOLA PAUL",
"idioma": "EN",
"reputacion":5
},
{
"categoria": "basesdatos",
"precio": 10,
"ruta": "resources/images/cursos/img_cassandra.jpg",
"id": 27,
"tema": "Cassandra",
"video": "https://www.youtube.com/embed/s1xc1HVsRk0",
"instructor": "CRESPO CRISTINA",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 15,
"ruta": "resources/images/cursos/img_liderazgo.jpg",
"id": 28,
"tema": "Liderazgo",
"video": "https://www.youtube.com/embed/5rQ7FI56yqI",
"instructor": "CAMPOS JAVIER ",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 15,
"ruta": "resources/images/cursos/img_comunicacionefectiva.jpg",
"id": 29,
"tema": "Comunicacion Efectiva",
"video": "https://www.youtube.com/embed/Xi2QUFA2FxM",
"instructor": "CASTILLO NESTOR ",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 30,
"ruta": "resources/images/cursos/img_pnl.jpg",
"id": 30,
"tema": "PNL",
"video": "https://www.youtube.com/embed/VgXpXi4o2_M",
"instructor": "BENAVIDES ALEJANDRA",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 25,
"ruta": "resources/images/cursos/img_lecturarapida.jpg",
"id": 31,
"tema": "Lectura Rapida",
"video": "https://www.youtube.com/embed/bZhASsD8IB8",
"instructor": "ORTIZ DAVID",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 10,
"ruta": "resources/images/cursos/img_atencioncliente.jpg",
"id": 32,
"tema": "Atencion al Cliente",
"video": "https://www.youtube.com/embed/NRIPfO60BNA",
"instructor": "SALAZAR ALEXIS",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 45,
"ruta": "resources/images/cursos/img_trabajoequipo.jpg",
"id": 33,
"tema": "Trabajo en equipo",
"video": "https://www.youtube.com/embed/wmWtkeG7wPI",
"instructor": "TAYAN RAUL",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 15,
"ruta": "resources/images/cursos/img_finanzaspersonales.jpg",
"id": 34,
"tema": "Finanzas Personales",
"video": "https://www.youtube.com/embed/A5UxoazzeOc",
"instructor": "ALMEIDA EDUARDO",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 20,
"ruta": "resources/images/cursos/img_emprendimiento.jpg",
"id": 35,
"tema": "Emprendimiento",
"video": "https://www.youtube.com/embed/d7_pKFWJHE0",
"instructor": "ARMAS AUGUSTO",
"idioma": "ES",
"reputacion":5
},
{
"categoria": "softskills",
"precio": 50,
"ruta": "resources/images/cursos/img_ventas.jpg",
"id": 36,
"tema": "Ventas",
"video": "https://www.youtube.com/embed/OGHkc6WMaus",
"instructor": "AYALA ISRAEL",
"idioma": "ES",
"reputacion":5
}
]`;



    /* Variable para ir guardando en un array los cursos comprados y poder realizar calculos y la suma. */


    /* Cast de string a JSON */
    var cursosJSON = jQuery.parseJSON(cursosArray);

    var arrayCarritoCompras = [];

    //Metodo para darle una nueva instancia al carrito de compras, se cambia la referencia de memoria para que se muestre vacio
    var vaciarElementosCarritoCompras = function () {
        arrayCarritoCompras = [];
        $('#detalle-costo').children('p').remove();
        $('#resulcheck').html('$0');
    }
    vaciarElementosCarritoCompras();

    //Funcion que agrega id de cursos al array carrito de compras
    //verificar que no se escoja el mismo curso 2 veces.
    //-1 si no esta repitido, 0 si se es repetido
    // Metodo que agrega elementos al carrito de compra hace una suma preliminar del total a pagar por el usuario y rendiriza en pantalla.
    var agregarElementosCarritoCompras = function (cursoCarrito) {

        var result = arrayCarritoCompras.indexOf(cursoCarrito);
        console.log('resultado: ' + result);

        if (result === -1) {
           // vaciarElementosCarritoCompras();

            arrayCarritoCompras.push(cursoCarrito);
            alert('Estimado usuario el curso ha sido agregado a su carrito de compras, revise en la esquina inferior izquierda de su pantalla haciendo click en el signo de suma rojo.');

        let cantidadCarritoCompras = arrayCarritoCompras.length;

        if (cantidadCarritoCompras != 0) {

            let acumuladorSaldo = 0;
            $('#contador-articulos').html(`` + cantidadCarritoCompras);
            $('#detalle-costo').children('p').remove();
            for (var i = 0; i < arrayCarritoCompras.length; i++) {
                let aux = cursosJSON[arrayCarritoCompras[i] - 1];

                let agregarCarrito = `<p>` + `Curso: ` + aux.tema + `<span> $` + aux.precio + `</span></p>`;
                acumuladorSaldo += aux.precio;

                $('#detalle-costo').prepend(agregarCarrito);
            }
            $('#resulcheck').html(`$`+acumuladorSaldo);

        } else {
            alert('Estimado usuario no tiene cursos en el carrito de compras.');
        }

        } else {
            alert('Estimado usuario este curso ya se encuentra en su carrito de compras.');
        }
    };


    //agregarElementosCarritoCompras(10);
    //agregarElementosCarritoCompras(10);
    //agregarElementosCarritoCompras(35);
    //agregarElementosCarritoCompras(35);
    //agregarElementosCarritoCompras(36);

    



/*Tomar en cuenta que es importante realizar la concatenacion de manera correcta un espacio, o algun detalle podria hacer que no se renderice correctamente o que se pierda la propiedad de algun atributo */
    var recorrer = function () {

        var cursosHTML = '';
        for (var i = 0; i < cursosJSON.length; i++) {
            
            cursosHTML = `<div class="box ` + cursosJSON[i].categoria +`">\
                <input type="hidden" id="`+ cursosJSON[i].id+`" readonly>\
                <input type="hidden" class="video" value="`+cursosJSON[i].video+`" readonly>\

                <div class="image">\
                    <img src="` + cursosJSON[i].ruta + `" alt="">\
                </div >\
                <div class="info">\
                <h3>CURSO: `+ cursosJSON[i].tema + `</h3>\
                <div class="subInfo" >\
                    <strong class="price">$`+ cursosJSON[i].precio + `</strong>\
                <div>\
                        <button data-video="` + cursosJSON[i].video +`" class="cursebtn"><i class="fas fa-eye"> </i> Chequear</button>\
                        <button data-id="`+ cursosJSON[i].id + `" class="cursebtn2"><i class="fas fa-shopping-cart"> </i> Comprar</button>\
                    </div >\
                </div >\
               <div class="stars">\
                   <i class="fas fa-star"></i>\
                   <i class="fas fa-star"></i>\
                   <i class="fas fa-star"></i>\
                   <i class="fas fa-star"></i>\
                   <i class="fas fa-star"></i>\
               </div>\
            </div >\
          </div >`;

            $('#image-container').append(cursosHTML);

           // console.log('se esta recorriendo: ' + cursosJSON[i].id);
        }

      // otra manera de renderiza los elementos como html pero cursosHTML deberia convertirse en un acumulador +=
      //  $('#image-container').html(cursosHTML);

    }

    recorrer();

    /* Despues de renderizar todos los elementos del JSON se agrega las funcionalidades para  colapsar el menu y hacer scroll*/

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 68){
            $('header .header-2').addClass('header-active');
        }else{
            $('header .header-2').removeClass('header-active');
        }

        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });

    $('.small-image img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);

    });


    $('.gallery .btn').click(function(){

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.gallery .box').show(400);
        }else{
            $('.gallery .box').not('.'+filter).hide(200);
            $('.gallery .box').filter('.'+filter).show(400);
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');

    });

/*Se realiza funcionalidad para mostrar o remover una ventana modal para visulaizar el primer video de los cursos*/


    $( '.cursebtn').on('click',function () {

        //Da undefined por que se intenta acceder a nodos que fueron renderizados despues de haber cargado el dom, por eso es importante en lugar de usar .html usar el metodo add para que se agreguen los nodos
        //  console.log($(this).closest('.box').children('input .video').val());

        let linkVideo = $(this).data('video');


        let mostrarModal = `<section class="ventana">
        <input type="checkbox" id="btn-modal"> 
        <div class="modal">
            <div class="contenedor">
                <header>Chequea la Calidad del Curso</header>
                <label id="label-close" >X</label>
                <div class="contenido">
                    <h3>PRIMER VIDEO DEL CURSO</h3>
                    <p>Imagina el valor que ha aportado y esto fue solo el primer video de un curso completo con el que podras afinar tus habilidades hasta convertirte en experto.</p>
                    <div class="video-responsive">
                        <iframe src="`+linkVideo+`" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

        $('body').prepend(mostrarModal);

        //console.log(linkVideo);
    });


    $('.cursebtn2').on('click', function () {

        let idCurso = $(this).data('id');
        agregarElementosCarritoCompras(idCurso+0);

    });


/*Se realiza funcionalidad para remover la pantalla modal, usar delegacion de eventos, es importante mencionar la delegacion de eventos ya que en este caso fue necesario hacerlo ya que al principio al renderizar el dom la ventana no existia y se agrego dinamicamente con append por eso al momento de intetar seleccionarla no funcionaba pues no existia desde el comienzo, delegar significa acceder a ella desde otro elemento que sí se renderizo al inicio en este caso el body.
 */

/*
 * Por otra parte se tuvo un incoveniente ya que como opcion principal en lugar de remover el elemento se hacia un  visibility hidden pero el video del iframe se seguia reproduciendo, por eso la mejor opcion es eliminar la ventana modal.
 */

    $('body').on('click', '#label-close', function () {
        $(this).closest('.ventana').remove();
    });



























});