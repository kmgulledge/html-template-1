//Navigation Overlay
$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#nav_overlay').toggleClass('open');
  });
  //End of Navigarion Overlay
  //Scroll down effect
  
  window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
  
    var targetY = 0;
    do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
    } while (target = target.offsetParent);
  
    scroll = function (c, a, b, i) {
      i++;
      if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function () {
        scroll(c, a, b, i);
      }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  }
  //End of scroll down effect
  //Typewriter Effect 
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 8) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  
  
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  
    var that = this;
    var delta = 290 - Math.random() * 280;
  
    if (this.isDeleting) {
      delta /= 5;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  
  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
  
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  //End of Typewriter Effect
  
  //SCROLL DOWN BOUNCE
  
  var scrollDown = document.querySelector('.scroll_down-container');
  var line = document.querySelectorAll('.line');
  
  gsap.registerPlugin(ScrollTrigger);
    gsap.to(scrollDown, {duration: 1.5, y: -13, yoyo:true,repeat: -1}),
    line.forEach((x) => {
      gsap.to(x, {
      scrollTrigger: {
        trigger: x,
  
      },  
      delay:0.5,
      width:80, 
      
    }
    )})
  
  