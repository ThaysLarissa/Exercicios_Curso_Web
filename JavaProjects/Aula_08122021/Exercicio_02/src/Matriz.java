public class Matriz {
        public static void main(String[] args){
            int numeros [][] = new int [5][5];
            int i, j;
            int contagem = 0;

            for(i = 0; i < numeros.length; i++){
                for(j = 0; j < numeros.length; j++){
                    if(i == j){
                        numeros[i][j] = 1; //Diagonal principal
                } else numeros[i][j] = 0;
                System.out.println(" ");
            }
            for(i = 0; i < numeros.length; i++){
                for(j = 0; j < numeros.length; j++){
                    System.out.print(numeros[i][j]+ " ");
                }
                System.out.println(" ");
            }
           
        }
    }
}
