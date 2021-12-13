public class Exerci02 {
    public static void main(String[] args){

        System.out.println(" === Apresente na tela os quadrados dos números ===");

        for(int i = 15 ; i <= 100; i++){
            float total = i * i;
            System.out.println("O quadrado de " + i + " é " + total);
            if (i% 30 == 0){
                System.out.println(" ");
            }
        }
    }
}
