import java.util.Scanner;

public class LinhaCredito {
    public static void main(String [] args){
        System.out.println("=== Crédito para funcionários");

        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite seu salário: ");
        float salario = entrada.nextFloat();
        System.out.println("Digite o valor do crédito: ");
        float credito = entrada.nextFloat();
        double desco = salario * 0.30;

        if (credito <= desco){
            System.out.println("O empréstimo pode ser concedido");
        }
        else{
            System.out.println("O empréstimo não pode ser concedido");
        }
        entrada.close();
    }
}