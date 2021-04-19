'use strict';

let seattle = {

    min: 23,
    max: 65,
    avg: 6.3,
    city: 'Seattle',

    numOfCoocki: function () {
        let total = 0;
        let arr = [];
        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.floor(customer * this.avg);
            arr.push(cookie);
            total = total + cookie;
            //console.log(customer);

        }
        return [arr, total];
    },

    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);

        let result = this.numOfCoocki();
        let arr = result[0];
        let total = result[1];

        for (let i = 0; i < 14; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + total + ' cookies';
        ulElement.appendChild(liElement1);
    }

};



let tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    city: 'Tokyo',
    numOfCoocki: function () {
        let total = 0;
        let arr = [];
        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.floor(customer * this.avg);
            arr.push(cookie);
            total = total + cookie;
            //console.log(customer);

        }
        return [arr, total];
    },

    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);


        let result = this.numOfCoocki();
        let arr = result[0];
        let total = result[1];

        for (let i = 0; i < 14; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + total + ' cookies';
        ulElement.appendChild(liElement1);
    }




};
let dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    city: 'Dubai',
    numOfCoocki: function () {
        let total = 0;
        let arr = [];
        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.floor(customer * this.avg);
            arr.push(cookie);
            total = total + cookie;
            //console.log(customer);

        }
        return [arr, total];
    },

    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);

        let result = this.numOfCoocki();
        let arr = result[0];
        let total = result[1];

        for (let i = 0; i < 14; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + total + ' cookies';
        ulElement.appendChild(liElement1);
    }




}
let paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    city: 'Paris',

    numOfCoocki: function () {
        let total = 0;
        let arr = [];
        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.floor(customer * this.avg);
            arr.push(cookie);
            total = total + cookie;
            //console.log(customer);

        }
        return [arr, total];
    },

    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);

        let result = this.numOfCoocki();
        let arr = result[0];
        let total = result[1];

        for (let i = 0; i < 14; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + total + ' cookies';
        ulElement.appendChild(liElement1);
    }



};
let lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    city: 'Lima',
    numOfCoocki: function () {
        let total = 0;
        let arr = [];
        for (let i = 0; i < 14; i++) {

            let customer = getRandomInt(this.min, this.max);
            let cookie = Math.floor(customer * this.avg);
            arr.push(cookie);
            total = total + cookie;
            //console.log(customer);

        }
        return [arr, total];
    },

    render: function () {
        const parentElement = document.getElementById('sales');

        const ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = this.city;
        ulElement.appendChild(labelElement);


        let result = this.numOfCoocki();
        let arr = result[0];
        let total = result[1];

        for (let i = 0; i < 14; i++) {

            if (i < 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = i + 6 + 'AM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }

            else if (i == 6) {
                const liElement1 = document.createElement('li');
                liElement1.textContent = '12PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);
            }
            else {

                const liElement1 = document.createElement('li');
                liElement1.textContent = i - 6 + 'PM :' + arr[i] + ' cookies';
                ulElement.appendChild(liElement1);

            }

        }
        const liElement1 = document.createElement('li');
        liElement1.textContent = 'Total: ' + total + ' cookies';
        ulElement.appendChild(liElement1);
    }



}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

