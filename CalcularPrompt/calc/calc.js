function raiz(){
    var num1 = prompt('Numero 1 ');
    num1 = parseInt(num1);
    result = Math.sqrt(num1);

    document.write('A raiz quadrade é ' + result)
}

function maior(){
    var num1 = prompt('Numero 1 ');
    var num2 = prompt('Numero 2 ');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(num1 > num2){
        document.write(num1+' É o maior')
    }else{
        document.write(num2+' É o maior')
    }
}

function expoente(){
    var num1 = prompt('Numero 1 ');
    var num2 = prompt('Numero 2 ');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    result = num1 ** num2;
    document.write('O expoente é ' + result)


}

function soma(){

    var num1 = prompt('Numero 1 ');
    var num2 = prompt('Numero 2 ');

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    result = num1+num2;

    document.write('A soma é ' + result)
}


function maiuscula(){
    var frase = prompt('Digite a frase : ')
    frase = frase.toUpperCase(frase);

    document.write('Maiusculo: '+frase);
}
function calculo(){

   var input = document.querySelector("#escolha");
   var op = input.value;

   op = parseInt(op);
        
    switch(op){
        case 1:
            raiz();
        break

        case 2:
            maior()
        break

        case 3:
            expoente()
        break

        case 4:
            soma()
        break

        case 5:
            maiuscula()
        break

        default:
            document.write('Valor inválido')
        break
}
}