var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var image = document.querySelector(".image");
main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,

        ease: "back-out"
    })

})
image.addEventListener("mouseenter", function () {
    gsap.to(cursor, {

        scale: 5,
        backgroundColor: "aquamarine",

    })

})
image.addEventListener("mouseleave", function () {
    gsap.to(cursor, {

        scale: 1,
        backgroundColor: "white"
    })
})