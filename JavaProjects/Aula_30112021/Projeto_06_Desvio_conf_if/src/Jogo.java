import java.util.Scanner; //Import necessário para utilizar a classe

public class Jogo {
    public static void main (String[] args) {
        //Instancia do objeto (buffer) utilizando a classe Scanner
        Scanner entrada = new Scanner(System.in);
        int pontos = 0;

        System.out.println ("Digite o numero de pontos do jogador: ");

        pontos = entrada.nextInt(); //Recebe o numero de pontos

        if (pontos >= 1000) {
            System.out.println ("Voce passou para a fase 2!!!");
        }

        System.out.println("proxima instrução");
        entrada.close();
    } //fim do metodo main
} //fim da classe jogo