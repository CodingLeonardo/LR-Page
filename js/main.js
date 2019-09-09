const $Menu = document.querySelector('header')
const $MenuUl = document.querySelector('.menu ul')
const $CertificadosC = document.querySelector('.container-certificados')
const $SkillsC = document.querySelector('.container-skills')


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
    ]

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

const MenuScrollIn = function () {
    $Menu.style.position = 'fixed'
    $Menu.style.top = '0'
    $Menu.style.left = '0'
    $Menu.style.zIndex = '99'
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

inicializarPagina()

document.addEventListener('scroll', function (){
    if(window.scrollY > 1){
        MenuScrollIn()
    } else{
        MenuScrollOut()
    }
})
