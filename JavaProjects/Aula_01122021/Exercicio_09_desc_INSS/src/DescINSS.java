import java.util.Scanner;

public class DescINSS {
    public static void main(String[] args){
        System.out.println("=== Ler o salário e os descontos do INSS");

        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite seu salário: ");
        float salario = entrada.nextFloat();

        if(salario <= 600){
            System.out.println("Isento");
        }
        else if(salario > 600 && salario <= 1200){
            double desco = salario * 0.20;
            System.out.println("O desconto do INSS é " + desco);
        }
        else if(salario > 1200 && salario <= 2000){
            double desco = salario * 0.25;
            System.out.println("O desconto do INSS é " + desco);
        }
        else{
            double desco = salario * 0.30;
            System.out.println("O desconto do INSS é " + desco);
        }
        entrada.close();
    }
}