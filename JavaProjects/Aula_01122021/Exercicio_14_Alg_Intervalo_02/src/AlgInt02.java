import java.util.Scanner;

public class AlgInt02 {
    public static void main(String[] args){
        System.out.println("==== Aumento de acordo com o palno de trabalho ====");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite seu salário: ");
        float salario = entrada.nextFloat();
        System.out.println("===== Plano de trabalho ===== ");
        System.out.println("A === 10%");
        System.out.println("B === 15%");
        System.out.println("C === 20%");
        System.out.println("===== Escolha um plano ===== ");
        String plano = entrada.next();

        switch (plano){
            case "A":
                double totalA = (salario * 0.10) + salario;
                System.out.println("Seu novo salário é: " + totalA);
                break;
            case "B":
                double totalB = (salario * 0.15) + salario;
                System.out.println("Seu novo salário é: " + totalB);
                break;
            case "C":
                double totalC = (salario * 0.20) + salario;
                System.out.println("Seu novo salário é: " + totalC);
                break;
            default:
                System.out.println("Plano inválido");
        }
        entrada.close();
    }
}