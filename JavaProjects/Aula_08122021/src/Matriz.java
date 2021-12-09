public class Exemplo {

    public static void main(String[] args) {

        //String nomes [] = {'Heloisa', 'Duda', 'Rafa'}; //Array

        //Forma incorreta de declarar uma Matriz
        // Char nomes [][] = {{'Heloisa', 'Helo', 21}, {'Duda', 'Du', 32}, {'Rafa', 'Ra', 45}}; //Matriz

        //Forma correta de declarar uma Matriz
        //TIPO IDENTIFICADOR [][] = NEW TIPO {{TamLinha}, {TamColuna}}

        double numeros[][] = new[3][3];

        int numeros2[][] = new int[3][50];

        int notas[][] = {{8, 9, 9}, {4, 7, 9}, {2, 5, 7}};


        for (i = 0; i <= 2; i++) { //percorre linhas
            for (j = 0; j <= 3; j++) { //percorre colunas
                System.out.println("Digite um numero: ");
                numeros[i][j] = entrada.nextInt();
            }
        }
    }
}






