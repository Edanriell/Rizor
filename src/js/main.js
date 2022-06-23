import "../sass/main.sass";

import "swiper/css";
import Swiper, { Navigation, Pagination, Autoplay, Keyboard, EffectCreative } from "swiper";

import imageYellow from "../images/photo-6_yellow.png";
import imageRed from "../images/photo-6_red.png";
import imageGray from "../images/photo-6_gray.png";
import imageBlue from "../images/photo-6_blue.png";
import imageBlack from "../images/photo-6.png";

import SlideAnimations from "./components/slider/helpers";
import { Modal } from "./components/modal/modal";
import { Forms } from "./components/forms/forms";
import { SecondaryNavigation } from "./components/secondaryNavigation/secondaryNavigation";
import { FormValidation } from "./components/formValidation/formValidation";
import { ImageSwitcher } from "./components/imageSwitcher/imageSwitcher";

Swiper.use([Navigation, Pagination, Autoplay, Keyboard, EffectCreative]);

window.addEventListener("DOMContentLoaded", () => {
	const modal = new Modal({
		trigger: "#OrderProduct",
		modal: ".Modal",
		underlay: ".ModalUnderlay",
		closeButton: ".Modal-CloseButton"
	});

	const mainSlider = new Swiper(".Slider", {
		modules: [SlideAnimations],
		slidesPerView: "auto",
		centeredSlides: true,
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true
		},
		keyboard: {
			enabled: true
		},
		navigation: {
			nextEl: ".Slider-ButtonPrev",
			prevEl: ".Slider-ButtonNext"
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: (index, className) => {
				return `
					<li class="${className}">
						<span class="VisuallyHidden">Слайд номер ${index}</span>
					</li>`;
			},
			bulletActiveClass: "SliderPagination-ActiveDot",
			bulletClass: "SliderPagination-Dot"
		}
	});

	const reviewForm = new Forms({
		formSelector: ".CreateReviewForm",
		submitButton: ".Button_color_white",
		databaseName: "reviews"
	});

	const secondaryNavigation = new SecondaryNavigation({
		triggerNavigation: ".SecondaryNavigation-Link",
		topLine: ".Pagination-TopLine",
		bottomLine: ".Pagination-BottomLine"
	});

	const modalSlider = new Swiper(".ModalSlider", {
		grabCursor: true,
		effect: "creative",
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ["-20%", 0, -1]
			},
			next: {
				translate: ["100%", 0, 0]
			}
		}
	});

	const modalForm = new Forms({
		formSelector: ".ModalForm",
		submitButton: ".ModalForm-SubmitButton",
		databaseName: "customers"
	});

	const modalFormValidation = new FormValidation({
		form: ".ModalForm",
		inputs: [
			{
				uniqueName: "name",
				selector: ".ModalForm-NameInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^([а-яё]+|[a-z]+)$/i,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: "Допускаются только буквы"
			},
			{
				uniqueName: "address",
				selector: ".ModalForm-AddressInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/^[a-zа-яё1-9\s]+$/iu,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: "Допускаются только буквы и цифры"
			},
			{
				uniqueName: "email",
				selector: ".ModalForm-EmailInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: "Неверный формат электронной почты"
			},
			{
				uniqueName: "phone",
				selector: ".ModalForm-PhoneInput",
				testRegExp:
					// eslint-disable-next-line max-len
					/([^\w\d])+/g,
				style: {
					valid: `
						border: 2px solid green;
					`,
					unvalid: `
						border: 2px solid red;
					`
				},
				errorMessage: "Допускаются только цифры и знак +"
			}
		],
		initialInputStyle: `
			border: 2px solid #f0f0f0;
		`,
		submitButton: ".ModalForm-SubmitButton"
	});

	const imageSwitcher = new ImageSwitcher({
		mainImage: ".Colors-Image",
		activeClass: "ColorsList-ActiveColor",
		images: [
			{
				selector: ".ColorButton_color_yellow",
				image: imageYellow
			},
			{
				selector: ".ColorButton_color_blue",
				image: imageBlue
			},
			{
				selector: ".ColorButton_color_red",
				image: imageRed
			},
			{
				selector: ".ColorButton_color_gray",
				image: imageGray
			},
			{
				selector: ".ColorButton_color_black",
				image: imageBlack
			}
		]
	});

	modal.init();
	reviewForm.init();
	secondaryNavigation.init();
	mainSlider.init();
	modalSlider.init();
	modalForm.init();
	modalFormValidation.init();
	imageSwitcher.init();
});
