let currentitem = {
    pass: '-',
    quantity: 0,
    duration: 0,
    foodtoken: '-',
    cost: 0
};

let totalCost = 0;

function updateInfo() {
    currentCost = 0;
    let foodtokenval = 0;
    let pass = document.querySelector('#pass').value;
    let quantity = document.querySelector('#num').value;
    let duration = document.querySelector('#duration').value;
    let foodtoken = document.querySelector('#foodtoken');


    // check cost

    // annualpass
    if ((pass == 'Annual Pass-Local') || (pass == 'Annual Pass-Foreign')) {
        if (pass == 'Annual Pass-Local') {
            currentCost = (4500) * quantity;
            document.querySelector('#displayduration').innerHTML = '-';
            foodtoken.checked = false;

        } else {
            currentCost = (15000) * quantity;
            document.querySelector('#displayduration').innerHTML = '-';
            foodtoken.checked = false;
        }
    }

    // 3hours
    if ((pass == 'Local Adult Pass' && duration == '3 Hours') || (pass == 'Local Child Pass' && duration ==
            '3 Hours')) {
        if (pass == 'Local Adult Pass') {
            currentCost = (1000 + foodtokenval) * quantity;
        } else {
            currentCost = (500 + foodtokenval) * quantity;
        }
    }
    if ((pass == 'Foreign Adult Pass' && duration == '3 Hours') || (pass == 'Foreign Child Pass' && duration ==
            '3 Hours')) {
        if (pass == 'Foreign Adult Pass') {
            currentCost = (5000 + foodtokenval) * quantity;
        } else {
            currentCost = (2500 + foodtokenval) * quantity;
        }
    }

    // 1/2hours
    if ((pass == 'Local Adult Pass' && duration == '1/2 Day') || (pass == 'Local Child Pass' && duration ==
            '1/2 Day')) {
        if (pass == 'Local Adult Pass') {
            currentCost = (1000 + foodtokenval + 250) * quantity;
        } else {
            currentCost = (500 + foodtokenval + 250) * quantity;
        }
    }
    if ((pass == 'Foreign Adult Pass' && duration == '1/2 Day') || (pass == 'Foreign Child Pass' && duration ==
            '1/2 Day')) {
        if (pass == 'Foreign Adult Pass') {
            currentCost = (5000 + foodtokenval + 500) * quantity;
        } else {
            currentCost = (2500 + foodtokenval + 500) * quantity;
        }
    }

    // full day
    if ((pass == 'Local Adult Pass' && duration == 'Full Day') || (pass == 'Local Child Pass' && duration ==
            'Full Day')) {
        if (pass == 'Local Adult Pass') {
            currentCost = (1000 + foodtokenval + 500) * quantity;
        } else {
            currentCost = (500 + foodtokenval + 500) * quantity;
        }
    }
    if ((pass == 'Foreign Adult Pass' && duration == '1/2 Day') || (pass == 'Foreign Child Pass' && duration ==
            'Full Day')) {
        if (pass == 'Foreign Adult Pass') {
            currentCost = (5000 + foodtokenval + 1000) * quantity;
        } else {
            currentCost = (2500 + foodtokenval + 1000) * quantity;
        }
    }




    // Auto-update Values
    if (pass) {
        document.querySelector('#displaypass').innerHTML = pass;
    }
    if (quantity > 0) {
        document.querySelector('#displayquantity').innerHTML = quantity;
    } else {
        document.querySelector('#displayquantity').innerHTML = '-';
    }
    if (duration) {
        document.querySelector('#displayduration').innerHTML = duration;
        currentitem.duration = duration;
    }
    if (foodtoken.checked) {
        document.querySelector('#displayfoodtoken').innerHTML = 'Food provided';
        currentitem.foodtoken = 'Food Provided';
        currentCost = currentCost + 500;
    } else {
        document.querySelector('#displayfoodtoken').innerHTML = '-';
        currentitem.foodtoken = '-';
    }
    if (currentCost > 0) {
        document.querySelector('#displaycost').innerHTML = currentCost;
    } else {
        document.querySelector('#displaycost').innerHTML = '-';
    }

    // 
    if (pass == 'Annual Pass-Local' || pass == 'Annual Pass-Foreign') {
        document.querySelector('#displayduration').innerHTML = '-';
        currentitem.duration = '-';
        foodtoken.checked = false;
    }



    // disable inputs based on pass
    if (pass == "Annual Pass-Local" || pass == 'Annual Pass-Foreign') {
        document.querySelector('#duration').disabled = true;
        document.querySelector('#foodtoken').disabled = true;
    } else {
        document.querySelector('#duration').disabled = false;
        document.querySelector('#foodtoken').disabled = false;
    }

    currentitem.pass = pass;
    currentitem.quantity = quantity;
    currentitem.cost = currentCost;

}

