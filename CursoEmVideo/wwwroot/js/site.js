// aula 9
var area = document.getElementById('area');
area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrar);
area.addEventListener('mouseout', sair);

function clicar() {
    area.innerText = 'Clicou!';
    area.style.background = 'red';
}

function entrar() {
    area.innerText = 'Entrou!';
}

function sair() {
    area.innerText = 'Saiu!';
    area.style.background = 'green';
}

// aula 10

var tn1 = document.getElementById('txtn1');
var tn2 = document.getElementById('txtn2');
var res = document.getElementById('res');
res.addEventListener('click', somar);

function somar() {
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var soma = n1 + n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`;
}
