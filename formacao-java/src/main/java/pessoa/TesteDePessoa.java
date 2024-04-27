package pessoa;

public class TesteDePessoa {
  public static void main(String[] args) {
    Pessoa pessoa1 = new Pessoa();
    pessoa1.cpf = "12345678900";
    pessoa1.nome = "Luis Fernando";
    pessoa1.idade = 26;

    System.out.println(pessoa1.imprimirDadosDaPessoa());

    Pessoa pessoa2 = new Pessoa();
    pessoa2.cpf = "09876543211";
    pessoa2.nome = "Amanda Soares";
    pessoa2.idade = 26;

    System.out.println(pessoa2.imprimirDadosDaPessoa());
  }
}
