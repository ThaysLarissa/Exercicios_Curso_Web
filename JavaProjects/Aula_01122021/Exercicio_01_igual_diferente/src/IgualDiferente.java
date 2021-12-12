import java.util.Scanner;

public class IgualDiferente {
    public static void main(String[] args){
        System.out.println("======== Ler dois números inteiros =========");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número: ");
        int num1 = entrada.nextInt();
        System.out.println("Digite outro número: ");
        int num2 = entrada.nextInt();

        if(num1 == num2){
            System.out.println("Os numeros digitados: " + num1 + " e " +  num2 + " São iguais" );
        }
        if(num1 > num2 ){
            System.out.println("Os numeros digitados: " + num1 + " e " + num2);

        }
        if(num1 < num2 ){
            System.out.println("Os numeros digitados: " + num2 + " e " + num1);

        }
        entrada.close();
    }
}
