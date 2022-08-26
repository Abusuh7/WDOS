let Cardname = document.getElementById("cardname");
let Cardadd = document.getElementById("cardadd");
let Cardnum = document.getElementById("cardnum");
let Cardholder = document.getElementById("cardholder");
let Datebtn = document.getElementById("datebtn");
let Yearbtn = document.getElementById("yearbtn");
let Cvvbtn = document.getElementById("cvvbtn");
let Amountbtn = document.getElementById("amountbtn");

function subbtn(){

        if(Cardname.value != "" && Cardadd.value != "" && Cardnum.value != "" && Cardholder.value != "" && Datebtn.value != "month" && Yearbtn.value != "year"  && Amountbtn.value != "amount" && Cvvbtn.value != ""){
            alert("Thank You " + (Cardname.value) + " You Have" + " Successfully Donated " + "Rs" + (Amountbtn.value));
        }else if (Cardname.value == ""){
            alert("Please Fill The Name field");
        }else if (Cardadd.value == ""){
            alert("Please Fill The Address field");
        }else if (Cardnum.value == ""){
            alert("Please Fill The Card Number field");
        }else if (Cardholder.value == ""){
            alert("Please Fill The Card Holder field");
        }else if (Amountbtn.value == "amount"){
                alert("Please Fill The Amount field");
        }else if (Datebtn.value == "month"){
            alert("Please Fill The Date field");
        }else if (Yearbtn.value == "year"){
            alert("Please Fill The Year field");
        }else {
            alert("Please Fill The Cvv field");
        }
    
}
 

