
let current; //Current value
let currentnew;
let intval; // Initial value
let passcost;
let overallcost;
let passes;
let count;
let duration;
let durationcost;
let additionalannual;
let additionalfood;


const passchoice = document.getElementById("passes");
let passitem = passchoice.options[passchoice.selectedIndex].value;
const countchoice = document.getElementById("num");
const durationchoice = document.getElementsByName("duration");
const addannual = document.getElementById("annual");
const addfood = document.getElementById("food");

const btnadd = document.getElementById("add");
const btnplace = document.getElementById("place");



const txtcost = document.getElementById("outputcost");
const txtoverall = document.getElementById("outputoverall");



window.addEventListener("load", init);





function init() {
    passes = "Foreigner Adult";
    count = parseInt(countchoice.value);
    duration = "3 Hrs";
    durationcost = 0.00;
    additionalannual = "Not Selected";
    additionalfood = "Not Selected";

    current = 0;


    txtcost.innerText = `Cost: ${current.toFixed(2)}  LKR`; 

}




durationchoice.forEach(item => item.addEventListener("change", checkDuration));

function checkDuration() {
    const passchoice = document.getElementById("passes");
    if (document.getElementById("passes").value == "localadult") {
        if (this.value == "3hours")  { //sizeChoices[0] when this.value is used
            duration = "3 Hrs";
            durationcost = 0.00;
            passcost = 1000.00;
            count = parseInt(countchoice.value);
        } else if (this.value == "halfday") {
            duration = "12 Hrs";
            durationcost = 250.00;
            passcost = 1000.00;
            count = parseInt(countchoice.value);
        } else  if (this.value == "fullday") {
            duration = "24 Hrs";
            durationcost = 500.00;
            passcost = 1000.00;
            count = parseInt(countchoice.value); 
        } else {
            duration = "48 Hrs";
            durationcost = 750.00;
            passcost = 1000.00;
            count = parseInt(countchoice.value);
        }
    
    } else if (document.getElementById("passes").value == "localchild") {
        if (this.value == "3hours")  { //sizeChoices[0] when this.value is used
            duration = "3 Hrs";
            durationcost = 0.00;
            passcost = 500.00;
            count = parseInt(countchoice.value);
        } else if (this.value == "halfday") {
            duration = "12 Hrs";
            durationcost = 250.00;
            passcost = 500.00;
            count = parseInt(countchoice.value);
        } else  if (this.value == "fullday") {
            duration = "24 Hrs";
            durationcost = 500.00;
            passcost = 500.00;
            count = parseInt(countchoice.value); 
        } else {
            duration = "48 Hrs";
            durationcost = 750.00;
            passcost = 500.00;
            count = parseInt(countchoice.value);
        }
    } else if (document.getElementById("passes").value == "foriegnadult"){
        if (this.value == "3hours")  { //sizeChoices[0] when this.value is used
            duration = "3 Hrs";
            durationcost = 0.00;
            passcost = 5000.00;
            count = parseInt(countchoice.value);
        } else if (this.value == "halfday") {
            duration = "12 Hrs";
            durationcost = 250.00;
            passcost = 5000.00;
            count = parseInt(countchoice.value);
        } else  if (this.value == "fullday") {
            duration = "24 Hrs";
            durationcost = 500.00;
            passcost = 5000.00;
            count = parseInt(countchoice.value); 
        } else {
            duration = "48 Hrs";
            durationcost = 750.00;
            passcost = 5000.00;
            count = parseInt(countchoice.value);
        }     
    }else if (document.getElementById("passes").value == "foreignchild"){
       if (this.value == "3hours") {
            duration = "3 Hrs";
            durationcost = 0.00;
            passcost = 2500.00;
            count = parseInt(countchoice.value);
       }else if (this.value == "halfday") {
            duration = "12 Hrs";
            durationcost = 250.00;
            passcost = 2500.00;
            count = parseInt(countchoice.value);
       }else if (this.value == "fullday") {
            duration = "24 Hrs";
            durationcost = 500.00;
            passcost = 2500.00;
            count = parseInt(countchoice.value);
       }else {
           duration = "48 Hrs";
            durationcost = 750.00;
            passcost = 2500.00;
            count = parseInt(countchoice.value);
       }
    }else if (document.getElementById("passes").value == "annualloacal") {
        if (this.value == "3hours") {
            passcost = 4500.00;
           durationcost = 0.00;
            count = parseInt(countchoice.value);
       }else if (this.value == "halfday") {
           passcost = 4500.00;
           durationcost = 0.00;
           count = parseInt(countchoice.value);
       }else if (this.value == "fullday") {
           passcost = 4500.00;
           durationcost = 0.00;
           count = parseInt(countchoice.value);
       }else {
           passcost = 4500.00;
           durationcost = 0.00;
           count = parseInt(countchoice.value);
       }
    }else if (document.getElementById("passes").value == "annualforeign") {
        if (this.value == "3hours") {
            passcost = 15000.00;
            durationcost = 0.00;
            count = parseInt(countchoice.value);
       }else if (this.value == "halfday") {
           passcost = 15000.00;
           durationcost = 0.00;
           count = parseInt(countchoice.value);
       }else if (this.value == "fullday") {
           passcost = 15000.00;
           durationcost = 0.00;
           count = parseInt(countchoice.value);
       }else {
           passcost = 15000.00;
           durationcost = 0.00;
           count = parseInt(countchoice.value);
       }
    }

    
    currentnew = (durationcost + passcost) * count;
    txtcost.innerText = `Cost: ${currentnew.toFixed(2)}LKR`;
}

btnAdd.addEventListener("click", addToOrder);

function addToOrder(evt) {
    if (theForm.checkValidity()) {
        evt.preventDefault();
        let p = passchoice.options[passchoice.selectedIndex].value;
        txtoverall.innerText = `Pass Type: ${p}`;
    }
}


/*
passchoice.forEach(item => item.addEventListener("change", checkPass));


// Function to calculate the cost depending in the duration
function checkPass() {


    if (this.value == "localadult") {
        passes = "Local Adult";
        passcost = 1000.00;

    }else if (this.value == "localchild") {
        passes = "Local Child";
        passcost = 500.00;

    }else if (this.value == "foriegnadult") {
        passes = "Foriegn Adult";
        passcost = 5000.00;

    }else if (this.value == "foreignchild") {
        passes = "Foriegn Child";
        passcost = 2500.00;

    }else if (this.value == "annualloacal") {
        passes = "Local Annual";
        passcost = 15000.00;

    }else {
        passes = "Foriegn Annual"
        passcost = 4500.00;
    }


}
*/



























