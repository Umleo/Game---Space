
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



 var meteoro = [meteor, meteor2, meteor3, meteor4, meteor5]
     setInterval(()=>{
      let line = (meteoro[Math.floor((Math.random() * meteoro.length))])
  
     line.classList.add('meteorAnimation')
         setTimeout(()=>{
        
            line.classList.remove('meteorAnimation')
        }, 1000)
     }, 1000)

var meteoro2 = [meteor, meteor2, meteor3, meteor4, meteor5]
     setInterval(()=>{
      let line = (meteoro2[Math.floor((Math.random() * meteoro2.length))])
  
     line.classList.add('comom2Animation')
         setTimeout(()=>{
        
            line.classList.remove('comom2Animation')
        }, 1000)
     }, 1000)



// const gameover = setInterval(()=>{
    
//     meteorposition = meteor.offsetLeft;
//     meteor2position = meteor2.offsetLeft;
//     meteor3position = meteor3.offsetLeft;
//     meteor4position = meteor4.offsetLeft;
//     meteor5position = meteor5.offsetLeft;

//     lineWidth = line1.clientWidth
//     line2Width = line2.clientWidth
//     line3Width = line3.clientWidth
//     line4Width = line4.clientWidth
//     line5Width = line5.clientWidth

//     console.log(meteorposition)

//     if(meteorposition == 108 || meteorposition == 118 & lineWidth == 133){
//         alert('gameover')
//      }else if(meteor2position == 108 || meteor2position == 118 & line2Width == 133){
//         alert('gameover')
//     }else if(meteor3position == 108 || meteor3position == 118 & line3Width == 133){
//         alert('gameover')
//     }else if(meteor4position == 108 || meteor4position == 118 & line4Width == 133){
//         alert('gameover')
//     }else if(meteor5position == 108 || meteor5position == 118 & line5Width == 133){
//         alert('gameover')
//     }
// }, 10)



