let cart=[];

function addService(name){
cart.push(name);
updateCart();
}

function updateCart(){
const list=document.getElementById("cartList");
const count=document.getElementById("cartCount");
if(!list) return;
list.innerHTML=cart.map(s=>`<li>✔ ${s}</li>`).join("");
count.innerText=cart.length;
}

function sendWhats(e){
e.preventDefault();
let nome=document.getElementById("nome").value;
let data=document.getElementById("data").value;

let msg=`Olá, sou ${nome}. Quero agendar: ${cart.join(", ")} — Data: ${data}`;

window.location.href="https://wa.me/message/GFJ7SFMFDNSGG1?text="+encodeURIComponent(msg);
}
