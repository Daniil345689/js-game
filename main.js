const $btn = document.getElementById('btn-kick');
сonst $mybtn = document.getElementById('btn-kick1');
const $myBtn = document.getElementById('btn-kick1');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 90,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderHP: renderHP,
    startHP: startHP,
    changeHP:changeHP,
    mychangeHP: mychangeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHPLife: renderHPLife,
    renderHP: renderHP,
    startHP: startHP,
    changeHP:changeHP,
    mychangeHP: mychangeHP,
}

$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / '+ person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный '+ person.name +' проиграл бой!')
    }
    person.damageHP -= count;

    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}


init();
