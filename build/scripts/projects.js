
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        projects.forEach(p => {
            p.style.filter = "blur(4px)"
        })
        project.style.filter = "blur(0px)"
    })
    project.addEventListener('mouseout', () => {
        projects.forEach(p => {
            p.style.filter = "blur(0px)"
        })
    })
})