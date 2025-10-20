const $btn = document.getElementById('btn-kick');
/*const $mybtn = document.getElementById('btn-kick1');
const $myBtn = document.getElementById('btn-kick1');*/
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 90,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderProgressbarHP: renderProgressbarHP,
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
    renderProgressbarHP: renderProgressbarHP,
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
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / '+ this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHPchangeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный '+ this.name +' проиграл бой!');
        $btn.disabled = true;
    testDamageHP (character, enemy);
    }
    else{
    personalbar.damageHP -= count;    
    this.damageHP -= count;
    }
    renderHP();
}

function testDamageHP (person1,person2) {
    if (person1.damageHP == 0 || person2.damageHP == 0) {
        startHP(enemy);
        startHP(character);
        enemy.startHP();
        character.startHP();
    }
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