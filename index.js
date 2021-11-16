$(document).ready(function () {
    $(".toggle").click(function () {
        $(".header__mobile").slideToggle();
    })


})

// $(document).ready(function(){
//     $(window).scroll(function(event) {

//         var pos_body = $('html, body').scrollTop();
//         console.log(pos_body);



//     })
// })
$(document).ready(function () {
    $(".nav__list a").click(function (event) {
        event.preventDefault();
        post = $(this).attr('href');
        position = $(post).offset().top;
        // console.log(position);
        $('html, body').animate({ scrollTop: position }, 500);
    })
})


$(document).ready(function () {
    var reg = /^\w+@[a-zA-z]{3,}\.com$/i;

    $(".contact__btn").click(function (event) {
        event.preventDefault();
        var arr = document.getElementsByTagName("input");
        var name = arr[0].value;
        var email = arr[1].value;

        if (name == "" || email == "") {
            alert("please fill all fields");
            return;
        }
        if (!isNaN(name)) {
            alert("Your name must be a letter");
            return;
        }
        if(email.match(reg)){
            alert("submitted successfully!!"); 
            return;
        }
        else{
            alert("Please enter a valid email address");
            return;
        }
        
        // alert("Gửi thành công!")
    })
   
    
    

    $(window).scroll(function (event) {

        var pos_body = $('html, body').scrollTop();
        // console.log(pos_body);
        
       
        if (pos_body > 0) {
            $(".header").addClass("scroll");

        }
        else {
            $(".header").removeClass("scroll");
        }


        if (pos_body > 2500) {
            $(".list__item").addClass("animate");

        }
        else {
            $(".list__item").removeClass("animate");
        }

        if (pos_body > 1400) {
            $(".portfolio__card--left").addClass("animate__card");
           
        }
        else {
            $(".portfolio__card--left").removeClass("animate__card");
            
        }
        if(pos_body >=1400){
            $(".portfolio__title--text").addClass("animate__card");
        }else{
            $(".portfolio__title--text").removeClass("animate__card");
        }



    })
})
$(document).ready(function () {
    $(window).scroll(function (event) {

        var pos_body = $('html, body').scrollTop();
        // console.log(pos_body);

        if (pos_body > 600) {
            $(".back__to--top i").show();
        } else {
            $(".back__to--top  i").hide();
        }
    })
    $(".back__to--top i").click(function (event) {
        $('html , body').animate(
            {
                scrollTop: 0
            },
            1000

        );
        !1
    })
})

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 100) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 150 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 1000;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #F26921 }";
    document.body.appendChild(css);
  };


//   var header = document.querySelector('.portfolio__title--text');
//   var origOffsetY = header.offsetTop;
//   console.log(origOffsetY);