const $btn = document.getElementById('btn-kick');
const $logs = document.querySelector('#logs');
/*const $mybtn = document.getElementById('btn-kick1');
const $myBtn = document.getElementById('btn-kick1');*/
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderProgressbarHP: renderProgressbarHP,
     renderHPLife: renderHPLife,
     renderHP: renderHP,
     startHP: startHP,
    changeHP:changeHP,
   //  mychangeHP: mychangeHP,
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
    character.renderHP();
    enemy.renderHP();
}

function startHP() {
    this.damageHP = 100;
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

function changeHP(count) {
    this.damageHP-= count;

        const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
             let writeDocument=log+'-'+count+''+this.damageHP+'/'+this.defaultHP
             console.log(writeDocument);
             logFight(writeDocument);
    

    if(this.damageHP<=0){
        this.damageHP=0;
        alert(this.name+'проиграл!!!');
        $btn.disabled=true;
    testDamageHP(character, enemy);
    }
    else{
    this.damageHP-= count;    
    }

    this.renderHP();//???

}

function testDamageHP (person1,person2) {
    if (person1.damageHP === 0 || person2.damageHP === 0) {
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

function generateLog(firstPerson, secondPerson) {
   const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name},не помня себя от испуга, ударил в предплечье врага.`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name}случайно нанес мощнейший удар.`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name}нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
   `${firstPerson.name} удивился, а ${secondPerson.name}пошатнувшись влепил подлый удар.`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name}пошатнувшись влепил подлый удар.`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника.`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.`,
];

function logFight(text) {
    const $logs=document.querySelector('.catch screen2');


      const $p=document.createElement('p');
      $p.innerText= text;
      $p.style.fontSize=12;
      //$p.style.color= #f100;
      $logs.insertBefore($p, $logs.children[0]);
      //$logs.insertBefore($p, $logs.children[0]);
}

//return logs[random(logs.length) - 1]

}

init();