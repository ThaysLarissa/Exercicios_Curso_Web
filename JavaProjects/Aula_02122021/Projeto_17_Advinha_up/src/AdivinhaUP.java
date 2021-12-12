import java.util.Scanner; //Import necessario para utilizar a classe Scanner
import java.util.Random; //Import necessario para utilizar a classe Random

public class AdivinhaUP {
    public static void main(String[] args) {
        //Instancia (buffer) utilizando a classe Scanner
        Scanner entrada = new Scanner(System.in);
        //Instancia utilizando a classe Random
        Random rand = new Random();
        int palpite, num = 0;
        num = rand.nextInt(10) + 1;

        do {
            System.out.println("Digite seu palpite");
            palpite = entrada.nextInt();
            if (palpite == num) {
                System.out.println("Você acertou!!!");
            } else {
                if (palpite < num) {
                    System.out.println("Seu palpite está abaixo.");
                } else {
                    System.out.println("Seu palpite está acima.");
                }
            }
        } while (palpite != num);

        entrada.close();
    } //fim do método main
}