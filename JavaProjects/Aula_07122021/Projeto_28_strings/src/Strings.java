public class Strings {
    public static void main(String[] args) {
        String txt = "Ola Pessoal do IOS";
        // Imprime o tamanho da string
        System.out.println("O tamanho da string txt é: " + txt.length()); // 18
        // Imprime os caracteres da string em maiúsculo
        System.out.println(txt.toUpperCase()); // OLA PESSOAL DO IOS
        // Imprime os caracteres da string em minúsculo
        System.out.println(txt.toLowerCase()); // ola pessoal do ios
        // Imprime a posição da primeira ocorrência de um valor na string
        System.out.println(txt.indexOf("s"));   // 6
        System.out.println(txt.indexOf("IO")); // 15
        // Não encontra o texto na string
        System.out.println(txt.indexOf("io")); // Case Sensitive (-1)
    }
}

