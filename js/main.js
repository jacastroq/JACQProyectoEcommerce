$(document).ready(function(){

   
    /* ARRAYS QUE CONTIENE LOS ATRIBUTOS DE LOS CURSOS LOS CUALES CONSTITUYEN LOS ITEMS QUE SE VENDEN EN EL ECOMMERCE*/

     var cursosArray =`[
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


/*Tomar en cuenta que es importante realizar la concatenacion de manera correcta un espacio, o algun detalle podria hacer que no se renderice correctamente o que se pierda la propiedad de algun atributo */

    var cursosJSON = jQuery.parseJSON(cursosArray);

    var recorrer = function () {

        var cursosHTML = '';
        for (var i = 0; i < cursosJSON.length; i++) {
            
            cursosHTML += `<div class="box `+cursosJSON[i].categoria+`">\
                <div class="image">\
                    <img src="` + cursosJSON[i].ruta + `" alt="">\
                </div >\
                <div class="info">\
                <h3>CURSO: `+ cursosJSON[i].tema + `</h3>\
                <div class="subInfo" >\
                    <strong class="price">$`+ cursosJSON[i].precio + `</strong>\
                <div>\
                        <button class="cursebtn"><i class="fas fa-eye"> </i> Chequear</button>\
                        <button class="cursebtn2"><i class="fas fa-shopping-cart"> </i> Comprar</button>\
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

                    console.log('se esta recorriendo: ' + cursosJSON[i].id);
        }

        $('#image-container').html(cursosHTML);

    }

    recorrer();

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

});