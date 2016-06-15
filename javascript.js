var images_slider = [
"images/_0549.jpg",
"images/_0580.jpg",
"images/_0632.jpg",
"images/_0677.jpg",
"images/_0717.jpg",
"images/_0763.jpg",
"images/_0843.jpg",
"images/_0871.jpg",
"images/_0912.jpg",
"images/_0920.jpg",
"images/_0924.jpg",
"images/_0948.jpg",
"images/_1020.jpg",
"images/_9750.jpg",
"images/_9805.jpg"
]


//////Portada////
for (var i in images_slider) {
    $(".slider").append("<div><img src='" + images_slider[i] + "'></div>")
}

///Slider////


$(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    draggable: false

                }
    },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    draggable: true
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    draggable: true

                }
    }

  ]

    });
    $(".slick-next, .slick-prev").hide()
    $('.slick-track').css("left", "-350px")
    var animate_loop_fwd = function () {

        var time = ((parseInt($(".slick-track").css("left"))) - (-350 - (parseInt($(".slick-slide").css("width"))))) * 8

        $('.slick-track').animate({
                left: -350 - (parseInt($(".slick-slide").css("width")))
            }, time, "linear", function () {
                $('.slick-track').css("left", "-350px")
                $(".slick-slide:first").insertAfter(".slick-slide:last")
                animate_loop_fwd()
            }

        )
    };
    var animate_loop_bwd = function () {

        var time = -((parseInt($(".slick-track").css("left"))) - (-350 + (parseInt($(".slick-slide").css("width"))))) * 10

        $('.slick-track').animate({
                left: -350 + (parseInt($(".slick-slide").css("width")))
            }, time, "linear", function () {
                $(".slick-slide:last").insertBefore(".slick-slide:first")
                $('.slick-track').css("left", "-350px")
                animate_loop_bwd()
            }

        )
    };

    $(".forward").mouseover(animate_loop_fwd)
    $(".forward").mouseleave(function () {
        $(".slick-track").stop()
    })
    $(".back").mouseover(animate_loop_bwd)
    $(".back").mouseleave(function () {
        $(".slick-track").stop()
    })
});



///nav///
$(".navbar-nav a").click(function () {
    $(".cuerpo").hide();
    $("." + $(this).attr("class")).show()
})

$(".navbar-nav>li").click(function () {
    $(".navbar-nav>li").removeClass("activ");
    $(this).addClass("activ")
})

////////news//////
var noticias = [
    {
        titulo: "Lorem ipsum",
        noticia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum porttitor nisi ut dictum. Fusce tortor turpis, rutrum id ipsum at, molestie mattis diam. Nunc fermentum mauris odio, eget placerat neque pretium eu. Morbi efficitur est vel erat tempus, vitae dapibus nunc bibendum. Nulla blandit tempor magna eu lacinia. Phasellus at auctor erat. "
    }, {
        titulo: "Lorem ipsum",
        noticia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum porttitor nisi ut dictum. Fusce tortor turpis, rutrum id ipsum at, molestie mattis diam. Nunc fermentum mauris odio, eget placerat neque pretium eu. Morbi efficitur est vel erat tempus, vitae dapibus nunc bibendum. Nulla blandit tempor magna eu lacinia. Phasellus at auctor erat. "
    }, {
        titulo: "Lorem ipsum",
        noticia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum porttitor nisi ut dictum. Fusce tortor turpis, rutrum id ipsum at, molestie mattis diam. Nunc fermentum mauris odio, eget placerat neque pretium eu. Morbi efficitur est vel erat tempus, vitae dapibus nunc bibendum. Nulla blandit tempor magna eu lacinia. Phasellus at auctor erat. "
    }, {
        titulo: "Lorem ipsum",
        noticia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum porttitor nisi ut dictum. Fusce tortor turpis, rutrum id ipsum at, molestie mattis diam. Nunc fermentum mauris odio, eget placerat neque pretium eu. Morbi efficitur est vel erat tempus, vitae dapibus nunc bibendum. Nulla blandit tempor magna eu lacinia. Phasellus at auctor erat. "
    }, {
        titulo: "Lorem ipsum",
        noticia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum porttitor nisi ut dictum. Fusce tortor turpis, rutrum id ipsum at, molestie mattis diam. Nunc fermentum mauris odio, eget placerat neque pretium eu. Morbi efficitur est vel erat tempus, vitae dapibus nunc bibendum. Nulla blandit tempor magna eu lacinia. Phasellus at auctor erat. "
    },
]


function postNews(noticia) {
    $("#newsfeed").append("<div class=noticia>\
                        <h3>" + noticia.titulo + "</h3>\
                        <p>" + noticia.noticia + "</p>\
                    </div>\
                    <hr>")
}

noticias.forEach(postNews)


var catalogo = [
    {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0559.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0582.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0585.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0758.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0830.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0840.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0848.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0909.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC0963.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9432.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9485.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9600.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9677.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9698.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9841.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9845.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9861.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9877.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9898.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9911.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9934.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9948.jpg"
    }, {
        banda: "Pepito",
        img_url: "images/Catalogo/_DSC9970.jpg"
    }

]

function postgallery(foto) {
    $(".galeria").append('<div class="col-lg-3 col-md-4 col-sm-6 col-xs-offset-1">\
                    <div class="catbox">\
                    <img class=catimg src=' + foto.img_url + '>\
                        <p class=nombre_banda>' + foto.banda + '</p>\
                    </div>\
                </div>')
    catalogo.shift()
}

$("a.catalogo").click(function () {
    catalogo.forEach(postgallery)
    
    $(".catbox").hover(function () {
       
        $(this).animate({
            width: "+=30",
        }, 500)
        $(this).children("img").animate({
            width: "+=30",
            height: "+=10"
        }, 500)
    }, function(){
         $(this).finish()
         $(this).children("img").finish()
        $(this).animate({
            width: "-=30",
        }, 500)
        $(this).children("img").animate({
            width: "-=30",
            height: "-=10"
        }, 500) 
    })

})

var agenda=[
    {
        fecha: [25, "Nov"],
        evento: {
            nombre: "Lorem Ipsum",
            descripcion:"Teatro Chachara 20:30"
        }
    },  {
        fecha: [25, "Nov"],
        evento: {
            nombre: "Lorem Ipsum",
            descripcion:"Teatro Chachara 20:30"
        }
    },  {
        fecha: [25, "Nov"],
        evento: {
            nombre: "Lorem Ipsum",
            descripcion:"Teatro Chachara 20:30"
        }
    },  {
        fecha: [25, "Nov"],
        evento: {
            nombre: "Lorem Ipsum",
            descripcion:"Teatro Chachara 20:30"
        }
    }
]

function postAgenda(date){
    $("#agendafeed").append('<div class="row eventobox">\
                        <div class="col-xs-2 fecha">\
                            <h2>'+date.fecha[0]+'</h2>\
                            <h4>'+date.fecha[1]+'</h4>\
                        </div>\
                        <div class="col-xs-9">\
                            <h2>'+date.evento.nombre+'</h2>\
                            <p>'+date.evento.descripcion+'</p>\
                        </div>\
                    </div>\
                    <hr>')
    
}

agenda.forEach(postAgenda)