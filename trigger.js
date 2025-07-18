// gsap.from(".page1 .box", {
//     scale: 0,
//     duration: 2,
//     delay: 1
// })


// // gsap.from(".page2 .box", {
// //     scale: 0,
// //     duration: 2,
// //     delay: 1,
// //     scrollTrigger: {
// //         trigger: ".page2 .box",
// //         scroll: "body",
// //         marker: true,
// //         start: "top 60%"
// //     }
// // })

// gsap.from(".page2 h1", {
//     opacity: 0,
//     durarion: 2,
//     rotate: 360,
//     x: 500,
//     scrollTrigger: {
//         trigger: ".page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//         end: "top 10%",
//         scrub: 2,
//     }
// })



// gsap.from(".page3 .box", {
//     scale: 0,
//     duration: 2,
//     delay: 1
// })


gsap.to(".page2 h2", {
    transform: "translateX(-165%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})