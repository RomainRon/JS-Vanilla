function random_bg_color(i) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    i.style.background = bgColor;
    }



let backcolor = document.querySelectorAll(".square")
     backcolor.forEach(function(x) {
         x.addEventListener("click" ,function() {
            random_bg_color(x);
             
            })
})