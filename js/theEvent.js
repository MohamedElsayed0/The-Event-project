let toggleIconSideNav = document.getElementById("toggleIconSideNav"),
    filterToSideNav = document.getElementById("filterToSideNav"),
    sidenav = document.getElementById("sidenav"),
    sidenaveItems = document.getElementsByClassName("sidenave-item"),
    videoBtn = document.getElementById("videoBtn"),
    iframe = document.getElementById("iframe"),
    navContainer = document.getElementById("navContainer"),
    arrowUp = document.getElementById("arrowUp"),
    navLink = document.getElementsByClassName("nav-lnk");
for (let i = 0; i < navLink.length; i++) {
    const element = navLink[i];
    element.addEventListener("click", () => {
        let current = document.getElementsByClassName("navigatactive");
        current[0].className = current[0].className.replace(" navigatactive", "");
        element.className += " navigatactive";
    })
}
// this Listener to open side nave
toggleIconSideNav.addEventListener("click", () => {
    filterToSideNav.style.display = 'block';
    sidenav.classList.add("active");
    toggleIconSideNav.style.visibility = "hidden";
})
// this Listener to close side nav
filterToSideNav.addEventListener("click", () => {
    toggleIconSideNav.style.visibility = "visible";
    filterToSideNav.style.display = 'none';
    sidenav.classList.remove("active");
    for (let i = 0; i < sidenaveItems.length; i++) {
        const element = sidenaveItems[i];
        element.addEventListener("click", () => {
            toggleIconSideNav.style.visibility = "visible";
            filterToSideNav.style.display = 'none';
            sidenav.classList.remove("active");
        })
    }
})
// this listener to open video 
videoBtn.addEventListener("click", () => {
    iframe.classList.add("videoFromToZero");
    // this listener to close video 
    iframe.addEventListener("click", () => {
        iframe.classList.remove("videoFromToZero");
    })
})

//this listener to show scroll to top button when (scrollY more than 100px) and add back ground to navbar
window.onscroll = function () {
    if (window.pageYOffset >= 100) {
        navContainer.classList.add("navBackground");
        arrowUp.classList.add("arrowTopShow");
    } else {
        navContainer.classList.remove("navBackground");
        arrowUp.classList.remove("arrowTopShow");
    }
}
//this listener when i click the button th page scroll to top
arrowUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
})
// to toggle buttos color and change the content when I click 
let scheduleBottons = document.getElementById("schedule-bottons");
let btn = scheduleBottons.getElementsByClassName('botton');
function toggleElement(wrabID) {
    let wrab = document.getElementsByClassName("wrab");
    for (let i = 0; i < wrab.length; i++) {
        wrab[i].style.display = 'none';
    }
    document.getElementById(wrabID).style.display = "flex";
}
document.getElementById("day-1").click();
for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    element.addEventListener("click", () => {
        let current = document.getElementsByClassName("scheduleActive");
        current[0].className = current[0].className.replace(" scheduleActive", "");
        element.className += " scheduleActive";
    })
}

//gallary
const row = document.querySelector('#slider');
      imge = row.querySelectorAll('img'),
      prev = document.getElementById("prev"),
      next = document.getElementById("next");
let counter = 5,
    size = 270 ,
    interval;

interval = setInterval(() => {
    next.click();
}, 3000)

row.style.transform = `translateX(${-size * counter + 'px'})`;
console.log( size  );
next.addEventListener("mouseover",()=>{
    clearInterval(interval);
})
next.addEventListener("click", () => {
    if (counter >= imge.length - 5) return;
    row.classList.add("transtion");
    counter++;
    row.style.transform = `translateX(${-size * counter + 'px'})`;
})
prev.addEventListener("click", () => {
    clearInterval(interval);
    if (counter <= 4) return;
    row.classList.add("transtion");
    counter--;
    row.style.transform = `translateX(${-size * counter + 'px'})`;
})
row.addEventListener('transitionend', () => {
    if (imge[counter].id === 'last') {
        row.classList.remove("transtion");
        counter = imge.length - 6;
        row.style.transform = `translateX(${-size * counter + 'px'})`;
    }
    if (imge[counter].id === 'frist') {
        row.classList.remove("transtion");
        counter = imge.length - counter;
        row.style.transform = `translateX(${-size * counter + 'px'})`;
    }
})
//accordion
let questionWraB = document.getElementsByClassName("questionWraB");
let question = document.getElementsByClassName("question");
for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        [].forEach.call(question, (item, index) => {
            item.nextElementSibling.classList.add("no");
            item.firstElementChild.style.color = "black";
            item.lastElementChild.firstElementChild.firstElementChild.className = 'fas fa-plus';
            item.lastElementChild.firstElementChild.style.backgroundColor = 'black';
        })
        if (this.nextElementSibling.classList.contains("no")) {
            this.firstElementChild.style.color = '#f82249';
            this.lastElementChild.firstElementChild.firstElementChild.className = 'fas fa-minus';
            this.lastElementChild.firstElementChild.style.backgroundColor = '#f82249';
            this.nextElementSibling.classList.remove("no");
            this.nextElementSibling.classList.add("yes");
        }
    })
}
// form
let form = document.forms.form;
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (this.username.value == '') {
        this.username.nextElementSibling.style.display = "block";
    } else {
        this.username.nextElementSibling.style.display = "none";
    }
    if (this.email.value == '') {
        this.email.nextElementSibling.style.display = "block";
    } else {
        this.email.nextElementSibling.style.display = "none";
    }
    if (this.subject.value == '') {
        this.subject.nextElementSibling.style.display = "block";
    } else {
        this.subject.nextElementSibling.style.display = "none";
    }
    if (this.textarea.value == '') {
        this.textarea.nextElementSibling.style.display = "block";
    } else {
        this.textarea.nextElementSibling.style.display = "none";

    }
})

//animation when scroll to evry element in page
var elementsToShow = document.querySelectorAll('.show-on-scroll');
window.addEventListener("scroll",function(){
    [].forEach.call(elementsToShow, function(element){
        if(element.getBoundingClientRect().y <= document.documentElement.clientHeight){
         element.classList.add("scrollAnimat");
        }
      });
})
window.addEventListener("load",function(){
    [].forEach.call(elementsToShow, function(element){
        if(element.getBoundingClientRect().y <= document.documentElement.clientHeight){
         element.classList.add("scrollAnimat");
        }
      });
})
