const MoveTo = require('moveto');
export default function targetScroll() {
  const moveTo = new MoveTo();
  const trigger = document.querySelectorAll('.menu__link');
  for (let i = 0; i < trigger.length; i++) {
    moveTo.registerTrigger(trigger[i]);
    trigger[i].addEventListener('click', function () {
      for(let j=0;j<trigger.length;j++){
        trigger[j].parentNode.classList.remove("menu__item--active");
      }
      this.parentNode.classList.add("menu__item--active");
    })
  }
}

