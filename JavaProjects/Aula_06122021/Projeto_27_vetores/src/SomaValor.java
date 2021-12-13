public class SomaValor {
    public static void main(String[] args){
        int[] array = { 87, 68, 94, 100, 83, 78, 85, 91, 76, 87};
        int total = 0;

        //Adicionando o valor de cada elemento ao total
        for(int contador = 0; contador < array.length; contador++)
            total += array[contador];

        System.out.println("Total of array elements: " +  total);
    }
}
