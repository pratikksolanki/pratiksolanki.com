
let prevPos = window.pageYOffset;
const tabButtons = Array.from(document.getElementsByClassName('tab-btn'));
let currentTab = tabButtons[0];
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li");
const tabHighlight = document.getElementById('tab-btn-highlight');

window.onscroll = function() {
    let curPos = window.pageYOffset;
    // console.log("current: " + curPos);
    // console.log("prev: " + prevPos);
    // console.log(" ");

    if ((curPos > prevPos) && (curPos > 700)) {
      document.getElementById("nav").style.top = "-100px";
    } else {
      document.getElementById("nav").style.top = "0";
    }
    prevPos = curPos;
  }

const activeToggle = (item) => {
    currentTab.classList.remove('tab-btn-highlight');
    currentTab = item;
    item.classList.add('tab-btn-highlight');
}

tabButtons.forEach(item => {  
    item.addEventListener('click', () => activeToggle(item));
});

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight/3)){
            current = section.getAttribute('id');
        }
    })

    navLinks.forEach( li => {
        li.classList.remove('tab-btn-highlight');
        if (li.classList.contains(current)){
            li.classList.add('tab-btn-highlight')
        }
    })
})



