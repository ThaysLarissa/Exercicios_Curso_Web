import java.util.Scanner;

public class AlturaSexo{
    public static void main(String[] args){
        System.out.println("======== verifique se o número está no intervalo entre 50 (inclusive) e 100 (inclusive); =====");
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número: ");
        int num = entrada.nextInt();

        if (num >= 50 || num == 100 ) {
            System.out.println("Pertence ao intervalo");
        }
        else {
            System.out.println("Não pertence ao intervalo");
        }
        entrada.close();
    }
}