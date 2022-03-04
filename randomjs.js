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
let x = "";
const posters = [{
    heading: "Article thumbnail", text: `It is an article thumbnail titled as "Top 10 best batsmen of Mumbai Indians". It was created for Nettv4u.com, for one of the articles on their website. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`,
    filePath: "r0.jpg"
},

{
    heading: "Article thumbnail", text: `It is an article thumbnail titled as "How to remove waterproof eyeliner from clothes". It was created for Waterproofguide.com, for one of the articles on their website. This is created in <b style="color:gray">Canva</b>.`,
    filePath: "r1.jpg"
},

{
    heading: "Article thumbnail", text: `It is an article thumbnail titled as "How to make decoupage waterproof". It was created for Waterproofguide.com, for one of the articles on their website. This is created in <b style="color:gray">Canva</b>.`,
    filePath: "r2.jpg"
},

{
    heading: "Photo Template", text: `It is a simple and minimal template to showcase the captured photos by the photography club - Shutterbug, KGEC. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`,
    filePath: "r3.jpg"
},

{
    heading: "Infographic", text: `It is an infographic titled as "How to remove waterproof eyeliner from clothes". It was created for Waterproofguide.com, for one of the articles on their website. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`,
    filePath: "r4.jpg"
},

{
    heading: "Certificate", text: `It is a certificate template designed for KGEC E-Cell in order to congratulate the top 3 participants of every events in E-Summit 2021. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`,
    filePath: "r5.jpg"
},

{
    heading: "Chatbot", text: `It is the face of chatbot which was being developed by one of my friends. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`,
    filePath: "r6.png"
},

{
    heading: "Abstract", text: `The design idea was drawn by one of my friends and I turned it to digital collectibles. This is solely created in <b style="color:gray">Adobe Illustrator</b>.`,
    filePath: "r7.png"
}

];

function loader() {
    document.querySelector(".load").style.display = "none";
}

ScrollTrigger.matchMedia({

    "(min-width: 1008px)": function () {

        hb.addEventListener("click", () => {
            mnav.style.transform = "translateX(-0%)";
            hb.classList.remove("hb");
            access.style.display = "none";
            cross.style.display = "inline-block"
            body.style.overflowY = "hidden";
        })
        cross.addEventListener("click", () => {
            mnav.style.transform = "translateX(100%)";
            hb.classList.add("hb");
            cross.style.display = "none";
            access.style.display = "inline-block"
            body.style.overflowY = "scroll";
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

    "(min-width: 641px) and (max-width: 1007px)": function () {

        hb.addEventListener("click", () => {
            mnav.style.transform = "translateX(-0%)";
            hb.classList.remove("hb");
            access.style.display = "none";
            cross.style.display = "inline-block";
            body.style.overflowY = "hidden";
        })
        cross.addEventListener("click", () => {
            mnav.style.transform = "translateX(100%)";
            hb.classList.add("hb");
            cross.style.display = "none";
            access.style.display = "inline-block"
            body.style.overflowY = "scroll";
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

    "(min-width: 376px) and (max-width: 640px)": function () {
        hb.addEventListener("click", () => {
            mnav.style.transform = "translateX(-0%)";
            hb.classList.remove("hb");
            access.style.display = "none";
            cross.style.display = "inline-block";
            console.log(logo.style.fill);
            x = logo.style.fill;
            logo.style.fill = "white";
            body.style.overflowY = "hidden";
        })
        cross.addEventListener("click", () => {
            mnav.style.transform = "translateX(100%)";
            hb.classList.add("hb");
            cross.style.display = "none";
            access.style.display = "inline-block"
            logo.style.fill = x;
            body.style.overflowY = "scroll";
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


    "(max-width: 375px)": function () {
        hb.addEventListener("click", () => {
            mnav.style.transform = "translateX(-0%)";
            hb.classList.remove("hb");
            access.style.display = "none";
            cross.style.display = "inline-block";
            console.log(logo.style.fill);
            x = logo.style.fill;
            logo.style.fill = "white";
            body.style.overflowY = "hidden";
        })
        cross.addEventListener("click", () => {
            mnav.style.transform = "translateX(100%)";
            hb.classList.add("hb");
            cross.style.display = "none";
            access.style.display = "inline-block"
            logo.style.fill = x;
            body.style.overflowY = "scroll";
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
    hb.style.backgroundImage = "url('hb-gb.png')";
    document.querySelector("#logo").style.fill = "var(--gb)";
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
        mini.style.opacity = "0.7";
        sImg[index].style.border = "3px solid var(--gb)";
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
            if (sImg[i].style.border === "3px solid var(--gb)") {
                sImg[i].style.border = "none";
            }
        }
        mini.style.opacity = "0.7";
        sImg[index].style.border = "3px solid var(--gb)";
    })
})


// _________________________________NEXT 

next.addEventListener("click", () => {
    if (index > 7) {
        index = 0;
    } else {
        index += 1;
        if (index === 8) {
            index = 0;
        }
        console.log(index)
        pView.style.backgroundImage = "url('" + posters[index].filePath + "')";
        head.innerHTML = posters[index].heading;
        para.innerHTML = posters[index].text;
        for (let i = 0; i < sImg.length; i++) {
            if (sImg[i].style.border === "3px solid var(--gb)") {
                sImg[i].style.border = "none";
            }
        }
        sImg[index].style.border = "3px solid var(--gb)";
    }
})


// _________________________________BACK 

back.addEventListener("click", () => {
    if (index < 0) {
        index = 7;

    } else {
        index -= 1;
        if (index === -1) {
            index = 7;
        }
        console.log(index)
        pView.style.backgroundImage = "url('" + posters[index].filePath + "')";
        head.innerHTML = posters[index].heading;
        para.innerHTML = posters[index].text;
        for (let i = 0; i < sImg.length; i++) {
            if (sImg[i].style.border === "3px solid var(--gb)") {
                sImg[i].style.border = "none";
            }
        }
        sImg[index].style.border = "3px solid var(--gb)";

    }
})