

// heart Portion :

function increment(id){
    document.getElementById(id)
.addEventListener('click', function(){
    
    const heartCount = parseInt(document.getElementById('heart-count').innerText)
    const  update = heartCount + 1 ; 

    document.getElementById('heart-count').innerText = update ;
})
}

increment('heart-1');
increment('heart-2');
increment('heart-3');
increment('heart-4');
increment('heart-5');
increment('heart-6');
increment('heart-7');
increment('heart-8');
increment('heart-9');

// call portion :

function callFunction (service , number ){
    const coin = parseInt(document.getElementById('coin').innerText);
    if(coin < 20){
        alert('Coin is Short Plz Perches the coin')
    }
    else{
        const calculate = coin - 20;

        alert('service name :' +' '+document.getElementById(service).innerText + ' ' +
            'Number :'+' '+ document.getElementById(number).innerText );
            
        document.getElementById('coin').innerText = calculate;
    }
}

document.getElementById('call-1')
.addEventListener('click', function(){

    callFunction('service-1','number-1');

})

document.getElementById('call-2')
.addEventListener('click', function(){

callFunction('service-2','number-2');

})
document.getElementById('call-3')
.addEventListener('click', function(){

callFunction('service-3','number-3');

})
document.getElementById('call-4')
.addEventListener('click', function(){

callFunction('service-4','number-4');

})
document.getElementById('call-5')
.addEventListener('click', function(){

callFunction('service-5','number-5');

})
document.getElementById('call-6')
.addEventListener('click', function(){

callFunction('service-6','number-6');

})
document.getElementById('call-7')
.addEventListener('click', function(){

callFunction('service-7','number-7');
    
})
document.getElementById('call-8')
.addEventListener('click', function(){

callFunction('service-8','number-8');

})
document.getElementById('call-9')
.addEventListener('click', function(){

callFunction('service-9','number-9');

})


