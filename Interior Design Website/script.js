var mainImg = document.getElementById("mainimg");
          var text1 = document.getElementById("text1");
          var text2 = document.getElementById("text2");
          var text3 = document.getElementById("text3");

          text1.addEventListener("click",()=>{
            text1.style.color="#053634"
            text3.style.color="#84b8a7"
            text2.style.color="#84b8a7"
            mainImg.src = "img/service1.jpg"
          })

          text2.addEventListener("click",()=>{
            text2.style.color="#053634"
            text3.style.color="#84b8a7"
            text1.style.color="#84b8a7"
            mainImg.src = "img/service2.jpg"
          })

          text3.addEventListener("click",()=>{
            text3.style.color="#053634"
            text2.style.color="#84b8a7"
            text1.style.color="#84b8a7"
            mainImg.src = "img/service3.jpg"
          })
   

var close = document.getElementById("close");

