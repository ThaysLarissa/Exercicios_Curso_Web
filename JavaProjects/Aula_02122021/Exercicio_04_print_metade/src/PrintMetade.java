public class PrintMetade {
    public static void main(String[] args){
        int contador = 10;
        double num = 2;

        System.out.println("===== Metade de cada número ====== ");
        while (contador <= 20) {
            double metade = contador / num;
            System.out.println("A metade de " + contador + " è " + metade);
            contador ++;

        }
    }
}