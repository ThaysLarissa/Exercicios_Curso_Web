public class ExpSequencial {
    public static void main(String[] args){
        int num;
        System.out.println(" ==== O Quadrado do número ====");

        for(num = 15; num <= 100; num++){
            int quadrado = num * num;
            System.out.println("O quadrado de "+ num + " é " + quadrado);
        }
    }
}