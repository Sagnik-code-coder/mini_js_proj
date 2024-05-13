var rect = document.querySelector("#center"); 

rect.addEventListener("mousemove", function(details) {
    var rectloc = rect.getBoundingClientRect();
    var inside = details.clientX - rectloc.left;

    if (inside < rectloc.width / 2) {
        var redcolor = gsap.utils.mapRange(0, rectloc.width / 2, 255, 0, inside);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: "power4.inOut"
        });
    } else {
        var bluecolor = gsap.utils.mapRange(rectloc.width / 2, rectloc.width, 0, 255, inside);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: "power4.inOut"
        });
    }
});
