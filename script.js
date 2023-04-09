const result = document.getElementById('result');
let final=0;let damage=0;let strength=0;let crit=0;let post=0;let enchants = 0;let ent= 0;let sharp = 0;let fs=0;

function ofa(){
    if(ent==0){
        enchants = 500;
        ent = 1;
    }else if(ent == 1){
        enchants = enchants - 500;
        ent=0;
    }
}

function calculo(){
    final = 0;damage = document.querySelector('input#damage');strength = document.querySelector('input#strength');crit = document.querySelector('input#crit');post = 0;sharp = document.querySelector('input#sharp');fs = document.querySelector('input#fs');
    final = ((5+Number(damage.value))*(1+(Number(strength.value)/100))*(1+(Number(crit.value)/100))*(1+(enchants+(Number(sharp.value)*5)+(Number(fs.value)*25)/100))*(1+(post/100))).toFixed(0);
    result.innerHTML = `Your Damage is: ${final}`
}

