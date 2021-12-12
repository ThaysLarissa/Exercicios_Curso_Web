import java.util.Scanner;

public class Cardapio {
    public static void main(String[] args){
        System.out.println("===== Cardápio ====");


        Scanner entrada = new Scanner(System.in);
        System.out.println("== Código:   Produto:     Preço: ==");
        System.out.println("== 100    Cachorro Quente  R$1,20 ==");
        System.out.println("== 101    Bauru Simple     R$1,30 ==");
        System.out.println("== 102    Bauru com Ovo    R$1,50 ==");
        System.out.println("== 103    Hambúrguer       R$1,20 ==");
        System.out.println("== 104    Cheeseburguer    R$1,30 ==");
        System.out.println("== 105    Refrigerante     R$1,00 ==");
        System.out.println("===== Faça seu pedido ====");
        System.out.println("Digite o código do produto: ");
        int cod = entrada.nextInt();
        System.out.println("Quantidade do produto:  ");
        int quanti = entrada.nextInt();

        switch (cod){
            case 100:
                double total = 1.20 * quanti;
                System.out.println("O pedido é: "+ " Código " + cod + " Cachorro Quente " + " Quantidade " + quanti);
                System.out.println("O total a ser pago é: " + total);
                break;
            case 101:
                double totalB = 1.30 * quanti;
                System.out.println("O pedido é: "+ " Código " + cod + " Bauru Simple " + " Quantidade " + quanti);
                System.out.println("O total a ser pago é: " + totalB);
                break;
            case 102:
                double totalO = 1.50 * quanti;
                System.out.println("O pedido é: " + " Código " + cod + " Bauru com Ovo " + " Quantidade " + quanti);
                System.out.println("O total a ser pago é: " + totalO);
                break;
            case 103:
                double totalH = 1.20 * quanti;
                System.out.println("O pedido é: " + " Código " + cod + " Hambúrguer  " + " Quantidade "+ quanti);
                System.out.println("O total a ser pago é: " + totalH);
                break;
            case 104:
                double totalC = 1.30 * quanti;
                System.out.println("O pedido é: " + cod + " Cheeseburguer  " + quanti);
                System.out.println("O total a ser pago é: " + totalC );
                break;
            case 105:
                double totalR = 1.00 * quanti;
                System.out.println("O pedido é: " + cod + " Refrigerante   " + quanti);
                System.out.println("O total a ser pago é: " + totalR);
                break;
            default:
                System.out.println("Opção inválida!!");
        }

    }
}