/* eslint-disable no-shadow */
import { gsap } from "gsap";

const sliderSlides = document.querySelector(".Slider-Wrapper").children;

function slideAnimations({ swiper, on }) {
	on("slideChange", () => {
		const activeSlide = sliderSlides[swiper.activeIndex];
		const previousSlide = sliderSlides[swiper.previousIndex];

		gsap.fromTo(
			activeSlide,
			{ opacity: 0.4 },
			{ opacity: 1, duration: 1.2, ease: "power4.out" }
		);
		gsap.fromTo(
			previousSlide,
			{ opacity: 1 },
			{ opacity: 0.4, duration: 1.2, ease: "power4.out" }
		);
	});
}

export default slideAnimations;
