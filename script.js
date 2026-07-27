/* ==========================================
   SIMPLYTORE CROCHET
   MAIN JAVASCRIPT
========================================== */

// ------------------------------
// Sticky Header
// ------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ------------------------------
// Mobile Navigation
// ------------------------------

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

    menuToggle.addEventListener("click", ()=>{

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}

// ------------------------------
// Fade In Animation
// ------------------------------

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ------------------------------
// Back To Top Button
// ------------------------------

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "backToTop";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("visible");

    }else{

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ------------------------------
// Simple Review Slider
// ------------------------------

const reviews=[

{
name:"Emily",
text:"Absolutely adorable! The plushie was even cuter in person."
},

{
name:"Sarah",
text:"Amazing quality and so soft. My daughter absolutely loves it!"
},

{
name:"Jessica",
text:"The crochet class was so easy to follow. Highly recommend!"
}

];

const slider=document.querySelector(".review-slider");

if(slider){

let index=0;

function updateReview(){

slider.innerHTML=

`
<h3>${reviews[index].name}</h3>

<p>"${reviews[index].text}"</p>

★★★★★
`;

}

updateReview();

setInterval(()=>{

index++;

if(index>=reviews.length){

index=0;

}

updateReview();

},5000);

}

// ------------------------------
// Button Click Animation
// ------------------------------

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",()=>{

button.classList.add("clicked");

setTimeout(()=>{

button.classList.remove("clicked");

},300);

});

});

// ------------------------------
// Category Hover Glow
// ------------------------------

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// ------------------------------
// Footer Year
// ------------------------------

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML = `© ${year} SimplyToré Crochet`;

}