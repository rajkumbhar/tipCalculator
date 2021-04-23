
var tip = 0;
function setFeedback(feedback) {




    document.getElementById('drop-button').innerHTML = feedback;
    var btn = document.getElementById('drop-button');
    
    if(feedback == "Outstanding 🤩") {
         tip = 30;
    }
    else if(feedback == "Good 😃") {
         tip = 20;
    }
    else if(feedback == "It was Ok 😀") {
         tip = 15;
    }
    else if(feedback == "Bad 😖") {
         tip = 10;
    }
    else if(feedback == "Terrible 😤") {
         tip = 5;
    }

    
} 

function check(event) {
     event.preventDefault();
}

function calculate() {


    var amount = document.getElementById('amount').value;
    var people = document.getElementById('people').value;

    if (amount > 0 && people > 0) {
   var tipAmount = (amount * tip) / 100;
    var totalAmount =  eval(tipAmount) + eval(amount);
    var perHeadAmt = totalAmount / people;

    document.getElementById('totalAmount').innerHTML = "Total Amount : Rs. "+ Math.round(totalAmount)+"/-";
    document.getElementById('PerHead').innerHTML = "Per person Share : Rs. "+ Math.round(perHeadAmt)+"/-"; 
    }
    else{
        alert("Please check Bill Amount or Number of people");
    }
    
}
