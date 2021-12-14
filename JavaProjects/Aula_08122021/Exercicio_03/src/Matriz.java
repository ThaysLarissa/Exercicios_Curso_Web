public class Matriz {
    public static void main (String[] args){
        int num [][] = {{0, 1, 2, 3, 4, 5, 6, 7, 8, 9},{0, 1, 2, 3, 4, 5, 6, 7, 8, 9},{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}};
        int i,j;

        for(i = 0; i < num.length; i++){
            for(j = 0 ; j < num[i].length; j++){
                System.out.print(num[i][j] + " ");
            }
        System.out.println("");
        }

    }
}
