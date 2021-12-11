import java.util.Scanner; //Import necessario para utilizar a classe

public class PrintMetade {
    public static void main (String[] args) {
        //Instancia do objeto (buffer) utilizando classe Scanner
        Scanner entrada = new Scanner(System.in);
        int numero;
        System.out.println("Digite um numero");
        numero = entrada.nextInt(); //Recebe o numero

        //Verifica se o numero é par
        if (numero > 20){
            System.out.println("A metade de " + numero + " é " + numero / 2);
        }
        else {
            System.out.println("O numero digitado foi o " + numero);
        }
        entrada.close();
    } //fim do metodo main
} //fim da classe PrintMetade
