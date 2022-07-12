var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("my-cart");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


      const  shoppingCartContent= document.querySelector('.my-table tbody');
      const totalPriceEl =document.querySelector('.total')
      clearCartBtn=document.querySelector('#clear-cart');

      const item=document.querySelectorAll('.add-to-cart')

      item.forEach((q)=>{
        
        q.addEventListener("click",buycourse)
      })   



//Listeners
loadEventListeners();


function loadEventListeners(){

    shoppingCartContent.addEventListener('click', removeCourse);

    clearCartBtn.addEventListener('click', clearCart);

}


let totalPrice=0;
let count =0;

const cartNumber =document.querySelector('.cart-number')
 cartNumber.innerHTML=`${count}`
//Functions

function buycourse(e){
    e.preventDefault()
    if(e.target.classList.contains('add-to-cart')){
        
    const course= e.target.parentElement.parentElement.parentElement.parentElement;
    getCourseInfo(course);
    calcTotal(course)
    }
}
function calcTotal(course){
    totalPrice += Number(course.querySelector('div.price').textContent.replace('میلیون تومان',''))
     
     totalPriceEl.innerHTML=`مجموع ${totalPrice} میلیون تومان ` 
     count++;
     cartNumber.innerHTML=`${count}`
}

function getCourseInfo(course){

    const courseInfo={

        image: course.querySelector('img').src,
        title:course.querySelector('div.title').textContent,
        price: course.querySelector('div.price').textContent,
        id: course.querySelector('a.add-to-cart').getAttribute('data-id')
        

    }
    addIntoCart(courseInfo);
}

function addIntoCart(course){
    if(course.price){

    }
    const row= document.createElement('tr');
    row.innerHTML= ` 
    <tr>
    <td> <a href ="#" class="remove" data-id="${course.id}">&times;</a> </td>

    <td> ${course.price} </td>
    <td> ${course.title} </td>
    <td>
    <img src="${course.image}" width=100>
    </td>
    
    </tr>
    `;
    shoppingCartContent.appendChild(row);

}

function removeCourse(e){

    if(e.target.classList.contains('remove')){
        
        e.target.parentElement.parentElement.remove();
        const item = e.target.parentElement.parentElement
        let decNum = Number(item.children[1].innerHTML.replace('میلیون تومان',''))
        debugger;
        decTotal(decNum)
        
        }
}
function decTotal(decNum){
 
  totalPrice -= decNum
  totalPriceEl.innerHTML=`مجموع ${totalPrice} میلیون تومان `
  
  count--;
  cartNumber.innerHTML=`${count}`
}

function clearCart(e){
    shoppingCartContent.innerHTML='';
    
}

function saveIntoStorage(course){

let courses= getCoursesFromStorage();

courses.push(course);

localStorage.setItem('courses', JSON.stringify(courses));
}


