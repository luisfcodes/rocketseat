package fundamentos_java.pessoa;

public class Aluno extends  Pessoa {
  private String matricula;

  public String getMatricula() {
    return matricula;
  }

  public void setMatricula(String matricula) {
    this.matricula = matricula;
  }

  String imprimirDadosDaPessoa(){
    System.out.println(super.imprimirDadosDaPessoa());
    return "O tipo deste usuário é Aluno";
  }
};
