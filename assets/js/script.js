// variables globales
    var puerquitoSonido = new Audio('assets/media/pig-sound-minecraft-2.mp3');
    var sonidoComer = new Audio('assets/media/nom-nom-nom.mp3');
    var puerquitoLoop;
    var sonidoPortal = new Audio('assets/media/portal-nether.mp3');


// SI EL JUGADOR ESTA DENTRO DEL div con clase BIOMA BLAH BLAH SOLO APARECEN los botones DEL BIOMA EN EL QUE ESTE DENTRO
function localizarJugador(){
    var biomaActual = $('#jugador').parent().attr('class');

    // Aqui se ocupa el each para recorrer todos los botones
    $('.btn').each(function(){
        if ($(this).parent().attr('class') != biomaActual) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
}

 localizarJugador();


// Movimiento del jugador

$('#ir-al-portal').click(function(){
    $('.btn').each(function(){
            $(this).hide();
    })
     $('#jugador').animate({ left: '+=82vw' }, 2000, function() {
        $('.bioma-tr').append($('#jugador'));
        localizarJugador();
    });
})

$('#saltar-al-agua').click(function(){
    var sonidoAgua = new Audio('assets/media/water-droplet-drip.mp3')
    $('.btn').each(function(){
            $(this).hide();
    })
    setTimeout(function(){
        sonidoAgua.play();
    }, 700);
    $('#jugador').animate({ top: '-=12vh', left: '+=20vw' }, 700, function() {
    $('#jugador').animate({ top: '+=58vh', left: '+=16vw'  }, 500, function(){
        $('#jugador').attr('src', 'assets/img/minecraft-steve-axolotl-512x512.png');
    });
    
    $('.bioma-bl').append($('#jugador'));
    localizarJugador();
    });
})


$('#volver-a-la-playa').click(function(){
     $('.btn').each(function(){
            $(this).hide();
    })
     $('#jugador').animate({ left: '-=82vw' }, 2000, function() {
        $('.bioma-tl').append($('#jugador'));
        localizarJugador();
    });
})

$('#volver-a-la-playa-2').click(function(){
        var sonidoSalirAgua = new Audio('assets/media/heavy-water-splash.mp3')

     $('.btn').each(function(){
            $(this).hide();
    })
    $('#jugador').animate({ top: '-=58vh', left: '-=16vw' }, 500, function() {
        $('#jugador').animate({ top: '+=12vh', left: '-=20vw' }, 600);
        sonidoSalirAgua.play();
        $('#jugador').attr('src', 'assets/img/Steve_(Minecraft).png');
        $('.bioma-tl').append($('#jugador'));
        localizarJugador();
    });
})


$('#entrar-al-portal').click(function(){
     $('.btn').each(function(){
            $(this).hide();
    })
    sonidoPortal.play();
    $('#jugador').fadeOut(3000);
    setTimeout(function(){
        $('#jugador').css('top', '74vh');
        $('.bioma-br').append($('#jugador'));
        localizarJugador();
    }, 3000);
 
    $('#jugador').fadeIn(2000);
    
})

$('#volver-a-la-tierra').click(function(){
     $('.btn').each(function(){
            $(this).hide();
    })
    sonidoPortal.play();
    $('#jugador').fadeOut(3000);
    setTimeout(function(){
        $('#jugador').css('top', '25vh');
        $('.bioma-tr').append($('#jugador'));
         localizarJugador();
    }, 3000);
    $('#jugador').fadeIn(3000);
})


// Comerse un ajolote lo hace desaparecer y reproduce un sonido
$('#comerse-un-ajolote').click(function(){
    sonidoComer.play();
    $('#ajolote').fadeOut(1000)
    $(this).remove();
    setTimeout(function(){
        alert('Steve: Que rico')
    },1500)
})

// El boton montar al puerco, esconde al puerco y la foto de jugador se transforma + quizas en un loop cada ciertos segundos poner ruidos de cerdo solo cuando el jugador este en el estado montar puerco

$('#dormir-en-la-cama').click(function(){
    $('.btn').each(function(){
            $(this).hide();
    })
    var explosion = new Audio('assets/media/minecraft-tnt-explosion.mp3');
    $('#jugador').animate({ left: '-=15vw', top: '+=10vh'}, 1000, function(){
        $('#jugador').attr('src','assets/img/LyingSteve.webp');
        $('#jugador').css('height', '-=56px');
    })
    setTimeout(function(){
        explosion.play();
        $("#jugador").hide("explode", { pieces: 16 });
        $("#cama").hide("explode", { pieces: 16 });
    }, 2500)

    setTimeout(function(){
        document.writeln('<body style="background-image: url(assets/img/gamover.webp); background-size: cover;">');
    }, 3000)
})

