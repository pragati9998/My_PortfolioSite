gsap.registerPlugin(ScrollTrigger);

gsap.from("#about", {
    scrollTrigger: {
        trigger: "#about", // The element to trigger the animation
        start: "top 80%",  // Animation starts when the top of the element is 80% down the viewport
        end: "top 20%",    // Animation ends when the top of the element is 20% down the viewport
        scrub: true,       // Smoothly scrubs the animation in sync with the scroll
    },
    opacity: 0,           // Start with opacity 0
    y: 50,                // Start 50px down
    duration: 1           // Animation duration
});
