const navbar = document.querySelector('.navbar') as HTMLElement || null

if (navbar != null) {
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 200) {
            navbar.style.display = "block"
        } else {
            navbar.style.display = "none" 
        }
    })       
} else {
    console.error("Navbar did not load correctly")
}