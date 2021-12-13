import java.util.Scanner;

public class Exerci02 {
        public static void main(String[] args){

            Scanner entrada = new Scanner(System.in);

            String[] nomes = new String[5];
            int tamanho = nomes.length;

            for(int i = 0; i < tamanho; i++){
                System.out.println("Digite um nome: ");;
                nomes[i] = entrada.next();
            }
            for(int i = 0; i < tamanho ; i++){
            System.out.println("Os nomes são: " + nomes[i]);
            }
            entrada.close();
        }
    }


