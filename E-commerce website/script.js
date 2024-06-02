var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const Men = document.querySelector(".menbutton");
const Kids = document.querySelector(".kidbutton");
// const buttons = document.querySelector(".buttons p");

const men_block = () => {
  document.querySelector(".men-container").style.display = "block";
  document.querySelector(".kids-container").style.display = "none";
  Men.classList.add("active");
  Kids.classList.remove("active");
}

const kids_block = () => {
  document.querySelector(".men-container").style.display = "none";
  document.querySelector(".kids-container").style.display = "block";
  Men.classList.remove("active");
  Kids.classList.add("active");
}
