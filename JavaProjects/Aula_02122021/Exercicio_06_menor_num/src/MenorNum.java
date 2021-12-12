import java.util.Scanner;

public class MenorNum {
    public static void main(String[] args){
        System.out.println("=== Leia um número inteiro e mostre o menor ===");

        Scanner entrada = new Scanner(System.in);
        int i = 1;
        int num;


        do {
            System.out.println("Digite um número: ");
            num = entrada.nextInt();
            i++;

            if(num < num)
                System.out.println("O menor è: " + num);
        }while(i <= 10);
        entrada.close();
    }
}