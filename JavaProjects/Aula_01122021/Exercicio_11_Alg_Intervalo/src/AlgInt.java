import java.util.Scanner;

public class AlgInt {
    public static void main(String[] args){

        System.out.println("=== Ler de 1 a 7, e imprima o dia da semana");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número de 1 ao 7: ");
        int semana = entrada.nextInt();

        switch (semana){
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda-feira");
                break;
            case 3:
                System.out.println("Terça-feira");
                break;
            case 4:
                System.out.println("Quarta-feira");
                break;
            case 5:
                System.out.println("Quinta-feira");
                break;
            case 6:
                System.out.println("Sexta-feira");
                break;
            case 7:
                System.out.println("Sábado");
                break;
            default:
                System.out.println("Opção inválida!");
        }
    }
}