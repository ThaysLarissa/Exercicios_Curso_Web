import java.util.Scanner;

public class Decrescente {
    public static void main(String [] args){
        Scanner entrada = new Scanner(System.in);
        double n1;
        double n2;

        System.out.println("Digite um número: ");
        n1 = entrada.nextDouble();
        System.out.println("Digite outro número que seja diferente do anterior: ");
        n2 = entrada.nextDouble();

        if( n1 > n2){
            System.out.println("A sequencia decrescente é: " + n1 + ", " + n2);

        }
        else{
            System.out.println("A sequencia decrescente é: " + n2 + ", " + n1);
        }

        entrada.close();
    }
}