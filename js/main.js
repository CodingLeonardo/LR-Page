let exitMenuBurger = true
// Element Containers
const $MenuC = document.querySelector('#menu')
const $MenuUl = document.querySelector('.menu ul')
const $CertificadosC = document.querySelector('.container-certificados')
const $SkillsC = document.querySelector('.container-skills')

// Element OnLoad
const $OnLoad = document.querySelector('#onload')

// Element Open
const $Open = document.querySelector('#open')

// Element Barrier
const $Barrier = document.querySelector('#barrier')

// Elemet Sections
const $Menu = document.querySelector('header')
const $AboutMe = document.querySelector('#about-me')
const $Certificados = document.querySelector('#certificados')
const $Skills = document.querySelector('#skills')
const $Contact = document.querySelector('#contact')

// Menu Section
const menu = {
    nameSection: [
        'Sobre mi', 
        'Certificados', 
        'Habilidades', 
        'Contacto'
    ],
    idSection: [
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
// Templates
const templateCertificado = function (src) {
    return(
        `<div class="certificado">
            <img src=${src} alt="">
        </div>
        `
    )
}
const templateItemMenu = function (nameSection, idSection) {
    return(
        `<li><a onclick="scrollSmooth('${idSection}')">${nameSection}</a></li>
        `
    )
}
const templateSkill = function (title, level, className) {
    return(
        `
        <div>
            <h4 class="title-skill">${title}</h4>
            <div class="skill ${className}">
                <h5>${level}</h5>
            </div>
        </div>
        `
    )
}
// Render Templates
const imprimirMenu = async function () {
    for(var i = 0; i < menu.nameSection.length; i++){
        // await render($MenuUl, templateItemMenu(menu.nameMenu[i], menu.idMenu[i]))
        await renderTemplate($MenuUl, templateItemMenu(menu.nameSection[i], menu.idSection[i]))
    }
}

const imprimirSkills = async function () {
    for(var i = 0; i < skills.titleSkill.length; i++){
        // await render($SkillsC, templateSkill(skills.titleSkill[i], skills.levelSkill[i], skills.classSkill[i]))
        await renderTemplate($SkillsC, templateSkill(skills.titleSkill[i], skills.levelSkill[i], skills.classSkill[i]))
    }
}

const imprimirCertificados = async function () {
    for(var i = 0; i < certificados.srcImg.length; i++){
        // await render($CertificadosC, templateCertificado(certificados.srcImg[i]))
        await renderTemplate($CertificadosC, templateCertificado(certificados.srcImg[i]))
    }
}
// Eliminar Elemento Function
function eliminarElemento(id){
	let imagen = document.getElementById(id)
	if (!imagen){
		console.log("El elemento selecionado no existe")
	} else {
		let padre = imagen.parentNode
		padre.removeChild(imagen)
	}
}
// Create Template Function
const createTemplate = function(HTMLString){
    const html = document.implementation.createHTMLDocument()
    html.body.innerHTML = HTMLString
    return html.body.children[0]
}
// Render Template Function
const renderTemplate = function($container, template){
    const HTMLString = template
    const element = createTemplate(HTMLString)
    $container.append(element)
}
// Barrier Scroll Function
const barrierScroll = function(){
    let scrollB = document.documentElement.scrollTop
    let heightB = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = (scrollB / heightB) * 100
    $Barrier.style.willChange = 'width'
    $Barrier.style.width = scrolled + '%'
}
// Apertura Menu Burger
const AperturaMenuBurger = function(){
    if(exitMenuBurger){
        $MenuC.style.width = '70vw'
        exitMenuBurger = false
    } else{
        $MenuC.style.width = '0%'
        $MenuC.style.overflow = 'hidden'
        exitMenuBurger = true
    }
}
// Scroll Smooth Function
const scrollSmooth = function (idSection) {
    let element = document.querySelector(idSection)
    element.scrollIntoView({
        behavior: 'smooth'
    })
}
const scrollPreloader = function(){
    if(document.documentElement.scrollTop > 1){
        document.documentElement.scroll(0,0)
    }
}
// Inicializar Pagina Function
const inicializarPagina = function (){
    imprimirMenu()
    imprimirCertificados()
    imprimirSkills()
}
// Pre Loader Page Function
const preloaderPage = function(){
    document.addEventListener('scroll', scrollPreloader, false)
    $OnLoad.animate([
        { opacity: 1 },
        { opacity: 0.5 },
        { opacity: 0 }
    ],{
        duration: 500,
        fill: 'forwards'
    })
    setTimeout(function(){
        document.removeEventListener('scroll', scrollPreloader, false)
        eliminarElemento('onload')
        document.body.classList.remove('hidden')
        $Menu.style.position = 'fixed'
        inicializarPagina()
    }, 500)
}
// add Event Listener Open Menu Burger
$Open.addEventListener('click', AperturaMenuBurger)
// Preloader Window
window.onload = preloaderPage
// Barrier Scroll Window
window.onscroll = barrierScroll

