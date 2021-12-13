import java.util.Scanner;

public class Exerci05 {
    public static void main(String[] args){
        System.out.println("=== Faça um algoritmo que receba duas notas de 6 alunos, calcule e mostre: ===");

        Scanner entrada = new Scanner(System.in);
        float nota1;
        float nota2;
        int alunos = 6;
        float aluno = 0 ;
        int cont = 1;
        int reprovado = 0;
        int aprovado = 0;
        int exame = 0;

      do {
          System.out.println("Digite a primeira nota do aluno: ");
          nota1 = entrada.nextFloat();
      } while(nota1 > 7);

      do {
          System.out.println("Digite a segunda nota do aluno: ");
          nota2 = entrada.nextFloat();
      }while (nota2 > 7);
        double media = (nota1 + nota2) / 2;

        if(media <= 3){
            System.out.println("REPROVADO");
        }
        if(media > 3 || media < 7){
            System.out.println("EXAME");
        }

        if(media >= 7){
            System.out.println("APROVADO!!");
        }
        entrada.close();
   }
}
