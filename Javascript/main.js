


// Manupliating header class to add sticky when user scrolls down //
window.addEventListener("scroll",function(){
    const header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 0)

})


// Common-header background animations//
// Animation type 1 //
function createSquare(){
    const arr_color = ["#FFF","#532A55","#7724BC","#5A20BE"]
    const bg = document.querySelector(".start")
    const Square = document.createElement('span')
    // creates random Square radius from 20 -70px //
    var radius = (Math.floor(Math.random() * (50)) + 20) ;

    Square.style.width = radius + "px"
    Square.style.height = radius + "px"

    Square.style.top = bg.innerheight+ "px"
    Square.style.left = (Math.random()*90 + 5)  + "%"
    // selects a random color from array of colors //
    Square.style.background = arr_color[ Math.floor(Math.random() *arr_color.length) ]
    
    bg.appendChild(Square)

    // animation moving up //
    Square.animate([

        { transform: `rotate(45deg)` },
        // { transform: `scale(1)` },
        { transform: 'translateY(-500px)' }
      ], {
   
        duration: 1500,
        iterations: Infinity
      });

    // Square disappears every ___ sec //
    setTimeout(() => {
        Square.remove()
    }, 4700);
}

// Animation type 2: Wavy //
var x_coord = 5
function createSquare2(){
    const arr_color = ["#FFF","#532A55","#7724BC","#5A20BE"]
    const bg = document.querySelector(".start")
    const Square = document.createElement('span')
    // creates random Square radius from 20-70px //
    var radius = (Math.floor(Math.random() * (50)) + 20) ;

    Square.style.width = radius + "px"
    Square.style.height = radius + "px"


    if(x_coord>=90){
        x_coord = 0
    }else{
        x_coord += 10
    }

    Square.style.left = x_coord + "%"


    Square.style.top = bg.innerheight+ "px"
    // selects a random color from array of colors //
    Square.style.background = arr_color[ Math.floor(Math.random() *arr_color.length) ]
    
    bg.appendChild(Square)

    // animation moving up //
    Square.animate([

        { transform: `rotate(45deg)` },
        // { transform: `scale(1)` },
        { transform: 'translateY(-500px)' }
      ], {
   
        duration: 1500,
        iterations: Infinity
      });

    // Square disappears every 4700ms //
    setTimeout(() => {
        Square.remove()
    }, 4700);
}

 //Button that Changes to different animations in Common Header //
var Animate = setInterval(createSquare, 300)

function changeAnime() {
  clearInterval(Animate)
  if(document.getElementById("Btn2").classList.contains("Animation2")){
    Animate = setInterval(createSquare,300);
  }else{
   Animate = setInterval(createSquare2, 300);
}
  document.getElementById("Btn2").classList.toggle("Animation2")
}



  // Manupliating Section3 on page 4 by adding class when user clicks button //
  // this class -> CSS blur effect + Pop out text //
function popout(){
  var bg_blur = document.getElementById("Sect_3")
  bg_blur.classList.toggle("active")
}


// Adds Read more clickable function to sub-header on P.g 2,3,4//
function add_info(){
    const btn1 = document.getElementById("Btn1")
    const extra = document.getElementById("extra")
    if(btn1.innerHTML=="Read More"){
        extra.style.display = "inline";
        btn1.innerHTML="Read Less"
    }else{
        extra.style.display = "none";
        btn1.innerHTML="Read More"
    }
  }; 
 
  // these next 4 are basically the same //
function add_info2() {
    const btn3 = document.getElementById("Btn3")
    const extra2 = document.getElementById("extra2")
    if(btn3.innerHTML=="Read More"){
        extra2.style.display = "inline";
        btn3.innerHTML="Read Less"
    }else{
        extra2.style.display = "none";
        btn3.innerHTML="Read More"
    }
  }; 
//  Adds Read more clickable section for Pg.3  of website //
  function add_info3() {
    const btn4 = document.getElementById("Btn4")
    const extra3 = document.getElementById("extra3")
    if(btn4.innerHTML=="Read More"){
        extra3.style.display = "inline";
        btn4.innerHTML="Read Less"
    }else{
        extra3.style.display = "none";
        btn4.innerHTML="Read More"
    }
  }; 


  function add_info4() {
    const btn5 = document.getElementById("Btn5")
    const extra4 = document.getElementById("extra4")
    if(btn5.innerHTML=="Read More"){
        extra4.style.display = "inline";
        btn5.innerHTML="Read Less"
    }else{
        extra4.style.display = "none";
        btn5.innerHTML="Read More"
    }
  }; 
  function add_info5() {
    const btn6 = document.getElementById("Btn6")
    const extra5 = document.getElementById("extra5")
    if(btn6.innerHTML=="Read More"){
        extra5.style.display = "inline";
        btn6.innerHTML="Read Less"
    }else{
        extra5.style.display = "none";
        btn6.innerHTML="Read More"
    }
  }; 
//  P.S I KNOW THIS CAN BE better ACCOMPLISHED
//   by .getElementsByClass** but it doesn't work and idk why and no time sry 