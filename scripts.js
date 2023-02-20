//Create function to select elements
const selectElement = (element) => document.querySelector(element);
//Open and close nav on click

selectElement(".menu-icons").addEventListener("click", () => {
  selectElement("nav").classList.toggle("active");
});

selectElement(".ion-md-arrow-dropdown").addEventListener("click", () => {
  selectElement(".sub-menu").classList.toggle("active");
});
