let calculadora = document.getElementById('calculadora');
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function limpar(){
    document.getElementById('resultado').innerHTML = '';
}
function voltar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = '';
    }
}


function activeR(){
    calculadora.classList.remove('activeR','activeG','activeB','activeA');
    calculadora.classList.add('activeR');
}
function activeG(){
    calculadora.classList.remove('activeR','activeG','activeB','activeA');
    calculadora.classList.add('activeG');
}
function activeB(){
    calculadora.classList.remove('activeR','activeG','activeB','activeA');
    calculadora.classList.add('activeB');
}
function activeA(){
    calculadora.classList.remove('activeR','activeG','activeB','activeA');
    calculadora.classList.add('activeA');
}
