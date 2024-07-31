const container = document.querySelector('.container');
const flight = document.querySelector('.flight');
const train = document.querySelector('.Train');
const flight1 = document.querySelector('.flight-1');
const train1 = document.querySelector('.train-1');

flight1.addEventListener('click', ()=> {
    flight.classList.add('active');
    train.classList.remove('active')
});

train1.addEventListener('click', ()=> {
    train.classList.add('active');
    flight.classList.remove('active');
});