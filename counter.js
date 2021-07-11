var data = 0 ;
document.getElementById('counting') .innerText = data;

function increment() {
    if(data < 50){
        data+=1;
        document.getElementById('counting') .innerText = data ;

    }
    
    

}
function decrement() {
    if(data > 0){
        data-=1;
        document.getElementById('counting') .innerText = data ;

    }
   
    
}