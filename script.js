// gsap.to(".box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: 0.5,
//     repeat: 1,
//     yoyo: true
// })
// gsap.to(".box2", {
//     x: 1000,
//     duration: 2,
//     delay: 3
// })
// gsap.to(".box3", {
//     x: 1000,
//     duration: 2,
//     delay: 5
// })


// gsap.from("h1", {
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     stagger: 0.3

// })

var tl = gsap.timeline()

tl.to(".box1", {
    x: 1400,
    rotate: 360,
    duration: 1.5,
    delay: 1
})
tl.to(".box2", {
    x: 1400,
    rotate: 360,
    duration: 1.5,
})
