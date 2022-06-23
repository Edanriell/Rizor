class ImageSwitcher {
	constructor({ mainImage, activeClass, images }) {
		this.mainImage = document.querySelector(`${mainImage} img`);
		this.images = images;
		this.activeClass = activeClass;
	}

	init() {
		for (const image of this.images) {
			document.querySelector(image.selector).addEventListener("click", event => {
				this.#changeImageSrc(event.target, image.image);
			});
		}
	}

	#changeImageSrc(button, imageSrc) {
		this.#clearActiveClass(this.activeClass);
		this.mainImage.src = imageSrc;
		button.parentNode.classList.add(this.activeClass);
	}

	#clearActiveClass(activeClass) {
		for (const image of this.images) {
			const currentImageWrapper = document.querySelector(image.selector).parentNode;
			if (currentImageWrapper.classList.contains(activeClass)) {
				currentImageWrapper.classList.remove(activeClass);
			}
		}
	}
}

export { ImageSwitcher };
