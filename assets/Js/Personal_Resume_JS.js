
	function myFunction() {
       var element = document.body;
       element.classList.toggle("dark-mode");}
    
    
          //開展視窗
      var acc = document.getElementsByClassName("accordion");
      var i;
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }
    
    //介紹照片放大
    var modal1= document.getElementById("myModal1");
    var modal2 = document.getElementById("myModal2");
    var modal3= document.getElementById("myModal3");
    var modal4= document.getElementById("myModal4");
    var modal5 = document.getElementById("myModal5");
    var modal6= document.getElementById("myModal6");
    var modal7 = document.getElementById("myModal7");
    var modal8= document.getElementById("myModal8");
    var img1 = document.getElementById("myImg1");
    var img2 = document.getElementById("myImg2");
    var img3 = document.getElementById("myImg3");
    var img4 = document.getElementById("myImg4");
    var img5 = document.getElementById("myImg5");
    var img6 = document.getElementById("myImg6");
    var img7 = document.getElementById("myImg7");
    var img8 = document.getElementById("myImg8");
    var modalImg1 = document.getElementById("img01");
    var modalImg2 = document.getElementById("img02");
    var modalImg3 = document.getElementById("img03");
    var modalImg4 = document.getElementById("img04");
    var modalImg5 = document.getElementById("img05");
    var modalImg6 = document.getElementById("img06");
    var modalImg7 = document.getElementById("img07");
    var modalImg8 = document.getElementById("img08");
    img1.onclick = function(){
      modal1.style.display = "block";
      modalImg1.src = this.src;
    }
    img2.onclick = function(){
      modal2.style.display = "block";
      modalImg2.src = this.src;
    }
    img3.onclick = function(){
      modal3.style.display = "block";
      modalImg3.src = this.src;
    }
    img4.onclick = function(){
      modal4.style.display = "block";
      modalImg4.src = this.src;
    }
    img5.onclick = function(){
      modal5.style.display = "block";
      modalImg5.src = this.src;
    }
    img6.onclick = function(){
      modal6.style.display = "block";
      modalImg6.src = this.src;
    }
    img7.onclick = function(){
      modal7.style.display = "block";
      modalImg7.src = this.src;
    }
    img8.onclick = function(){
      modal8.style.display = "block";
      modalImg8.src = this.src;
    }
    var span1 = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];
    var span3 = document.getElementsByClassName("close")[2];
    var span4 = document.getElementsByClassName("close")[3];
    var span5 = document.getElementsByClassName("close")[4];
    var span6 = document.getElementsByClassName("close")[5];
    var span7 = document.getElementsByClassName("close")[6];
    var span8 = document.getElementsByClassName("close")[7];
    span1.onclick = function() {
      modal1.style.display = "none";
    }
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    span3.onclick = function() {
      modal3.style.display = "none";
    }
    span4.onclick = function() {
      modal4.style.display = "none";
    }
    span5.onclick = function() {
      modal5.style.display = "none";
    }
    span6.onclick = function() {
      modal6.style.display = "none";
    }
    span7.onclick = function() {
      modal7.style.display = "none";
    }
    span8.onclick = function() {
      modal8.style.display = "none";
    }
    
    
    //移至頂端
    var mybutton = document.getElementById("GoToTop");
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    function topFunction() {
      document.documentElement.scrollTop = 0;
    }

    //生活插圖展示
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
