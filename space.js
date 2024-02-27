
var nave = document.querySelector('.nave')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')
const line5 = document.querySelector('.line5')

line1.addEventListener('click', ()=>{
    setTimeout(()=>{
        line1.innerHTML='<img class="nave"  src="Img/5.png"  width="120px">'
    }, 30)
    setTimeout(()=>{
        line1.innerHTML='<img class="nave"  src="Img/4.png"  width="120px">'
    }, 60)
    setTimeout(()=>{
        line1.innerHTML='<img class="nave"  src="Img/3.png"  width="120px">'
    }, 90)
    setTimeout(()=>{
        line1.innerHTML='<img class="nave"  src="Img/2.png"  width="120px">'
    }, 120)
    setTimeout(()=>{
        line1.innerHTML='<img class="nave"  src="Img/1.png"  width="120px">'
    }, 150)
    
    line4.innerHTML=''
    line2.innerHTML=''
    line3.innerHTML=''
    line5.innerHTML='';

    line1.style.width = ('135px');
    line2.style.width = ('100%');
    line3.style.width = ('100%');
    line4.style.width = ('100%');
    line5.style.width = ('100%');
})

line2.addEventListener('click', ()=>{
    setTimeout(()=>{
        line2.innerHTML='<img class="nave"  src="Img/5.png"  width="120px">'
    }, 30)
    setTimeout(()=>{
        line2.innerHTML='<img class="nave"  src="Img/4.png"  width="120px">'
    }, 60)
    setTimeout(()=>{
        line2.innerHTML='<img class="nave"  src="Img/3.png"  width="120px">'
    }, 90)
    setTimeout(()=>{
        line2.innerHTML='<img class="nave"  src="Img/2.png"  width="120px">'
    }, 120)
    setTimeout(()=>{
        line2.innerHTML='<img class="nave"  src="Img/1.png"  width="120px">'
    }, 150)
    
    line4.innerHTML=''
    line1.innerHTML=''
    line3.innerHTML=''
    line5.innerHTML=''

    line1.style.width = ('100%');
    line2.style.width = ('135px');
    line3.style.width = ('100%');
    line4.style.width = ('100%');
    line5.style.width = ('100%');
})

line3.addEventListener('click', ()=>{
    setTimeout(()=>{
        line3.innerHTML='<img class="nave"  src="Img/5.png"  width="120px">'
    }, 30)
    setTimeout(()=>{
        line3.innerHTML='<img class="nave"  src="Img/4.png"  width="120px">'
    }, 60)
    setTimeout(()=>{
        line3.innerHTML='<img class="nave"  src="Img/3.png"  width="120px">'
    }, 90)
    setTimeout(()=>{
        line3.innerHTML='<img class="nave"  src="Img/2.png"  width="120px">'
    }, 120)
    setTimeout(()=>{
        line3.innerHTML='<img class="nave"  src="Img/1.png"  width="120px">'
    }, 150)
    
    line2.innerHTML=''
    line1.innerHTML=''
    line4.innerHTML=''
    line5.innerHTML=''

    line1.style.width = ('100%');
    line2.style.width = ('100%');
    line3.style.width = ('135px');
    line4.style.width = ('100%');
    line5.style.width = ('100%');
})

line4.addEventListener('click', ()=>{
    setTimeout(()=>{
        line4.innerHTML='<img class="nave"  src="Img/5.png"  width="120px">'
    }, 30)
    setTimeout(()=>{
        line4.innerHTML='<img class="nave"  src="Img/4.png"  width="120px">'
    }, 60)
    setTimeout(()=>{
        line4.innerHTML='<img class="nave"  src="Img/3.png"  width="120px">'
    }, 90)
    setTimeout(()=>{
        line4.innerHTML='<img class="nave"  src="Img/2.png"  width="120px">'
    }, 120)
    setTimeout(()=>{
        line4.innerHTML='<img class="nave"  src="Img/1.png"  width="120px">'
    }, 150)
    
    line1.innerHTML=''
    line2.innerHTML=''
    line3.innerHTML=''
    line5.innerHTML=''

    line1.style.width = ('100%');
    line2.style.width = ('100%');
    line3.style.width = ('100%');
    line4.style.width = ('135px');
    line5.style.width = ('100%');
})

