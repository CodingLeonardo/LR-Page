const $Menu = document.querySelector('header')
const $MenuUl = document.querySelector('.menu ul')
const $CertificadosC = document.querySelector('.container-certificados')
const $SkillsC = document.querySelector('.container-skills')
const $OnLoad = document.querySelector('#onload')

const $AboutMe = document.querySelector('#about-me')
const $Certificados = document.querySelector('#certificados')
const $Skills = document.querySelector('#skills')
const $Contact = document.querySelector('#contact')

// Menu Section
const menu = {
    nameMenu: [
        'Sobre mi', 
        'Certificados', 
        'Habilidades', 
        'Contacto'
    ],
    idMenu: [
        '#about-me', 
        '#certificados', 
        '#skills', 
        '#contact'
    ],
}
// Certificados Section
const extImg = '.svg'
const urlImg = 'img/diploma-';
const certificados = {
    srcImg: [
        `${urlImg}programacion-basica${extImg}`, 
        `${urlImg}marca-personal${extImg}`, 
        `${urlImg}html5-css3${extImg}`, 
        `${urlImg}responsive-design${extImg}`, 
        `${urlImg}git-github${extImg}`, 
        `${urlImg}css-grid-layout${extImg}`, 
        `${urlImg}animaciones-web${extImg}`,
        `${urlImg}postcss${extImg}`,
        `${urlImg}optimizacion-web${extImg}`,
        `${urlImg}fundamentos-javascript${extImg}`
    ],
    nameImg: [
        'programacion-basica',
        'marca-personal',
        'html5-css3',
        'responsive-design',
        'git-github',
        'css-grid-layout',
        'animaciones-web',
        'postcss',
        'optimizacion-web',
        'fundamentos-javascript'
    ],
    
}
// Skills Section
const skills = {
    titleSkill: [
        'Html', 
        'Css', 
        'Js'
    ],
    classSkill: [
        'html', 
        'css', 
        'js'
    ],
    levelSkill: [
        'Avanzado', 
        'Intermedio', 
        'Basico'
    ]
}

const preCargarImagenen = function (nombreDeVariable, src){
    var nombreDeVariable = new Image;
    nombreDeVariable.src = src;
    return nombreDeVariable
}

const preCargarImagenenes = function () {
    var array = new Array;
    for(var i = 0; i < certificados.srcImg.length; i++){
        array.push(preCargarImagenen(certificados.nameImg[i], certificados.srcImg[i]))
    }
    return array
}

const MenuScrollIn = function () {
    $Menu.style.position = 'fixed'
    $Menu.style.top = '0'
    $Menu.style.left = '0'
    $Menu.style.zIndex = '1'
}
const MenuScrollOut = function () {
    $Menu.style.position = 'initial'
    $Menu.style.top = 'initial'
    $Menu.style.left = 'initial'
    $Menu.style.zIndex = 'initial'
}

const templateCertificado = function (src) {
    return(
        `<div class="certificado">
            <img src=${src} alt="">
        </div>
        `
    )
}
const templateItemMenu = function (nameSection, idSection, fn) {
    return(
        `<li><a href=${idSection}>${nameSection}</a></li>
        `
    )
}
const templateSkill = function (title, level, className) {
    return(
        `<h4 class="title-skill">${title}</h4>
        <div class="skill ${className}">
            <h5>${level}</h5>
        </div>
        `
    )
}

const render = function (node, template) {
    node.innerHTML += template
}

const imprimirMenu = async function () {
    for(var i = 0; i < menu.nameMenu.length; i++){
        await render($MenuUl, templateItemMenu(menu.nameMenu[i], menu.idMenu[i]))
    }
}

const imprimirSkills = async function () {
    for(var i = 0; i < skills.titleSkill.length; i++){
        await render($SkillsC, templateSkill(skills.titleSkill[i], skills.levelSkill[i], skills.classSkill[i]))
    }
}

const imprimirCertificados = async function () {
    for(var i = 0; i < certificados.srcImg.length; i++){
        await render($CertificadosC, templateCertificado(certificados.srcImg[i]))
    }
}

function eliminarElemento(id){
	imagen = document.getElementById(id)
	if (!imagen){
		console.log("El elemento selecionado no existe")
	} else {
		padre = imagen.parentNode
		padre.removeChild(imagen)
	}
}

const scrollSmooth = function (element) {
    element.scrollIntoView({
        behavior: 'smooth'
    })
}

const inicializarPagina = function (){
    imprimirMenu()
    imprimirCertificados()
    imprimirSkills()
}

window.addEventListener('load', preCargarImagenenes)

window.onload = function (){
    if(window.scrollY > 1){
        window.scroll(1, 1)
    }
    $OnLoad.animate([
        { opacity: 1 },
        { opacity: 0.5 },
        { opacity: 0 },
    ], {
        duration: 500,
        fill: 'forwards'
    })
    if(window.onload){
        setTimeout(function(){
            eliminarElemento('onload')
            document.body.classList.remove('hidden')
        }, 500)
    }
}

inicializarPagina()


document.addEventListener('scroll', function (){
    if(window.scrollY > 1){
        MenuScrollIn()
    } else{
        MenuScrollOut()
    }
})