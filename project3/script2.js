window.addEventListener("mousemove", function (details){
    var rect = document.querySelector("#rect");
    var xval= gsap.utils.mapRange(
    0,
    window.innerWidth, //dynamic way to get max width
    150+rect.getBoundingClientRect().width/2,
    window.innerWidth-(150+rect.getBoundingClientRect().width/2),
    details.clientX
);
    gsap.to("#rect",{
        left: xval,
        ease: Power3,
    });
});