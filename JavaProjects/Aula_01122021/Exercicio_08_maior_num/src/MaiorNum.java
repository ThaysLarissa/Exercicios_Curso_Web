import java.util.Scanner;

public class MaiorNum {
    public static void main(String[] args){
        System.out.println("==== Ler 3 números inteiros ====");

        Scanner entrada = new Scanner (System.in);

        System.out.println("Digite um número: ");
        int num1 = entrada.nextInt();
        System.out.println("Digite outro número: ");
        int num2 = entrada.nextInt();
        System.out.println("Digite outro número: ");
        int num3 = entrada.nextInt();

        if(num1 == num2 && num1 == num3){
            System.out.println("Os números são iguais");
        }
        else if(num1 > num2 && num1 > num3){
            System.out.println("O maior número é: " + num1);
        }
        else if(num2 > num1 && num2 > num3){
            System.out.println("O maior número é: " + num2);
        }
        else {
            System.out.println("O maior número é: " + num3);
        }
        entrada.close();
    }
}