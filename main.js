const $btn = document.getElementById('btn-kick');
/*const $mybtn = document.getElementById('btn-kick1');
const $myBtn = document.getElementById('btn-kick1');*/
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
    // mychangeHP: mychangeHP,

}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
     renderHPLife: renderHPLife,
     renderHP: renderHP,
     startHP: startHP,
    changeHP:changeHP,
   //  mychangeHP: mychangeHP,
}

$btn.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

function init() {
    console.log('Start Game!');
    character.renderHP;
    enemy.renderHP;
}

function startHP() {
    this.startHP;
}

function renderHP() {
    this.renderHPLife;
    this.renderProgressbarHP;
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / '+ this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный '+ this.name +' проиграл бой!')
    }
    this.damageHP -= count;

    renderHP();
}

/*function mychangeHP() {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный '+ this.name +' проиграл бой!')
    }
    this.damageHP -= count;

    renderHP();
}*/

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();