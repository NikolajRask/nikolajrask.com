
const navigationToggleBtn : any = document.getElementById('navigation-button') 
const navigation : any = document.getElementById('navigation')

const navigationBtns : any = {
    about: document.getElementById('navigateAbout'),
    projects: document.getElementById('navigateProjects'),
    socials: document.getElementById('navigateSocials'), 
    work: document.getElementById('navigateWork') 
}

navigationToggleBtn.onclick = toggleNavigation

let navigationSwitch : boolean = false;

function toggleNavigation() : void {
    if (!navigationSwitch) { 
        navigation.style.left = "0vw"
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
    switchPage("/about")
}) 

navigationBtns.projects.addEventListener("click", () => {
    switchPage("/projects")
}) 

navigationBtns.socials.addEventListener("click", () => {
    switchPage("/socials")
}) 

navigationBtns.work.addEventListener("click", () => {
    switchPage("/work")
}) 

function switchPage(page : any = null) : void {
    const pageSwitcher : any =  document.querySelector(".pageSwitcher")
    
    pageSwitcher.style.top = "0px"
    if (page != null) {
        window.setTimeout(() => {
            window.parent.postMessage({ url: page }, '*');
        },1000)
    }
}