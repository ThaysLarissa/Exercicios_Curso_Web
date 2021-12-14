import java.util.Random;
public class Matriz {
    public static void main(String[] args){
        Random gerador = new Random ();
        int numeros [][] = new int [100][100];

        for(int x = 0; x< numeros.length; x++) {
            for(int y = 0; y< numeros.length; y++) {
                numeros[x][y] = gerador.nextInt(99) + 1;
            }
        }
        for(int x = 0; x< numeros.length; x++) {
            for(int y = 0; y< numeros.length; y++) {
                System.out.print(numeros[x][y] + " ");
            }
            System.out.println();
        }

        for(int i = 0; i < numeros.length; i++){
            for (int j = 0; j < numeros.length; j++){
                if(numeros[i][j]% 2 == 0){
                    numeros[i][j] = 1;
                    System.out.print(numeros[i][j] + " ");
                }if(numeros[i][j]% 3 == 0){
                    numeros[i][j] = -1;
                    System.out.print(numeros[i][j] + " ");
                }

                System.out.println();
            }
        }
    }
}
