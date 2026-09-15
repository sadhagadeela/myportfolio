const products = [
 {id:1,name:"Wireless Headphones",price:49,image:"https://picsum.photos/id/1/300/200",desc:"High quality sound"},
 {id:2,name:"Smart Watch",price:99,image:"https://picsum.photos/id/2/300/200",desc:"Fitness tracker"},
 {id:3,name:"Gaming Mouse",price:29,image:"https://picsum.photos/id/3/300/200",desc:"RGB lights"},
 {id:4,name:"Laptop Stand",price:25,image:"https://picsum.photos/id/4/300/200",desc:"Adjustable stand"},
 {id:5,name:"Bluetooth Speaker",price:39,image:"https://picsum.photos/id/6/300/200",desc:"Loud bass"},
 {id:6,name:"Keyboard",price:59,image:"https://picsum.photos/id/8/300/200",desc:"Mechanical keys"},
 {id:7,name:"Webcam HD",price:69,image:"https://picsum.photos/id/10/300/200",desc:"1080p camera"},
 {id:8,name:"Phone Holder",price:15,image:"https://picsum.photos/id/12/300/200",desc:"Car mount"}
];
let cart=[];
function renderProducts(){
 document.getElementById('products').innerHTML=products.map(p=>`
  <div class="card">
   <img src="${p.image}">
   <h3>${p.name}</h3>
   <p>${p.desc}</p>
   <div class="price">$${p.price}</div>
   <button onclick="addToCart(${p.id})">Add to Cart</button>
  </div>`).join('');
}
function addToCart(id){
 const prod=products.find(p=>p.id==id);
 cart.push(prod);
 updateCart();
}
function updateCart(){
 document.getElementById('cartCount').innerText=cart.length;
 let total=cart.reduce((s,p)=>s+p.price,0);
 document.getElementById('total').innerText=`Total: $${total}`;
 document.getElementById('cartItems').innerHTML=cart.map((c,i)=>`
  <div><span>${c.name}</span><span>$${c.price} <b onclick="removeItem(${i})" style="color:red;cursor:pointer">x</b></span></div>`).join('') || '<p>Empty</p>';
}
function removeItem(i){cart.splice(i,1);updateCart()}
function toggleCart(){document.getElementById('cartBox').classList.toggle('hidden')}
function checkout(){
 if(cart.length==0) return alert('Cart empty');
 alert('Order placed! Total $'+cart.reduce((s,p)=>s+p.price,0)+' (Frontend Demo)');
 cart=[];updateCart();toggleCart();
}
renderProducts();
