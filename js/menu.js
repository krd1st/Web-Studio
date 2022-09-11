
(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]");
	const mobileMenuRef = document.querySelector("[data-menu]");
	const pageBody = document.querySelector(".body");

	menuBtnRef.addEventListener("click", () => {
		const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		pageBody.classList.toggle("no-scroll");
	});
})();





// (() => {
// 	const refs = {
// 	  openMenuBtn: document.querySelector('[data-menu-open]'),
// 	  closeMenuBtn: document.querySelector('[data-menu-close]'),
// 	  menu: document.querySelector('[data-menu]'),
// 	  body: document.querySelector('body'),
// 	};
  
// 	refs.openMenuBtn.addEventListener('click', toggleMenu);
// 	refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
// 	function toggleMenu() {
// 	  refs.menu.classList.toggle('is-hidden');
// 	  refs.body.classList.toggle('no-scroll');
// 	}
//   })();

// (() => {
// 	const mobileMenu = document.querySeklector('.js-menu-container');
// 	const openMenuBtn = document.querySelector('.js-open-menu');
// 	const closeMenuBtn = document.querySelector('.js-close-menu');
  
// 	const toggleMenu = () => {
// 	  const isMenuOpen =
// 		openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
// 	  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
// 	  mobileMenu.classList.toggle('is-open');
  
// 	  const scrollLockMethod = !isMenuOpen
// 		? 'disableBodyScroll'
// 		: 'enableBodyScroll';
// 	  bodyScrollLock[scrollLockMethod](document.body);
// 	};
  
// 	openMenuBtn.addEventListener('click', toggleMenu);
// 	closeMenuBtn.addEventListener('click', toggleMenu);
  
// 	// Close the mobile menu on wider screens if the device orientation changes
// 	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
// 	  if (!e.matches) return;
// 	  mobileMenu.classList.remove('is-open');
// 	  openMenuBtn.setAttribute('aria-expanded', false);
// 	  bodyScrollLock.enableBodyScroll(document.body);
// 	});
//   })();