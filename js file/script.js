
let slideindex = 1;
let remainingTime = 70000;


// index
  
function setTime(){
    if (remainingTime == 0) return;
    let h = Math.floor(remainingTime/3600);
    let m = Math.floor((remainingTime%3600)/60);
    let s = (remainingTime%3600)%60;
    if(s<10){
        s = '0' +s;
    }
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('secondes').innerHTML = s;
    
}
setInterval(()=>{
    remainingTime--;
    setTime()
    },1000)
    
function setslide(input,index){
    slideindex=index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children];
    slides.forEach((element)=>{
        element.classList.remove('active')
        
    })
    item.classList.add('active')
    changedot()
 
}
         
function changedot(){
    const dot1 = document.getElementById('dot1');
    const dot3 = document.getElementById('dot3');
    const dot2 = document.getElementById('dot2');
     
    let buttons = [...document.querySelector('.buttons').children]
    buttons.forEach((element)=>{

    if(slideindex==1){
        element.classList.remove('active')
        dot1.classList.add('active')
            
    }
    else if(slideindex==2){
        element.classList.remove('active')
        dot2.classList.add('active')
    }
    else if(slideindex==3){
        element.classList.remove('active')
        dot3.classList.add('active')
    }

    })

}

setInterval(()=>{
    
    slideindex ++;
    if(slideindex == 4){
        slideindex = 1;
    }
    
    setslide(`item${slideindex}`,slideindex)
    changedot()

},4000)

