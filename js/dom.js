

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

// database :
const history = [];



function callFunction (service , number ){
    const coin = parseInt(document.getElementById('coin').innerText);
    if(coin < 20){
        alert('Coin is Short Plz Perches the coin')
        return;
    }
    else{
        const calculate = coin - 20;

        alert('service name :' +' '+document.getElementById(service).innerText + ' ' +
            'Number :'+' '+ document.getElementById(number).innerText );
            
        document.getElementById('coin').innerText = calculate;
    }

     const object = {
        name : document.getElementById(service).innerText,
        number : document.getElementById(number).innerText,
        date : new Date().toLocaleTimeString(),
    };
    history.push(object)
    
}

// function for history 
function showHistory (){
    document.getElementById('history-container').innerHTML = '';
    const historyContainer = document.getElementById('history-container')
    
    for(const obj of history){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="look-cart bg-[#fafafa] rounded-xl w-[328px] min-h-[50px] mx-auto mt-6 flex justify-between items-center p-2">
                    <div>
                        <h3 class="text-[18px] text-black font-medium">${obj.name}</h3>
                        
                        <p class="text-[#5c5c5c] mt-4 font-semibold">${obj.number}</p>
                    </div>
                    <div>
                        <p class="text-[18px]">${obj.date}</p>
                    </div>
        `;
        historyContainer.appendChild(div);
    }
}


document.getElementById('call-1')
.addEventListener('click', function(){

    callFunction('service-1','number-1');
    showHistory();    
    
});

document.getElementById('call-2')
.addEventListener('click', function(){

callFunction('service-2','number-2');

showHistory();

})
document.getElementById('call-3')
.addEventListener('click', function(){

callFunction('service-3','number-3');
showHistory();

})
document.getElementById('call-4')
.addEventListener('click', function(){

callFunction('service-4','number-4');
showHistory();

})
document.getElementById('call-5')
.addEventListener('click', function(){

callFunction('service-5','number-5');
showHistory();

})
document.getElementById('call-6')
.addEventListener('click', function(){

callFunction('service-6','number-6');
showHistory();

})
document.getElementById('call-7')
.addEventListener('click', function(){

callFunction('service-7','number-7');
showHistory();
    
})
document.getElementById('call-8')
.addEventListener('click', function(){

callFunction('service-8','number-8');
showHistory();

})
document.getElementById('call-9')
.addEventListener('click', function(){

callFunction('service-9','number-9');
showHistory();

})


// copy portion :

function copyText(copy) {
    const copyText = document.getElementById(copy).innerText;
    
      const copyCount = parseInt(document.getElementById('copy-count').innerText)
       
        navigator.clipboard.writeText(copyText) 

        if(copyText.innerText === copyText.innerText){
            alert('Hotline number will be copied');
        }

         const count = copyCount + 1

      document.getElementById('copy-count').innerText = count
    
}   

// history Clear portion :

document.getElementById('clear')
.addEventListener('click', function(){
   
    history.length = 0;
     
    document.getElementById('history-container').innerHTML = '';
    
})