line5.addEventListener('click', ()=>{
    setTimeout(()=>{
        line5.innerHTML='<img class="nave"  src="Img/5.png"  width="120px">'
    }, 30)
    setTimeout(()=>{
        line5.innerHTML='<img class="nave"  src="Img/4.png"  width="120px">'
    }, 60)
    setTimeout(()=>{
        line5.innerHTML='<img class="nave"  src="Img/3.png"  width="120px">'
    }, 90)
    setTimeout(()=>{
        line5.innerHTML='<img class="nave"  src="Img/2.png"  width="120px">'
    }, 120)
    setTimeout(()=>{
        line5.innerHTML='<img class="nave"  src="Img/1.png"  width="120px">'
    }, 150)
    
    line1.innerHTML=''
    line2.innerHTML=''
    line3.innerHTML=''
    line4.innerHTML=''

    line1.style.width = ('100%');
    line2.style.width = ('100%');
    line3.style.width = ('100%');
    line4.style.width = ('100%');
    line5.style.width = ('135px');
})


var meteor= document.querySelector('.rock')
var meteor2= document.querySelector('.rock2')
var meteor3= document.querySelector('.rock3')
var meteor4= document.querySelector('.rock4')
var meteor5= document.querySelector('.rock5')

var speed_meteor= document.querySelector('.rock2')
var speed_meteor2= document.querySelector('.rock3')
var speed_meteor3= document.querySelector('.rock4')



 var meteoro = [ meteor3, meteor4, meteor5]
     setInterval(()=>{
      let line = (meteoro[Math.floor((Math.random() * meteoro.length))])
  
     line.classList.add('meteorAnimation')
         setTimeout(()=>{
        
            line.classList.remove('meteorAnimation')
        }, 1000)
     }, 1000)

var meteoro2 = [meteor, meteor2, meteor5]
     setInterval(()=>{
      let line = (meteoro2[Math.floor((Math.random() * meteoro2.length))])
  
     line.classList.add('comom2Animation')
         setTimeout(()=>{
        
            line.classList.remove('comom2Animation')
        }, 1000)
     }, 1000)
     
var speed_rock = [speed_meteor, speed_meteor2, speed_meteor3]
     setInterval(()=>{
      let line = (speed_rock[Math.floor((Math.random() * speed_rock.length))])
  
     line.classList.add('comom3Animation')
         setTimeout(()=>{
        
            line.classList.remove('comom3Animation')
        }, 680)
     }, 680)




const gameover = setInterval(()=>{
    
    meteorposition = meteor.offsetLeft;
    meteor2position = meteor2.offsetLeft;
    meteor3position = meteor3.offsetLeft;
    meteor4position = meteor4.offsetLeft;
    meteor5position = meteor5.offsetLeft;

    console.log(meteorposition)


    lineWidth = line1.clientWidth
    line2Width = line2.clientWidth
    line3Width = line3.clientWidth
    line4Width = line4.clientWidth
    line5Width = line5.clientWidth


    if(meteorposition == 119 & lineWidth == 133){
        alert('gameover')
        location.reload()
     }else if(meteor2position == 119 & line2Width == 133){
        alert('gameover')
        location.reload()

    }else if(meteor3position == 119 & line3Width == 133){
        alert('gameover')
        location.reload()

    }else if(meteor4position == 119 & line4Width == 133){
        alert('gameover')
        location.reload()

    }else if(meteor5position == 119 & line5Width == 133){
        alert('gameover')
        location.reload()

    }
}, 10)

const gameover2 = setInterval(()=>{
    
    speedposition = speed_meteor.offsetLeft
    speedposition2 = speed_meteor2.offsetLeft
    speedposition3 = speed_meteor3.offsetLeft

    //console.log(speedposition3)
    //console.log(speedposition, '1')
    //console.log(speedposition2, '2')


    if(speedposition == 102 && line2Width == 133){
        alert('gamoverspeed1')
        location.reload()

    }else if(speedposition2 == 102 && line3Width == 133){
        alert('gameoverspeed3')
        location.reload()

    }else if(speedposition3 == 102  && line4Width == 133){
        alert('gameoverspeed2')
        location.reload()

    }
}, 5)



