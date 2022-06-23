import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class SecondaryNavigation {
	constructor({ triggerNavigation, topLine, bottomLine }) {
		this.trigger = document.querySelectorAll(triggerNavigation);
		this.topLine = document.querySelector(topLine);
		this.bottomLine = document.querySelector(bottomLine);
		this.timeline1 = gsap.timeline({
			scrollTrigger: {
				trigger: ".AboutCustomers",
				start: "top center",
				end: "+=2600",
				// markers: true,
				scrub: true,
				toggleActions: "play reverse play reverse"
			}
		});
		this.timeline2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".AboutCustomers",
				start: "top center",
				end: "+=2600",
				// markers: true,
				scrub: true,
				toggleActions: "play reverse play reverse"
			}
		});
		this.timeline3 = gsap.timeline({
			scrollTrigger: {
				trigger: ".AboutCustomers",
				start: "top center",
				end: "+=2600",
				// markers: true,
				scrub: true,
				toggleActions: "play reverse play reverse"
			}
		});
		this.timeline4 = gsap.timeline({
			scrollTrigger: {
				trigger: "#Promo",
				start: "top center",
				// markers: true,
				scrub: true,
				toggleActions: "play reverse play reverse",
				end: "+=900"
			}
		});
		this.timeline5 = gsap.timeline({
			scrollTrigger: {
				trigger: "#Advantages",
				start: "top center",
				// markers: true,
				scrub: true,
				toggleActions: "play reverse play reverse",
				end: "+=950"
			}
		});
		this.timeline6 = gsap.timeline({
			scrollTrigger: {
				trigger: "#Features",
				start: "top center",
				// markers: true,
				scrub: true,
				toggleActions: "play reverse play reverse",
				end: "+=950"
			}
		});
		this.timeline7 = gsap.timeline({
			scrollTrigger: {
				trigger: "#CustomerReviews",
				start: "top center",
				// markers: true,
				scrub: true,
				toggleActions: "play reverse play reverse",
				end: "+=950"
			}
		});
		this.timeline8 = gsap.timeline({
			scrollTrigger: {
				trigger: "#ModelComparison",
				start: "top center",
				// markers: true,
				scrub: true,
				toggleActions: "play reverse play reverse",
				end: "+=950"
			}
		});
	}

	init() {
		this.#secondaryNavigationAnimations();
		this.#bulletAnimations();
	}

	#secondaryNavigationAnimations() {
		this.timeline1
			.to(this.trigger, { background: "white", borderColor: "white" })
			.to(this.trigger, { background: "#4129f7", borderColor: "white" });
		this.timeline2
			.to(this.topLine, { background: "white" })
			.to(this.topLine, { background: "#4129f7" });
		this.timeline3
			.to(this.bottomLine, { background: "white" })
			.to(this.bottomLine, { background: "#4129f7" });
	}

	#bulletAnimations() {
		this.timeline4
			.to(this.trigger[0], {
				width: "1.7rem",
				height: "1.7rem",
				backgroundColor: "transparent",
				border: "2px solid var(--paginationColor)"
			})
			.to(this.trigger[0], {
				width: "0.7rem",
				height: "0.7rem",
				backgroundColor: "var(--paginationColor)",
				border: "none"
			});
		this.timeline5
			.to(this.trigger[1], {
				width: "1.7rem",
				height: "1.7rem",
				backgroundColor: "transparent",
				border: "2px solid var(--paginationColor)"
			})
			.to(this.trigger[1], {
				width: "0.7rem",
				height: "0.7rem",
				backgroundColor: "var(--paginationColor)",
				border: "none"
			});
		this.timeline6
			.to(this.trigger[2], {
				width: "1.7rem",
				height: "1.7rem",
				backgroundColor: "transparent",
				border: "2px solid var(--paginationColor)"
			})
			.to(this.trigger[2], {
				width: "0.7rem",
				height: "0.7rem",
				backgroundColor: "var(--paginationColor)",
				border: "none"
			});
		this.timeline7
			.to(this.trigger[3], {
				width: "1.7rem",
				height: "1.7rem",
				backgroundColor: "transparent",
				border: "2px solid white"
			})
			.to(this.trigger[3], {
				width: "0.7rem",
				height: "0.7rem",
				backgroundColor: "var(--paginationColor)",
				border: "none"
			});
		this.timeline8
			.to(this.trigger[4], {
				width: "1.7rem",
				height: "1.7rem",
				backgroundColor: "transparent",
				border: "2px solid var(--paginationColor)"
			})
			.to(this.trigger[4], {
				width: "0.7rem",
				height: "0.7rem",
				backgroundColor: "var(--paginationColor)",
				border: "none"
			});
	}
}

export { SecondaryNavigation };
