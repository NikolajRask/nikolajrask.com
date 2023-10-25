
const navigationToggleBtn : any = document.getElementById('navigation-button') 
const navigation : any = document.getElementById('navigation')

const navigationBtns : any = {
    about: document.getElementById('navigateAbout') 
}

navigationToggleBtn.onclick = toggleNavigation

let navigationSwitch : boolean = false;

function toggleNavigation() : void {
    if (!navigationSwitch) { 
        navigation.style.left = "0px"
        navigationToggleBtn.style.color = "black"
        navigationSwitch = !navigationSwitch
        return
    }

    if (navigationSwitch) {
        navigation.style.left = "100vw"
        navigationToggleBtn.style.color = "white"
        navigationSwitch = !navigationSwitch
        return
    }
}

navigationBtns.about.addEventListener("click", () => {
    window.location.href = "/projects"
    switchPage()
}) 

function switchPage(page : any = null) : void {
    const pageSwitcher : any =  document.querySelector(".pageSwitcher")

    pageSwitcher.style.top = "0px"
}