// variables globales
    var puerquitoSonido = new Audio('assets/media/pig-sound-minecraft-2.mp3');
    var sonidoComer = new Audio('assets/media/nom-nom-nom.mp3');
    var puerquitoLoop;
    var sonidoPortal = new Audio('assets/media/portal-nether.mp3');


// SI EL JUGADOR ESTA DENTRO DEL div con clase BIOMA BLAH BLAH SOLO APARECEN DEL BIOMA EN EL QUE ESTE DENTRO

// codigo aqui


// el jugador se deslize entre los biomas en vez de fade in y fade out

// codigo aqui


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

$('#montar-al-puerco').click(function(){
    $('#puerco').hide();
    $('#jugador').attr('src', 'assets/img/minecraft-steve-pig-512x512.png');
    puerquitoSonido.play();
    puerquitoLoop = setInterval(function(){
        puerquitoSonido.play();
    }, 5000);
})

$('#desmontar-al-puerco').click(function(){
    $('#puerco').show();
    $('#jugador').attr('src', 'assets/img/Steve_(Minecraft).png');
    clearInterval(puerquitoLoop);
})

$('#entrar-al-portal').click(function(){
    sonidoPortal.play();
    $('#jugador').fadeOut(3000);
    setTimeout(function(){
        $('.bioma-br').append($('#jugador'));
    }, 3000);
    $('#jugador').fadeIn(3000);
})

$('#volver-a-la-tierra').click(function(){
    sonidoPortal.play();
    $('#jugador').fadeOut(3000);
    setTimeout(function(){
        $('.bioma-tr').append($('#jugador'));
    }, 3000);
    $('#jugador').fadeIn(3000);
})