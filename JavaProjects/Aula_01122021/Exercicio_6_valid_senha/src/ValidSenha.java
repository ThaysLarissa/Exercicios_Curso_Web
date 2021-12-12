import java.util.Scanner;

public class ValidSenha {
    public static void main(String[] args){
        System.out.println("==== Verificador de senha ====");

        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite sua senha: ");
        String senha = entrada.next();

        if(senha.equals("corinthians1910")){ //Para comparar duas Strings utilizar o método equals();
            System.out.println("Acesso concedido");
        }
        else{
            System.out.println("Acesso negado!");
        }
        entrada.close();
    }
}
