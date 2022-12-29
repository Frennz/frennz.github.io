console.clear();

mySplitText = new SplitText(".txt", {type:"chars", charsClass:"char"}); 

let gtl = gsap.timeline({ yoyo: true, repeat: -1, delay: 0 });

function animateText() {
	return gsap.timeline()
		.to( '.char', {
			fontWeight: 300,
			fontStretch: '10%',
			ease: "sine.inOut",
			duration: 1.2,
			stagger: {
				each: 0.6,
				yoyo: true,
				repeat: -1
			}
		} );
}

gsap.to('.container', {
	autoAlpha: 1,
	duration: 4,
	ease: 'none'
})

gtl.add(animateText())
	.seek(6)
	.play();