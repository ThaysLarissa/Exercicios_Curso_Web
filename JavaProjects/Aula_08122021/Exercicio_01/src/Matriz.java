public class Matriz {
    public static void main(String[] args){
        int[][] numeros = {{10, 50, 2, 0}, {22, -0,1,6},{9,-9,11,5}, {62,15,8,4}};
        int i, j;
        int contagem = 0;

        for(i = 0; i < numeros.length; i++){
            for(j = 0; j < numeros.length; j++){
                System.out.print(numeros[i][j] + " ");
                System.out.println(" ");
            }
            System.out.println(" ");

        }
                for(i = 0; i < numeros.length; i++){
                for(j = 0; j < numeros.length; j++){
                    if(numeros[i][j] > 10)
                        contagem++;
                    System.out.print(contagem + " ");
                }
                System.out.println(" ");
            }
    }
}
