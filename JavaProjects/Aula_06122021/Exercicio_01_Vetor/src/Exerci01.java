import java.io.StringReader;
import java.util.Scanner;

public class Exerci01 {
    public static void main(String[] args){

        Scanner entrada = new Scanner(System.in);

        int maior, menor;
        double media, total;
        int[] numeros = new int[10];
        int tamanho = numeros.length;

        for(int i = 0; i < tamanho; i++){
            System.out.println("Digite um numero");;
            numeros[i] = entrada.nextInt();
        }
         maior = numeros[0];
         menor = numeros[0];

        for( int i = 0; i < tamanho; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }
            System.out.println("O maior número è: " + maior);
            System.out.println("O menor número è: " + menor);
            entrada.close();
    }
}
