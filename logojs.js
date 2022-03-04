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
const posters = [{ heading: "REVIVE", text: `Revive - new roads in old style. It is a logo for thrift store who deals in reused bicycles. This is solely created in <b style="color:var(--black)">Adobe Illustrator</b>.`, 
filePath: "l0.jpg" },
    { heading: "Rise", 
    text: `Rise stands tall among the real estate brands. This is solely created in <b style="color:var(--black)">Adobe Illustrator</b>.`, 
    filePath: "l1.jpg" },

    { heading: "ONORC", text: `
    ONORC stands for One Nation One Ration Card. If you look closely, you can observe all the initials in the logo. This is solely created in <b style="color:var(--black)">Adobe Illustrator</b>.`, 
    filePath: "l2.jpg" },

    { heading: "Sax - Memes", text
    : `Sax - Memes is a social media memes page who consistently entertain people by their humourous content. This is solely created in <b style="color:var(--black)">Adobe Illustrator</b>.`, 
    filePath: "l3.jpg" },

    { heading: "thinQR", text
    : `thinQR is one of my startups in the development stage.
    It is based on QR based networks across the city. This is solely created in <b style="color:var(--black)">Adobe Illustrator</b>.`, 
    filePath: "l4.jpg" },

    { heading: "SH", text:
     `SH stands for Suvayan Halder. It is one of the early stage logos that was used by me. This is solely created in <b style="color:var(--black)">Adobe Illustrator</b>.`, 
    filePath: "l5.jpg" }

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
        homeIcon.innerHTML = `<img src="https://img.icons8.com/ios-filled/25/F9F871/home.png" />`

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
            logo.style.fill="var(--lgreen)";
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
        homeIcon.innerHTML = `<img src="https://img.icons8.com/ios-filled/25/F9F871/home.png" />`

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
            logo.style.fill="var(--lgreen)";
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
        homeIcon.innerHTML = `<img src="https://img.icons8.com/ios-filled/25/F9F871/home.png" />`

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
    hb.style.backgroundImage = "url('hb-orange.png')";
    document.querySelector("#logo").style.fill = "var(--lyellow)";
}

function greenToYellow() {
    hb.style.backgroundImage = "url('hb-lyellow.png')";
    document.querySelector("#logo").style.fill = "var(--lgreen)";
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
        sImg[index].style.border = "3px solid var(--lyellow)";
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
            if (sImg[i].style.border === "3px solid var(--lyellow)") {
                sImg[i].style.border = "none";
            }
        }
        mini.style.opacity="0.7";
        sImg[index].style.border = "3px solid var(--lyellow)";
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
            if (sImg[i].style.border === "3px solid var(--lyellow)") {
                sImg[i].style.border = "none";
            }
        }
        sImg[index].style.border = "3px solid var(--lyellow)";
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
            if (sImg[i].style.border === "3px solid var(--lyellow)") {
                sImg[i].style.border = "none";
            }
        }
        sImg[index].style.border = "3px solid var(--lyellow)";

    }
})