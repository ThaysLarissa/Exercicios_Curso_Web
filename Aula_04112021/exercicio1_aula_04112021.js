// Exercicio de Ajuste Salarial

const sal = 1693;

if (sal <= 280){
    novosal= sal+(sal*0.20);
    console.log('O salário que era de ' + sal + ' teve reajuste de 20% e foi para ' + novosal);
}
else if (sal > 280 && sal <= 700){
    novosal= sal+(sal*0.15);
    console.log('O salário que era de ' + sal + ' teve reajuste de 15% e foi para ' + novosal);
}
else if (sal > 700 && sal <= 1500){
    novosal= sal+(sal*0.10);
    console.log('O salário que era de ' + sal + ' teve reajuste de 10% e foi para ' + novosal);
}
else {
    novosal= sal+(sal*0.05);
    console.log('O salário que era de ' + sal + ' teve reajuste de 5% e foi para ' + novosal);
}