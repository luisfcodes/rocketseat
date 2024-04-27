package pessoa;

public class Pessoa {
  String nome;
  int idade;
  String cpf;

  String imprimirDadosDaPessoa(){
    return "O nome da pessoa é " + nome + ", ela tem " + idade + " anos e seu cpf é " + cpf;
  }
}
