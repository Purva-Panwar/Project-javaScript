
const scr=document.querySelector('.input')
const buttons=document.querySelectorAll('.btn')
const clear=document.querySelector('.btn-clear')
const del=document.querySelector('.btn-delete')
const equal=document.querySelector('.btn-equal')

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let value =e.target.value;
        scr.value += value;
    })
})

 clear.addEventListener('click',function(){
    scr.value="";
})

equal.addEventListener('click',function(){
    if(scr.value==""){
        scr.value="Please enter"
    }
    else{
        let ans= eval(scr.value);
        scr.value=ans;
    }
})

del.addEventListener('click',function (){
    if(scr.value==""){
        scr.value="";
    }
    else{
       
         let c=remove(scr.length().value);
          scr.remove=c;
          scr.value=scr;
        }
        
    }
)
