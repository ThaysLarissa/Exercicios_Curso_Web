import java.util.Scanner;

public class Exerci03 {
    public static void main(String[] args) {

        System.out.println(" === Ler um n° e imprima a sequência de n° que vai do 1 ao n° lido ===");
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número: ");
        int num = entrada.nextInt();

        System.out.println("Sequência ");
        for (int i = 1; i <= num; i++) {
            System.out.print(i + " ");
        }
        entrada.close();
    }
}
