public class Matriz {
    public static void main (String[] args){
        int num [][] = {{0, 1, 4, 9, 16, 25, 36, 49, 64, 81},{0, 1, 4, 9, 16, 25, 36, 49, 64, 81},{0, 1, 4, 9, 16, 25, 36, 49, 64, 81}, {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}};
        int i,j;

        for(i = 0; i < num.length; i++){
            for(j = 0 ; j < num[i].length; j++){
                System.out.print(num[i][j] + " ");
            }
            System.out.println("");
        }

    }
}
