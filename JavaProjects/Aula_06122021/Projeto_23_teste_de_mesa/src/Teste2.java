
public class Teste2 {
    public static void main(String[] args) {
        int controle = 10;
        long acumulador = 1;
        boolean condicao;
        System.out.println("Numero da iteração\tCondição\tControle\tAcumulador");
        while(controle > 0){
            int iteracao = 10 - controle + 1;
            acumulador *= controle;
            condicao = controle > 0;
            System.out.println("Iteração "+ iteracao+ "\t\t\t"+ condicao
                    + "\t\t\t" + controle + "\t\t\t" + acumulador);
            controle--;
        }
    }
}// fim do método main