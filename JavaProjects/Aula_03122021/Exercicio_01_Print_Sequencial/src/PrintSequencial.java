public class PrintSequencial {
    public static void main(String[] agrs){
        int numero;

        for(numero = 100; numero > 0; numero--){
            System.out.print(numero + "  ");
            if(numero% 30 == 0)
                System.out.println("");

        }
    }
}