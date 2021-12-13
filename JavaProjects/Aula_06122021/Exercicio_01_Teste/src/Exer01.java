public class Exer01 {
    public static void main(String[] args){

        System.out.println(" === Imprima a seguinte sequência 100 ao 1 ===");

        for(int i = 100 ; i > 0; i--){
            System.out.print(i + " ");
            if (i% 30 == 0){
                System.out.println(" ");
            }
        }
    }
}
