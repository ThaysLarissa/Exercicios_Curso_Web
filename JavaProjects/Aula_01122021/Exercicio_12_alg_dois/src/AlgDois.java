import java.util.Scanner;

public class AlgDois {
    public static void main(String[] args){
        System.out.println("Ler dois números");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número: ");
        int num1 = entrada.nextInt();
        System.out.println("Digite outro número: ");
        int num2 = entrada.nextInt();

        System.out.println("==== Opções ====");
        System.out.println("M média entre os números digitados ");
        System.out.println("S diferença do maior pelo menor");
        System.out.println("P produto entre os números digitados");
        System.out.println("D divisão do primeiro pelo segundo");
        System.out.println("==== Escolha um opção ====");
        String opcao = entrada.next();

        switch (opcao){
            case "M":
                double media = (num1 + num2) / 2;
                System.out.println("A média é: " + media);
                break;
            case "S":
                if(num1 > num2){
                    double dife = num1 - num2;
                    System.out.println("A diferança é: " + dife);
                }else{
                    double dife = num2 - num1;
                    System.out.println("A diferança é: " + dife);
                }
                break;
            case "P":
                double mult = num1 * num2;
                System.out.println("O produto é: " + mult);
                break;
            case "D":
                double divi = num1 / num2;
                System.out.println("A divisão é: " + divi);
                break;
            default:
                System.out.println("Opção inválida");
                break;
        }
        entrada.close();
    }
}