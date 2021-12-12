import java.util.Scanner;

public class PontoFlutuante{
    public static void main(String[] args){
        System.out.println("======== Ler dois números (Flutuante) =====");
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número: ");
        float num1 = entrada.nextFloat();
        System.out.println("Digite outro número: ");
        float num2 = entrada.nextFloat();

        if (num1 > num2) {
            System.out.println("Os numeros digitados: " + num2 + " e " + num1);
        }
        if (num2 > num1) {
            System.out.println("Os numeros digitados: " + num1 + " e " + num2);
        }
        entrada.close();
    }
}
