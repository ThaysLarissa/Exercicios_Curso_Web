//PIZZARIA

const pizza = [
    {
        id: 1,
        sabor: 'Queijo',
        ingredientes:['Massa ', 'Queijo ', 'Molho de tomate ', 'Oregano'],
        tamanho: ['P ','M ', 'G'],
        promoção: true,
        diaDaPromoção: 'Terça-feira'
    },
      {
        id: 2,
        sabor: 'Calabresa',
        ingredientes:['Massa ', 'Calabresa ', 'Molho de tomate ', 'Cebola'],
        tamanho: ['P ','M ', 'G'],
        promoção: false,
        diaDaPromoção: 'Sexta-feira'
    },
   {
        id: 3,
        sabor: 'Portuguesa',
        ingredientes:['Massa ', 'Queijo ', 'Presunto ', 'Molho de tomate'],
        tamanho: ['P ','M ', 'G'],
        promoção: false,
        diaDaPromoção: 'Quarta-feira'
    },
];

for(let cont = 0; cont < pizza.length; cont++){
let promoDia = pizza[cont].promoção
let valor = 50;

function promocaoDoDia(){
    if(promoDia == true){
        let desc = (valor * 0.25);
        let totalDesc = valor - desc;
        return `está por apenas $${totalDesc} reais, promoção do dia 25% de desconto. Proveite`
    
    }else{
        return 'não está na promoção';
    }
    
}
console.log(`A pizza ${pizza[cont].sabor.toUpperCase()} ou ${pizza[cont].sabor.substr(1,5)} de $${valor} reais, ${promocaoDoDia()}!`)
}