const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");
p_btns.addEventListener('click', (e)=>{
   const p_btn_clicked = e.target;
//    console.log(p_btn_clicked);
   p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
   p_btn_clicked.classList.add("p-btn-active");
   const btn_num = p_btn_clicked.dataset.btnNum;
//    console.log(btn_num);
   const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
   p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
   img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));

});

// our testimonail start here


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 80,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



//   scroll to top section start here 
const heroSection = document.querySelector(".section-hero")
const footerElem = document.querySelector(".section-footer");
const scroolElem = document.createElement("div");
scroolElem.classList.add("scrollTotop-style");
scroolElem.innerHTML= `<ion-icon name="arrow-up-outline" class="scroll-up"></ion-icon>`;
footerElem.after(scroolElem);
const scrollTop = () =>{
   heroSection.scrollIntoView({behavior: "smooth"});
};
scroolElem.addEventListener("click", scrollTop);


// animate numbers 



const counterNum = document.querySelectorAll(".conter-number");
const speed = 200;
counterNum.forEach((curElem) =>{
   const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number);  
      // console.log(targetNumber);
      const initialNum = parseInt(curElem.innerText);
      // console.log(initialNum);

      const incrementNumber = Math.trunc(targetNumber/speed);
      // console.log(incrementNumber);

      if(initialNum < targetNumber){
         curElem.innerText = `${ initialNum + incrementNumber} +`; 
         setTimeout(updateNumber , 10);
      }
   };
   updateNumber();
});


// to create response navbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", ()=>{
   headerElem.classList.toggle("active");
});
