function addOrder() {
    document.querySelector('#displaypass').innerHTML = '-';
    document.querySelector('#displayquantity').innerHTML = '-';
    document.querySelector('#displayduration').innerHTML = '-';
    document.querySelector('#displayfoodtoken').innerHTML = '-';
    document.querySelector('#displaycost').innerHTML = '0';



    let pass = document.querySelector('#pass').value;
    let quantity = document.querySelector('#num').value;
    if (pass !== '-' && quantity) {
        totalCost = totalCost + currentitem.cost;
        document.querySelector('#total').innerHTML = totalCost;
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'order-list-overall');

        let li1 = document.createElement('li');
        li1.appendChild(document.createTextNode(currentitem.pass))
        ul.appendChild(li1);

        let li2 = document.createElement('li');
        li2.appendChild(document.createTextNode(currentitem.quantity));
        ul.appendChild(li2);

        let li3 = document.createElement('li');
        li3.appendChild(document.createTextNode(currentitem.duration));
        ul.appendChild(li3);

        let li4 = document.createElement('li');
        li4.appendChild(document.createTextNode(currentitem.foodtoken));
        ul.appendChild(li4);

        let li5 = document.createElement('li');
        li5.appendChild(document.createTextNode(currentitem.cost))
        ul.appendChild(li5);

        document.querySelector('.overall-order-list').appendChild(ul)
    } else {
        window.alert('Please fill in the fields in order to add order');
    }

    document.querySelector('#pass').value = '';
    document.querySelector('#num').value = '';
    document.querySelector('#duration').value = '';
    document.querySelector('#foodtoken').checked = false;

}

function placeOrder() {
    window.alert('Thank you for your custom reservation!');
    let items = document.querySelectorAll('.order-list-overall');
    document.querySelector('#total').innerHTML = 0;
    items.forEach(element => {
        element.remove();
    });

}

function addFavourite() {

    let pass = document.querySelector('#pass').value;
    let quantity = document.querySelector('#num').value;
    if (pass !== '-' && quantity) {
        localStorage.setItem('currentorder', JSON.stringify(currentitem));
        window.alert('Added to favorite');
    } else {
        window.alert('Please fill in the fields in order to add favorites');
    }


}

function orderFavourite() {
    let retrievedObject = localStorage.getItem('currentorder');
    let object = JSON.parse(retrievedObject);
    currentitem.pass = object.pass;
    currentitem.quantity = object.quantity;
    currentitem.quantity = object.quantity;
    currentitem.foodtoken = object.foodtoken;
    currentitem.cost = object.cost;
    addOrder();
}
let points = 0;

function checkLoyalty() {
    let items = document.querySelectorAll('.order-list-overall');
    let displaypoints = '';
    if (items.length > 3) {
        points = items.length * 20;
        localStorage.setItem('points', points);
        displaypoints = localStorage.getItem('points');
        window.alert(`Your loyalty points are ${displaypoints}`);
    } else {
        // displaypoints = localStorage.getItem('points');
        // window.alert(`Your loyalty points are ${displaypoints}`);
        window.alert('You must have more than 3 orders to earn loyalty points');
    }
}