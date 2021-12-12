import java.io.Console;
import java.util.*;

public class ParImpar {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int Npar = 0;
        int Nimpar = 1;
        int n1 = 1;
        int n2;

        System.out.println("===== Imprima os números pares e impar =====");

        while (n1 <= 10){
            System.out.println("Digite um número: ");
            n2 = entrada.nextInt();
            n1 ++;

            if(n2 % 2 == 0)
                Npar = Npar + 1;
            if(n2 % 2 == 1)
                Nimpar = Nimpar + 1;
        }
        System.out.println("A qtd de números pares é: " + Npar);
        System.out.println("A qtd de números impar é: " + Nimpar);
        entrada.close();
    }
}