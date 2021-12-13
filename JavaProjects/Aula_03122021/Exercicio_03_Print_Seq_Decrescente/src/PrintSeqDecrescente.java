import java.util.Scanner;

public class PrintSeqDecrescente {
    public static void main(String[] args){
        System.out.println(" === Sequência de números ===");

        Scanner entrada = new Scanner(System.in);
        int num;
        int i;
        System.out.println("Digite um numero: ");
        num = entrada.nextInt();

        System.out.print("Sequência: ");

        for(i = 1; i <= num; i ++){
            int mul = i * i;
            if(mul%2 == 0){
                System.out.print( mul + " ");

            }
        }
        entrada.close();

    }
}