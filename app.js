function bascule_affichage(id) {
    bloc = document.getElementById(id);
    bloc.classList.toggle("visible");
}
const body = document.querySelector('.pageContent')
const loader = document.querySelector('.loader')
loader.style.display = 'block'
body.style.display = 'none'


window.setTimeout(()=>{
    loader.style.display = 'none'
    body.style.display = 'block'
    //loader.style.display = 'none'
},2100)


