function bascule_affichage(id) {
    bloc = document.getElementById(id);
    bloc.classList.toggle("visible");
}




/*
$(document).ready(function(){   
    window.setTimeout('fadeout();', 2000);
});

function fadeout(){

    $('#loader').delay(2000).fadeOut('slow', function() {
        $('.notLoaded').removeClass('notLoaded');
    });
}
*/

/*
window.setTimeout(()=>{
    loader.style.display = 'none'
    pageContent.style.display = 'block'
},2100)
*/