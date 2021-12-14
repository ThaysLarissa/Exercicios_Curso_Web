import java.util.Scanner;
public class Desafio2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String letra = "abcdefghaijklmnopqrstuvxwyz";
        int contador[] = new int[letra.length()];
        int i, j, l, z;
        String frase;
        System.out.println("Digite uma frase:");
        frase = entrada.nextLine();
        String fraseCa = frase.toLowerCase();

        // Imprime o tamanho da string
        System.out.println("O tamanho da string frase é: " + frase.length());

        // Imprimir Ocorrencia de quantas vezes aparece a letra
        for (j = 0; j < contador.length; j++) {
            contador[j] = 0;
        }
        for (i = 0; i < fraseCa.length(); i++) {
            for (z = 0; z < letra.length(); z++) {
                if (fraseCa.charAt(i) == letra.charAt(z)) {
                    contador[z]++;
                }
            }
        }
            for (l = 0; l < letra.length(); l++) {
                System.out.println(letra.charAt(l) + " - " + contador[l]);
            }

        }
    }

