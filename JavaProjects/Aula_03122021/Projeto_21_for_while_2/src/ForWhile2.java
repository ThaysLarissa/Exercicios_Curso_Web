public class ForWhile2 {
    public static void main(String[] args){
        int contadorFor, contadorWhile;

        //For (Inicialização; condição; decremento)
        for(contadorFor = 10; contadorFor > 0; contadorFor--)
            System.out.print("*");

        System.out.println("");
        contadorWhile = 10; // Inicializando o while

        //while (condição)
        while(contadorWhile > 0){
            System.out.print("*");
            contadorWhile--;
        }
    }
}
