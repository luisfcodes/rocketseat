package fundamentos_java.pessoa;

public class Pessoa {
  private String nome;
  private int idade;
  private String cpf;

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public int getIdade() {
    return idade;
  }

  public void setIdade(int idade) {
    this.idade = idade;
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  String imprimirDadosDaPessoa(){
    return "O nome da pessoa é " + nome + ", ela tem " + idade + " anos e seu cpf é " + cpf;
  }
}
