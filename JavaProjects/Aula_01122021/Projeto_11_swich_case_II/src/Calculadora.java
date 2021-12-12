import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args){
        System.out.println("===== Calculadora =====");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número: ");
        double num1 = entrada.nextDouble();
        System.out.println("Digite outro número: ");
        double num2 = entrada.nextDouble();
        System.out.println("===== Operação Matemática =====");
        System.out.println(" + Adicionar os números");
        System.out.println(" -  Subtrair os números");
        System.out.println(" * Multiplicar os números");
        System.out.println("===== Escolha uma opção =====");
        String oper = entrada.next();// Ler a opção escolhida

        switch (oper) {
            case "+":
                double soma = num1 + num2;
                System.out.println("Você escolheu adição");
                System.out.println("O número " + num1 + " + " + num2 + " = " + soma);
                break;
            case "-":
                double sub = num1 - num2;
                System.out.println("Você escolheu subtração");
                System.out.println("O número " + num1 + " - " + num2 + " = " + sub);
                break;
            case "*":
                double mult = num1 * num2;
                System.out.println("Você escolheu multiplicação");
                System.out.println("O número " + num1 + " * " + num2 + " = " + mult);
                break;
            default:
                System.out.println("Operação não disponível ou inválida!");
        }
        entrada.close();
    }
}