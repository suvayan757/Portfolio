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
const posters = [{ heading: "ROBOTICS", text: `Introduction to robotics - A live session oraganised by KGEC Robotics Society.
This is a fresher's orientation programme and solely focused on inculcating the value of automation in the near future.
This poster is totally designed in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "p0.jpg" },
    
    { heading: "Egnition 2022", text: `Egnition is the fresher's orientation programme organised by KGEC Entrepreneurshp Cell.This event focuses on to inculcate the values of entrepreneurship.This poster is totally designed in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "p1.jpg" },
    
    { heading: "Raksha Bandhan", text: `On this day, sisters of all ages tie a talisman, or amulet, called the Rakhi, around the wrists of their brothers, symbolically protecting them, receiving a gift in return, and traditionally investing the brothers with a share of the responsibility of their potential care. This poster is totally designed in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "p2.jpg" },
    
    { heading: "Doctor's Day", text: `National Doctors' Day is a day celebrated to recognize the contributions of physicians to individual lives and communities. The date varies from nation to nation depending on the event of commemoration used to mark the day. This poster is totally designed in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "p3.jpg" },
    
    { heading: "Independence Day", text: `An independence day is an annual event commemorating the anniversary of a nation's independence or statehood, usually after ceasing to be a group or part of another nation or state, or more rarely after the end of a military occupation. This poster is totally designed in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "p4.jpg" },
    
    { heading: "Business Quote", text: `This is said by Andy Grove. One learns from his/her mistakes so, the fast you make mistake the fast you learn and always be ahead of your peers. This poster is totally designed in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "p5.jpg" },
    
    { heading: "Cipher", text: `Cipher is a business crossword puzzle competition organised by KGEC Entrepreneurship Cell as a sub event in E-Summit 2021. This poster is totally designed in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "p6.jpg" },
    
    { heading: "Photgraphy Club", text: `Shutterbug is the photography club of Kalyani Government Engineering College. They focus on Photography, Videography and visual arts. This poster is totally designed in <b style="color:gray">Adobe Illustrator</b>.`, 
    filePath: "p7.jpg" }
    
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
            logo.style.fill="var(--lyellow)";
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
            logo.style.fill="var(--lyellow)";
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
    hb.style.backgroundImage = "url('hb-lgreen.png')";
    document.querySelector("#logo").style.fill = "var(--lgreen)";
}

function greenToYellow() {
    hb.style.backgroundImage = "url('hb-lyellow.png')";
    document.querySelector("#logo").style.fill = "var(--lyellow)";
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
        sImg[index].style.border = "3px solid var(--lgreen)";
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
            if (sImg[i].style.border === "3px solid var(--lgreen)") {
                sImg[i].style.border = "none";
            }
        }
        mini.style.opacity="0.7";
        sImg[index].style.border = "3px solid var(--lgreen)";
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
            if (sImg[i].style.border === "3px solid var(--lgreen)") {
                sImg[i].style.border = "none";
            }
        }
        sImg[index].style.border = "3px solid var(--lgreen)";
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
            if (sImg[i].style.border === "3px solid var(--lgreen)") {
                sImg[i].style.border = "none";
            }
        }
        sImg[index].style.border = "3px solid var(--lgreen)";

    }
})