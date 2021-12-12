import java.util.Scanner;

public class Menu {
    public static void main(String[] args){
        System.out.println("======= Menu de Opcões ======");
        System.out.println("1 - Cadastrar Produtos");
        System.out.println("2 - Listas Produtos");
        System.out.println("3 - Sair do Sistema");
        System.out.println("======= Escolha uma opção =======");

        Scanner entrada = new Scanner(System.in);
        int menu = entrada.nextInt();

        switch (menu){
            case 1:
                System.out.println("Você escolheu o menu 1");
                System.out.println("Que é a opção Cadastrar Produtos");
                break;
            case 2:
                System.out.println("Você escolheu o menu 2");
                System.out.println("Que é a opção Listar Produtos");
                break;
            case 3:
                System.out.println("Você escolheu o menu 3");
                System.out.println("Que é a opção sair do Sistema");
                break;
            default:
                System.out.println("Item de menu invalido");
        }
        entrada.close();
    }
}