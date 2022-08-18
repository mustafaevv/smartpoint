class Slider {
    constructor(props) {
      this.slider = document.getElementById(props.sliderId);
      this.sliderInner = this.slider.querySelector(".slider__inner");
      this.prev = this.slider.querySelector(".slider__prev");
      this.next = this.slider.querySelector(".slider__next");
      this.items = this.sliderInner.querySelectorAll(".slider__item");
      this.size = this.items[0].clientWidth;
  
      this.fadeSide = this.slider.getAttribute("data-side");
  
      this.sideMulti = this.fadeSide === "left" ? -1 : 1;
      if (this.fadeSide === "right")
        this.sliderInner.style.flexDirection = "row-reverse";
        
      this.active = 0;
      this.manageButtons();
      this.manageActiveClass();
  
      this.prev.onclick = () => this.move(this.prev);
      this.next.onclick = () => this.move(this.next);
    }
  
    moveInner() {
      this.sliderInner.style.transform = `translateX(${
        this.active * this.size * this.sideMulti
      }px)`;
    }
  
    move(button) {
      this.manageActiveNumber(button);
      this.moveInner();
      this.fadeItems();
      this.manageActiveClass();
      this.manageButtons();
    }
  
    manageButtons() {
      this.prev.disabled = this.active <= 0 ? true : false;
      this.next.disabled = this.active >= this.items.length - 1 ? true : false;
    }
  
    fadeItems() {
      this.items.forEach((item, i) =>
        i < this.active
          ? item.classList.add("fade")
          : item.classList.remove("fade")
      );
    }
  
    manageActiveClass() {
      this.items.forEach((item, i) =>
        i === this.active
          ? item.classList.add("active")
          : item.classList.remove("active")
      );
    }
  
    manageActiveNumber(button) {
      if (button === this.next && this.active < this.items.length - 1)
        this.active++;
      else if (button === this.prev && this.active > 0) this.active--;
    }
  }
  
  new Slider({
    sliderId: "slider1",
  });


var headerButton = document.querySelector(".header__button"),
  headerMenu = document.querySelector(".header__list"),
  menuOpened = !1,
  menuToggle = function () {
    (menuOpened = !menuOpened),
      headerButton.classList.toggle("open"),
      headerMenu.classList.toggle("open");
  };
(headerButton.onclick = menuToggle),
  (window.onclick = function (a) {
    !menuOpened ||
      a.composedPath().includes(headerButton) ||
      a.composedPath().includes(headerMenu) ||
      menuToggle();
  });
