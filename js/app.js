'use strict';

let seattle = {

    min: 23,
    max: 65,
    avg: 6.3,
    city: 'Seattle',
    numberOfCookie: [],
    total: 0,

    numOfCoocki: function () {

        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.ceil(customer * this.avg);
            this.numberOfCookie.push(cookie);
            this.total = this.total + cookie;


        }
        console.log(this.numberOfCookie, this.total);

    },


    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);



        for (let i = 0; i < this.numberOfCookie.length; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + this.total + ' cookies';
        ulElement.appendChild(liElement1);
    }

};



let tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    city: 'Tokyo',
    numberOfCookie: [],
    total: 0,
    numOfCoocki: function () {

        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.ceil(customer * this.avg);
            this.numberOfCookie.push(cookie);
            this.total = this.total + cookie;


        }
        console.log(this.numberOfCookie, this.total);

    },

    render: function () {
        const parentElement = document.getElementById('sales');

        
        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);



        for (let i = 0; i < this.numberOfCookie.length; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + this.total + ' cookies';
        ulElement.appendChild(liElement1);
    }




};
let dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    city: 'Dubai',
    numberOfCookie: [],
    total: 0,

    numOfCoocki: function () {

        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.ceil(customer * this.avg);
            this.numberOfCookie.push(cookie);
            this.total = this.total + cookie;


        }
        console.log(this.numberOfCookie, this.total);

    },


    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);



        for (let i = 0; i < this.numberOfCookie.length; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + this.total + ' cookies';
        ulElement.appendChild(liElement1);
    }





}
let paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    city: 'Paris',
    numberOfCookie: [],
    total: 0,

    numOfCoocki: function () {

        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.ceil(customer * this.avg);
            this.numberOfCookie.push(cookie);
            this.total = this.total + cookie;


        }
        console.log(this.numberOfCookie, this.total);

    },

    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);




        for (let i = 0; i < this.numberOfCookie.length; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + this.total + ' cookies';
        ulElement.appendChild(liElement1);
    }


};
let lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    city: 'Lima',
    numberOfCookie: [],
    total: 0,

    numOfCoocki: function () {

        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.ceil(customer * this.avg);
            this.numberOfCookie.push(cookie);
            this.total = this.total + cookie;


        }
        console.log(this.numberOfCookie, this.total);

    },


    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);



        for (let i = 0; i < this.numberOfCookie.length; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + this.numberOfCookie[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + this.total + ' cookies';
        ulElement.appendChild(liElement1);
    }



}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

};
seattle.numOfCoocki();
seattle.render();
tokyo.numOfCoocki();
tokyo.render();
dubai.numOfCoocki();
dubai.render();
paris.numOfCoocki();
paris.render();
lima.numOfCoocki();
lima.render();
