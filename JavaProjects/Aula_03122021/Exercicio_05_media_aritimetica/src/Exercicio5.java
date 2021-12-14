import java.util.Scanner; // Importando o Scanner para a entrada de dados
    public class Exercicio5 {
        public static void main(String [] args){
            Scanner entrada = new Scanner(System.in);
            float nota1, nota2, mediaAluno, somaNota = 0, mediaClas = 0;
            int i ,totalAprov = 0, totalReprov= 0, Exame = 0;

            for(i = 0; i <= 6; i++){
                System.out.println ("Digite a primeira nota: ");
                nota1 = entrada.nextFloat();
                System.out.println ("Digite a segunda nota: ");
                nota2 = entrada.nextFloat();

                somaNota = nota1 + nota2;
                mediaAluno = somaNota / 2;

                if(mediaAluno >= 7){
                    System.out.println(" Aluno Aprovado! ");
                    totalAprov++;

                } else if (mediaAluno > 3 && mediaAluno < 7){
                    System.out.println("Aluno está de Exame");
                    Exame++;
                } else {
                    System.out.println("Aluno Reprovado");
                    totalReprov++;
                }
                mediaClas = mediaClas + somaNota;
            }
            mediaClas = mediaClas /12;
            System.out.println("A média da classe é: " + mediaClas);
            entrada.close();
        }
    }
