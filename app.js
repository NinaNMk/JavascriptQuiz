var correct=document.querySelectorAll('.true');
var wrong=document.querySelectorAll('.wrong');
var num=0;


//loop for correct answers

for(let i=0; i<correct.length; i++){
correct[i].addEventListener('click',function(){
    if(correct) 
        num=num+1;
        this.style.backgroundColor = '#a8ff3e';
        return t();  
            

})
}

function t(){
  document.querySelector('.p').innerHTML='Your score is' + " "+ num;
}

//loop for wrong answers

for(let i=0; i<wrong.length; i++){
wrong[i].addEventListener('click',function(){
    if(wrong){
        num=num-1;
        this.style.backgroundColor = 'red'
        return t();
    }
    
})
}

//break 



