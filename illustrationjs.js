gsap.registerPlugin(ScrollTrigger);
let access = document.querySelector("#access");
let body = document.querySelector("body");
let hb = document.querySelector(".hb");
let cross = document.querySelector("#crs");
let mnav = document.querySelector("#mobile-nav");
let logo = document.querySelector("#logo");
let mini = document.querySelector(".mini");
let wrapper = document.querySelector(".d-wrapper");
let times = document.querySelector(".d-cross");
let miniImg = document.querySelectorAll(".mini-img");
let sImg = document.querySelectorAll(".img");
let pView = document.querySelector(".poster-view");
let head = document.querySelector(".head");
let para = document.querySelector("#d-para");
let next = document.querySelector(".arrow-right");
let back = document.querySelector(".arrow-left");
let index = 0;
let x="";
const posters = [{ heading: "Vincent VanGogh", text: `An artist who never got back his due. He was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history. In a decade, he created about 2,100 artworks, most of which date from the last two years of his life. This is created in <b style="color:gray">Adobe Illustrator</b> and <b style="color:gray">Adobe Photoshop</b>`, 
filePath: "i0.jpg" },
    { heading: "Life in a Dream", 
    text: `This is an illustration of one of my clients. He gave all the description that what he wanted and I turned his words in this illustration. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "i1.jpg" },

    { heading: "Brothers", text: `
    Three brothers from different mothers. They are in the world of imagination where they can always be together without the fear of loosing any further bonds. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "i2.jpg" },

    { heading: "Cute Couple", text
    : `Two childhood friends who share the bond of love and wishes to be together beyond the regular life. A sunset scene, vibing with the birds. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "i3.jpg" },

    { heading: "Eye Contact", text
    : `Probably the most romantic thing in a relationship. Gazing each others for hours in the soothing and tranquil environment by the river. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "i4.jpg" },

    { heading: "Loneliness", text:
     `Loneliness is an unpleasant emotional response to perceived isolation. Loneliness is also described as social pain—a psychological mechanism which motivates individuals to seek social connections. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "i5.jpg" }

];

function loader() {
    document.querySelector(".load").style.display = "none";
}

ScrollTrigger.matchMedia({

    "(min-width: 1008px)": function() {

        hb.addEventListener("click", () => {
            mnav.style.transform = "translateX(-0%)";
            hb.classList.remove("hb");
            access.style.display = "none";
            cross.style.display = "inline-block"
            body.style.overflowY="hidden";
        })
        cross.addEventListener("click", () => {
                mnav.style.transform = "translateX(100%)";
                hb.classList.add("hb");
                cross.style.display = "none";
                access.style.display = "inline-block"
                body.style.overflowY="scroll";
            })
            // ____________________________Navbar color Change 
        gsap.to("#navbar", {
            scrollTrigger: {
                trigger: ".poster",
                start: "bottom center",
                endTrigger: "footer",
                end: "bottom top",
                toggleActions: "play none none reset",
                // markers: true,
                onLeave: greenToYellow,
                onEnter: yellowToGreen,
                onEnterBack: yellowToGreen,
                onLeaveBack: greenToYellow,
            },

        })

        gsap.to(".display", {
            scrollTrigger: {
                trigger: ".display",
                start: "top bottom",
                end: "bottom bottom",
                // snap: 2 / 2,
                // markers:true,
            },
        })

        // _____________________________miniImage fade In 
        for (let i = 0; i < 8; i++) {
            let current = miniImg[i];
            gsap.to(current, {
                scrollTrigger: {
                    trigger: ".mini",
                    start: "top center",
                    end: "top top",
                    toggleActions: "play none none reset",
                    // markers:true,
                },
                duration: 0.6,
                x: 1,
                opacity: 1,
            })

        }
        gsap.to("footer", {
            scrollTrigger: {
                trigger: ".poster",
                start: "120% bottom",
                endTrigger: "footer",
                end: "bottom bottom",
                // snap: 1 / 2,
                // markers:true,
            }
        })

    },


    // _________________________________________TAB

    "(min-width: 641px) and (max-width: 1007px)": function() {

        hb.addEventListener("click", () => {
            mnav.style.transform = "translateX(-0%)";
            hb.classList.remove("hb");
            access.style.display = "none";
            cross.style.display = "inline-block";
            body.style.overflowY="hidden";
        })
        cross.addEventListener("click", () => {
            mnav.style.transform = "translateX(100%)";
            hb.classList.add("hb");
            cross.style.display = "none";
            access.style.display = "inline-block"
            body.style.overflowY="scroll";
        })

        let homeIcon = document.querySelector("#homeIcon");
        homeIcon.innerHTML = `<img src="https://img.icons8.com/ios-filled/25/FFFFFF/home.png" />`

        // ____________________________Navbar color Change 
        gsap.to("#navbar", {
            scrollTrigger: {
                trigger: ".poster",
                start: "bottom 60%",
                endTrigger: "footer",
                end: "bottom top",
                toggleActions: "play none none reset",
                // markers: true,
                onLeave: greenToYellow,
                onEnter: yellowToGreen,
                onEnterBack: yellowToGreen,
                onLeaveBack: greenToYellow,
            },

        })

        // _____________________________miniImage fade In 
        gsap.to(".mini-img", {
            scrollTrigger: {
                trigger: ".mini",
                start: "top 40%",
                end: "top top",
                toggleActions: "play none none reset",
                // markers:true,
            },
            duration: 0.2,
            x: 1,
            opacity: 1,
        })
        gsap.to(".display", {
            scrollTrigger: {
                trigger: ".display",
                start: "top bottom",
                end: "bottom bottom",
                snap: 2 / 2,
                // markers:true,
            },
        })
        gsap.to("footer", {
            scrollTrigger: {
                trigger: ".poster",
                start: "120% bottom",
                endTrigger: "footer",
                end: "bottom bottom",
                // snap:1/2,
                // markers:true,
            }
        })
    },
    // __________________________________________MOBILE_LARGE

    "(min-width: 376px) and (max-width: 640px)": function() {
        hb.addEventListener("click", () => {
            mnav.style.transform = "translateX(-0%)";
            hb.classList.remove("hb");
            access.style.display = "none";
            cross.style.display = "inline-block";
            console.log(logo.style.fill);
            x=logo.style.fill;
            logo.style.fill="white";
            body.style.overflowY="hidden";
        })
        cross.addEventListener("click", () => {
            mnav.style.transform = "translateX(100%)";
            hb.classList.add("hb");
            cross.style.display = "none";
            access.style.display = "inline-block"
            logo.style.fill=x;
            body.style.overflowY="scroll";
        })

        let homeIcon = document.querySelector("#homeIcon");
        homeIcon.innerHTML = `<img src="https://img.icons8.com/ios-filled/25/FFFFFF/home.png" />`

        // ____________________________Navbar color Change 
        gsap.to("#navbar", {
            scrollTrigger: {
                trigger: ".poster",
                start: "bottom 60%",
                endTrigger: "footer",
                end: "bottom top",
                toggleActions: "play none none reset",
                // markers: true,
                onLeave: greenToYellow,
                onEnter: yellowToGreen,
                onEnterBack: yellowToGreen,
                onLeaveBack: greenToYellow,
            },

        })

        // _____________________________miniImage fade In 
        gsap.to(".mini-img", {
            scrollTrigger: {
                trigger: ".mini",
                start: "top 40%",
                end: "top top",
                toggleActions: "play none none reset",
                // markers:true,
            },
            duration: 0.2,
            x: 1,
            opacity: 1,
        })
    },
    // ___________________________________________MOBILE_SMALL


    "(max-width: 375px)": function() {
        hb.addEventListener("click", () => {
            mnav.style.transform = "translateX(-0%)";
            hb.classList.remove("hb");
            access.style.display = "none";
            cross.style.display = "inline-block";
            console.log(logo.style.fill);
            x=logo.style.fill;
            logo.style.fill="white";
            body.style.overflowY="hidden";
        })
        cross.addEventListener("click", () => {
            mnav.style.transform = "translateX(100%)";
            hb.classList.add("hb");
            cross.style.display = "none";
            access.style.display = "inline-block"
            logo.style.fill=x;
            body.style.overflowY="scroll";
        })

        let homeIcon = document.querySelector("#homeIcon");
        homeIcon.innerHTML = `<img src="https://img.icons8.com/ios-filled/25/FFFFFF/home.png" />`

        // ____________________________Navbar color Change 
        gsap.to("#navbar", {
            scrollTrigger: {
                trigger: ".poster",
                start: "bottom 60%",
                endTrigger: "footer",
                end: "bottom top",
                toggleActions: "play none none reset",
                // markers: true,
                onLeave: greenToYellow,
                onEnter: yellowToGreen,
                onEnterBack: yellowToGreen,
                onLeaveBack: greenToYellow,
            },

        })

        // _____________________________miniImage fade In 
        gsap.to(".mini-img", {
            scrollTrigger: {
                trigger: ".mini",
                start: "top 40%",
                end: "top top",
                toggleActions: "play none none reset",
                // markers:true,
            },
            duration: 0.2,
            x: 1,
            opacity: 1,
        })



    },

})







function yellowToGreen() {
    hb.style.backgroundImage = "url('hb-lblue.png')";
    document.querySelector("#logo").style.fill = "var(--lblue)";
}

function greenToYellow() {
    hb.style.backgroundImage = "url('hb-white.png')";
    document.querySelector("#logo").style.fill = "white";
}







times.addEventListener("click", () => {
    wrapper.style.transform = "translateX(-100%)";
    mini.style.opacity = "1";
    sImg[index].style.border = "none";
})







for (let i = 0; i < posters.length; i++) {
    miniImg[i].style.backgroundImage = "url('" + posters[i].filePath + "')";
    sImg[i].style.backgroundImage = "url('" + posters[i].filePath + "')";
}

// __________________________Click to enlarge



miniImg.forEach((element) => {
    element.addEventListener("click", (e) => {
        wrapper.style.transform = "translateX(0%)";
        index = parseInt(e.target.id.charAt(9));
        pView.style.backgroundImage = "url('" + posters[index].filePath + "')";
        head.innerHTML = posters[index].heading;
        para.innerHTML = posters[index].text;
        mini.style.opacity="0.7";
        sImg[index].style.border = "3px solid var(--lblue)";
    })
})
sImg.forEach((element) => {
    element.addEventListener("click", (e) => {
        index = parseInt(e.target.id.charAt(4));
        console.log(index);
        pView.style.backgroundImage = "url('" + posters[index].filePath + "')";
        head.innerHTML = posters[index].heading;
        para.innerHTML = posters[index].text;
        for (let i = 0; i < sImg.length; i++) {
            if (sImg[i].style.border === "3px solid var(--lblue)") {
                sImg[i].style.border = "none";
            }
        }
        mini.style.opacity="0.7";
        sImg[index].style.border = "3px solid var(--lblue)";
    })
})


// _________________________________NEXT 

next.addEventListener("click", () => {
    if (index > 5) {
        index = 0;
    } else {
        index += 1;
        if (index === 6) {
            index = 0;
        }
        console.log(index)
        pView.style.backgroundImage = "url('" + posters[index].filePath + "')";
        head.innerHTML = posters[index].heading;
        para.innerHTML = posters[index].text;
        for (let i = 0; i < sImg.length; i++) {
            if (sImg[i].style.border === "3px solid var(--lblue)") {
                sImg[i].style.border = "none";
            }
        }
        sImg[index].style.border = "3px solid var(--lblue)";
    }
})


// _________________________________BACK 

back.addEventListener("click", () => {
    if (index < 0) {
        index = 5;

    } else {
        index -= 1;
        if (index === -1) {
            index = 5;
        }
        console.log(index)
        pView.style.backgroundImage = "url('" + posters[index].filePath + "')";
        head.innerHTML = posters[index].heading;
        para.innerHTML = posters[index].text;
        for (let i = 0; i < sImg.length; i++) {
            if (sImg[i].style.border === "3px solid var(--lblue)") {
                sImg[i].style.border = "none";
            }
        }
        sImg[index].style.border = "3px solid var(--lblue)";

    }
})