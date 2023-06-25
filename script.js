// константы
var money_qnt = 0
var mps = 1
var cost = 50
var cost_crit = 1000
var crit = 1
var crit_might = 2






document.querySelector('#money').onclick = function () {
    if (crit > Math.random() * 100) {
        money_qnt = money_qnt + mps * crit_might;
        document.querySelector('#money-qnt').innerHTML = money_qnt.toFixed(2);
    } else {
        money_qnt = money_qnt + mps;
        document.querySelector('#money-qnt').innerHTML = money_qnt.toFixed(2);
    }
};

document.querySelector('#btn-mps').onclick = function () {
    if (money_qnt > cost) {
        mps = mps + 1;
        money_qnt = money_qnt - cost
        cost = cost * 1.15
        document.querySelector('#money-qnt').innerHTML = money_qnt.toFixed(2);
        document.querySelector('#mps').innerHTML = mps.toFixed(2);
        document.querySelector('#cost').innerHTML = cost.toFixed(2);
    }
};

document.querySelector('#btn-crit').onclick = function () {
    if (money_qnt > cost_crit) {
        crit = crit + 1;
        money_qnt = money_qnt - cost_crit
        cost_crit = cost_crit * 2.15
        document.querySelector('#money-qnt').innerHTML = money_qnt.toFixed(2);
        document.querySelector('#crit').innerHTML = crit.toFixed();
        document.querySelector('#cost_crit').innerHTML = cost_crit.toFixed(2);
    }
};