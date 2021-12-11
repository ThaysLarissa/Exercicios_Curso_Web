import java.util.Scanner; //Import necessario para utilizar a classe

public class Idade {
    public static void main (String[] args) {
        //Instancia do objeto (buffer) utilizando classe Scanner
        Scanner entrada = new Scanner(System.in);
        int idade;
        System.out.println("Digite a sua idade");
        idade = entrada.nextInt(); //Recebe o numero

        //Verifica se o numero é par
        if (idade >= 18){
            System.out.println("Voce é maior de idade!");
        }
        else {
            System.out.println("Voce é menor de idade!");
        }
        entrada.close();
    } //fim do metodo main
} //fim da classe Idade
