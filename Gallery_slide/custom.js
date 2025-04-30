// let scrollContainer = document.querySelector(".gallery");
// let backBtn = document.getElementById("backBtn");
// let nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault(); 
//     scrollContainer.scrollLeft += evt.deltaY;
//     scrollContainer.style.scrollBehavior = "auto";

// })

// backBtn.addEventListener("click", () =>{
//     scrollContainer.style.scrollBehavior = "smooth";
//      scrollContainer.scrollLeft += 900;
// });

// nextBtn.addEventListener("click", () =>{
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft -= 900;
// });

// function autoScroll() {
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft += 1;

//     // Loop back to start when scroll reaches end
//     if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
//         scrollContainer.scrollLeft = 0;
//     }
// }

// // Start autoplay (every 20ms)
// let scrollInterval = setInterval(autoScroll, 20);




let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Get width of one image/card
function getCardWidth() {
    let card = scrollContainer.querySelector("img") || scrollContainer.children[0];
    return card ? card.offsetWidth : 300; // Fallback width
}

// Scroll one card to right
function scrollNext() {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += getCardWidth();

    // Loop if at end
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
    }
}

// Scroll one card to left
function scrollBack() {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= getCardWidth();

    // Optional: loop to end if at start
    if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
}

// Add wheel scroll (manual)
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault(); 
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

// Button events
nextBtn.addEventListener("click", scrollNext);
backBtn.addEventListener("click", scrollBack);

// ✅ Autoplay one card at a time every 3s
setInterval(scrollNext, 3000);
