function calculate(var1,var2,sum){
    var1= parseInt(document.getElementById('inputboxmat1').value);
    var2= parseInt(document.getElementById('inputboxmat2').value);

    if(document.getElementById('adding').checked){
        sum=var1+var2;
    }
    else if(document.getElementById('subtraction').checked){
        sum=var1-var2;
    }
    else if(document.getElementById('multiplication').checked){
        sum=var1*var2;
    }
    else if(document.getElementById('division').checked){
        sum=var1/var2;
    }
    
    document.getElementById("calcResult").innerHTML=sum; 
}

function palindrome(var1){
    let array = var1.split("");
    let slowo="";

    for (let i = array.length-1; i >= 0; i--){
        slowo+=array[i];        
    }
    
    if(var1==slowo){
        return true;
    }
    else{
        return false;
    }

}


function handlePalindromeForm(form){
    let formValue = form.inputbox2.value;
    document.getElementById("palResult").innerHTML = palindrome(formValue);

}


function cyfry(array){ 
    array = [1,5,10,15];
    return array[array.length-2]

}
console.log(cyfry([1,5,10,15]));



function recuration(a,n){
console.log(a);
let b=a+1;

if(b<=n){
    recuration(b,n);
}
else{
    return;
}

}
console.log(recuration(8,11));