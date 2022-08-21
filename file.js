const buttonminus=document.querySelectorAll('.minus');
const buttonplus=document.querySelectorAll('.plus');
const quantity=document.querySelectorAll('.quantity');
const deleted=document.querySelectorAll('.delete');
const price=document.querySelectorAll('.price');
const cards=document.querySelectorAll('.card');
const totale=document.getElementById('somme');
const like=document.querySelectorAll('.Ilike');
const heart = document.getElementById('heart');
const heart2 = document.getElementById('heart2');
const heart3 = document.getElementById('heart3');

for(let i=0; i<buttonminus.length; i++){
    buttonminus[i].addEventListener('click', function(){
        if(quantity[i].innerHTML >0)
        {quantity[i].innerHTML--;
        totale.innerHTML=parseInt(totale.innerHTML)-parseInt(price[i].innerHTML)}
        
    })
}

for(let i=0; i< buttonplus.length; i++){
    buttonplus[i].addEventListener('click', function(){
        quantity[i].innerHTML++;
        totale.innerHTML=parseInt(totale.innerHTML)+parseInt(price[i].innerHTML);
    })
}

for( let i=0; i< deleted.length; i++){
    deleted[i].addEventListener('click', function(){
        cards[i].remove();
        totale.innerHTML=parseInt(totale.innerHTML)-parseInt(price[i].innerHTML);
    })
}

heart.addEventListener('click',()=>{
    if(heart.classList.contains('red')){
        heart.classList.remove('red');
        heart.classList.add('white');
        heart.src = 'redheart.png';
    }else{
        heart.classList.remove('white');
        heart.classList.add('red');
        heart.src = 'white1.png';
    }
});
heart2.addEventListener('click',()=>{
    if(heart2.classList.contains('red')){
        heart2.classList.remove('red');
        heart2.classList.add('white');
        heart2.src = 'redheart1.png';
    }else{
        heart2.classList.remove('white');
        heart2.classList.add('red');
        heart2.src = 'white12.png';
    }
});
heart3.addEventListener('click',()=>{
    if(heart3.classList.contains('red')){
        heart3.classList.remove('red');
        heart3.classList.add('white');
        heart3.src = 'redheart2.png';
    }else{
        heart3.classList.remove('white');
        heart3.classList.add('red');
        heart3.src = 'white13.png';
    }
});
