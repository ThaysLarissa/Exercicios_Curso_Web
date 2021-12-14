import java.util.Scanner;
    public class Exercicio7 {
        public static void main(String[] args){
            float massa, altura, imc;
            String continua;

            Scanner entrada = new Scanner(System.in);
            Scanner entrada_char = new Scanner(System.in);

            do{
                System.out.println("Digite seu peso: ");
                massa = entrada.nextFloat();

                System.out.println("Digite sua altura: ");
                altura = entrada.nextFloat();

                imc = massa / (altura*altura);

                if(imc < 16) System.out.println("Classificação: Magreza grave.");
                else if(imc >= 16 && imc < 17) System.out.println("Classificação: Magreza moderada.");
                else if(imc >= 17 && imc < 18.5) System.out.println("Classificação: Magreza leve.");
                else if(imc >= 18.5 && imc < 25) System.out.println("Classificação: Saudável.");
                else if(imc >= 25 && imc < 30) System.out.println("Classificação: Sobrepeso.");
                else if(imc >= 30 && imc < 35) System.out.println("Classificação: Obesidade grau I.");
                else if(imc >= 35 && imc < 40) System.out.println("Classificação: Obesidade grau II (Severa).");
                else if(imc >= 40) System.out.println("Classificação: Obesidade grau III (Mórbida).");

                System.out.println("Deseja calcular novamente (S/N)");
                continua = entrada_char.nextLine();

            } while(continua.equals("s") || continua.equals("S"));
        }
    }
