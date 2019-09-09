const $Menu = document.querySelector('header')
const $MenuUl = document.querySelector('.menu ul')
const $Certificados = document.querySelector('.container-certificados')
const $Skills = document.querySelector('.container-skills')

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
    ]
    
}
// Certificados Section
const urlImg = 'img/diploma-';
const certificados = {
    srcImg: [
        `${urlImg}programacion-basica.jpg`, 
        `${urlImg}marca-personal.jpg`, 
        `${urlImg}html5-css3.jpg`, 
        `${urlImg}git-github-2017.jpg`, 
        `${urlImg}css-grid-layoud.jpg`, 
        `${urlImg}animaciones-web.jpg`
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
const templateItemMenu = function (nameSection, idSection) {
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

const imprimirMenu = function () {
    for(var i = 0; i < menu.nameMenu.length; i++){
        render($MenuUl, templateItemMenu(menu.nameMenu[i], menu.idMenu[i]))
    }
}

const imprimirSkills = function () {
    for(var i = 0; i < skills.titleSkill.length; i++){
        render($Skills, templateSkill(skills.titleSkill[i], skills.levelSkill[i], skills.classSkill[i]))
    }
}

const imprimirCertificados = function () {
    for(var i = 0; i < certificados.srcImg.length; i++){
        render($Certificados, templateCertificado(certificados.srcImg[i]))
    }
}

const inicializarPagina = function (){
    imprimirCertificados()
    imprimirSkills()
    imprimirMenu()
}

inicializarPagina()

document.addEventListener('scroll', function (){
    if(window.scrollY > 1){
        MenuScrollIn()
    } else{
        MenuScrollOut()
    }
})
