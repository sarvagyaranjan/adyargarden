const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})



const hamburger = document.querySelector(".hamburger")
const navlinks = document.querySelector(".second_nav")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navlinks.classList.toggle("active")
})