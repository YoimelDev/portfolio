const menuBtn=document.querySelector(".header__nav__menu__btn"),menuAside=document.querySelector(".header__nav__menu__aside"),blur=document.createElement("div");blur.classList.add("blur");let lastScrollTop=0;const header=document.querySelector("header"),navMenu=document.querySelectorAll(".header__nav__menu__aside__nav a");function blurBg(){document.body.contains(blur)?document.body.removeChild(blur):document.body.appendChild(blur)}document.addEventListener("click",e=>{e.target===blur&&(menuBtn.classList.remove("opened"),menuAside.classList.remove("opened"),document.body.classList.remove("hidden"),blurBg())}),document.addEventListener("scroll",()=>{let e=window.pageYOffset||document.documentElement.scrollTop;0==e?(header.classList.remove("up"),header.classList.remove("down")):e>lastScrollTop?(header.classList.remove("up"),header.classList.add("down")):(header.classList.remove("down"),header.classList.add("up")),lastScrollTop=e<=0?0:e}),menuBtn.addEventListener("click",()=>{menuBtn.classList.toggle("opened"),menuAside.classList.toggle("opened"),document.body.classList.toggle("hidden"),blurBg()}),navMenu.forEach(e=>{e.addEventListener("click",()=>{menuBtn.classList.remove("opened"),menuAside.classList.remove("opened"),document.body.classList.remove("hidden"),blurBg()})});
//# sourceMappingURL=app.js.map
