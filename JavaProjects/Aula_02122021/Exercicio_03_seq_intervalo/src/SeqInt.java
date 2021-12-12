import java.util.Scanner;

public class SeqInt {
    public static void main(String[] args){
        System.out.println("==== Leia um número e imprima a sêquencia ====");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número: ");
        int num = entrada.nextInt();

        while(num >=  num){
            System.out.println("A sêquencia é: " + num);
            num++;
        }
        entrada.close();
    }
}
