'use strict';

let hour = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

const parentElement = document.getElementById('sales');
const table = document.createElement('table');
parentElement.appendChild(table);


function tableHeader() {
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    const tableHeader = document.createElement('th');
    tableHeader.textContent = '';
    tableRow.appendChild(tableHeader);

    for (let i = 0; i < hour.length; i++) {
        const tableHeader2 = document.createElement('th');
        tableHeader2.textContent = hour[i];
        tableRow.appendChild(tableHeader2);
    }
    const tableHeader3 = document.createElement('th');
    tableHeader3.textContent = 'Daily Location Total';
    tableRow.appendChild(tableHeader3);
}

function tableFooter() {
    const tableFoot = document.createElement('tfoot');
    table.appendChild(tableFoot);
    const lastRow = document.createElement('tr');
    tableFoot.appendChild(lastRow);
    const lastColomn = document.createElement('td');
    lastColomn.textContent = 'Total';
    lastRow.appendChild(lastColomn);


    for (let i = 0; i < hour.length; i++) {
        const lastR = document.createElement('td');
        lastR.textContent = seattle.numberOfCookie[i] + tokyo.numberOfCookie[i] + paris.numberOfCookie[i] + dubai.numberOfCookie[i] + lima.numberOfCookie[i];
        lastRow.appendChild(lastR);
    }
    const lastTd = document.createElement('td');
    lastTd.textContent = seattle.total+tokyo.total+paris.total+dubai.total+lima.total;
    lastRow.appendChild(lastTd);




}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

};


function sales(min, max, avg, city) {
    this.min = min;
    this.city = city;
    this.max = max;
    this.avg = avg;
    this.numberOfCookie = [];
    this.total = 0;
}


sales.prototype.cookiePurchased = function () {

    for (let i = 0; i < 14; i++) {

        let customer = getRandomInt(this.min, this.max);
        let cookie = Math.ceil(customer * this.avg);
        this.numberOfCookie.push(cookie);
        this.total = this.total + cookie;


    }
    console.log(this.numberOfCookie, this.total);

};

sales.prototype.render = function () {

    const tableRow1 = document.createElement('tr');
    table.appendChild(tableRow1);
    const tableBody = document.createElement('td');
    tableRow1.appendChild(tableBody);
    tableBody.textContent = this.city;


    for (let i = 0; i < this.numberOfCookie.length; i++) {


        const tableBody1 = document.createElement('td');
        tableBody1.textContent = this.numberOfCookie[i];
        tableRow1.appendChild(tableBody1);


    }
    const tableBody2 = document.createElement('td');
    tableBody2.textContent = this.total;
    tableRow1.appendChild(tableBody2);
};



tableHeader();
let seattle = new sales(23, 65, 6.3, 'Seattle')
seattle.cookiePurchased();
seattle.render();
let tokyo = new sales(3, 24, 1.2, 'Tokyo')
tokyo.cookiePurchased();
tokyo.render();
let dubai = new sales(11, 38, 3.7, 'Dubai')
dubai.cookiePurchased();
dubai.render();
let paris = new sales(20, 38, 2.3, 'Paris')
paris.cookiePurchased();
paris.render();
let lima = new sales(2, 16, 4.6, 'Lima')
lima.cookiePurchased();
lima.render();
tableFooter();
