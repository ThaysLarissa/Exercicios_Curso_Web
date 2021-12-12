import java.util.Scanner;

public class AlturaSexo {
    public static void main(String[] args){
        System.out.println("===== Calculando IMC =====");

        Scanner entrada = new Scanner(System.in);

        System.out.println("Qual a sua altura? ");
        float altura = entrada.nextFloat();
        System.out.println("=====  Qual seu sexo: =====");
        System.out.println(" Digite 1 se for mulher");
        System.out.println(" Digite 2 se for Homem");
        int sex = entrada.nextInt();// Ler a opção escolhida

        switch (sex) {
            case 1:
                double pesoF = (62.1 * altura) - 44.7;
                System.out.println("Seu peso ideal é:  " + pesoF);
                break;
            case 2:
                double pesoM = (72.7 * altura) - 58;
                System.out.println("Seu peso ideal é:  " + pesoM);
                break;
            default:
                System.out.println("Operação não disponível ou inválida!");
        }
        entrada.close();
    }
}