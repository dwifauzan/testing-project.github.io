const switchmode = () => {
    //memanggil dan mengumpulkan value
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme')
    let newtheme

    //action
    newtheme = (dataTheme === 'light') ? 'dark' : 'light'

    //set attribut baru
    rootElem.setAttribute('data-theme', newtheme)
}

let changeicon = function (icon) {
    icon.classList.toggle('fa-moon')
}

document.querySelector('.theme-switcher').addEventListener('click', switchmode)
document.querySelector('.theme-switcher2').addEventListener('click', switchmode)