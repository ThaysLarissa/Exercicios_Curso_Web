import java.util.Scanner;

public class BonusIOS {
    public static void main(String[] args){
        System.out.println("==== Bônus no valor do salário =====");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite seu salário: ");
        float salario = entrada.nextFloat();
        System.out.println(" 1 - tempo de casa igual ou mais que 5 anos ");
        System.out.println(" 2 - tempo de casa menos de 5 anos ");
        System.out.println(" ==== Escolha um opção ===== ");
        int tempo = entrada.nextInt();

        switch (tempo){
            case 1:
                double salariVint = salario * 0.20;
                System.out.println("O valor do seu bônus é: " + salariVint);
                break;
            case 2:
                double salariDez = salario * 0.10;
                System.out.println("O valor do seu bônus é: " + salariDez);
                break;
            default:
                System.out.println("Opção invalida");
                break;
        }
        entrada.close();
    }
}
