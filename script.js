function calculo(){
    let final = 0;let damage = document.querySelector('input#damage');let strength = document.querySelector('input#strength');let crit = document.querySelector('input#crit');let base = 0; let post = 0;
    const result = document.getElementById('result');
    final = ((5+Number(damage.value))*(1+(Number(strength.value)/100))*(1+(Number(crit.value)/100))*(1+(base/100))*(1+(post/100))).toFixed(0);
    result.innerHTML = `Your Damage is: ${final}`
}
