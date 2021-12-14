import java.util.Scanner;
public class Exercicio4 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int idade, pessoas, media = 0, cont = 0;
        float altura;

        for(pessoas = 0; pessoas <=10; pessoas++) {
            System.out.println("Digite sua idade: ");
            idade = entrada.nextInt();
            System.out.println("Digite sua altura: ");
            altura = entrada.nextFloat();
            cont += altura;
        }
        media = (cont / 10);
        System.out.print("A média de altura é: " + media);
    }
}
