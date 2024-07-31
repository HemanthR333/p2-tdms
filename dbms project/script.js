const container = document.querySelector('.container');
const flight = document.querySelector('.flight');
const train = document.querySelector('.trains');
const bus = document.querySelector('.bus');
const hotel = document.querySelector('.Hotel');

const flight1 = document.querySelector('.flights');
const train1 = document.querySelector('.train');
const bus1 = document.querySelector('.buses');
const hotel1 = document.querySelector('.hotels');
flight.classList.add('active')
flight1.addEventListener('click', ()=> {
    flight.classList.add('active');
    train.classList.remove('active');
    bus.classList.remove('active');
    hotel.classList.remove('active');
});

train1.addEventListener('click', ()=> {
    train.classList.add('active');
    flight.classList.remove('active');
    bus.classList.remove('active');
    hotel.classList.remove('active');
});

bus1.addEventListener('click', ()=> {
    bus.classList.add('active');
    flight.classList.remove('active');
    train.classList.remove('active');
    hotel.classList.remove('active');
});
hotel1.addEventListener('click', ()=> {
    hotel.classList.add('active');
    flight.classList.remove('active');
    bus.classList.remove('active');
    train.classList.remove('active');
});

const wrapper = document.querySelector('.wrapper');
const Loginlink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn');
const iconclose = document.querySelector('.icon-close');

Registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});


Loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});