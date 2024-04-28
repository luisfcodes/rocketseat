package pessoa;

public class Professor extends Pessoa {
  private String registro;

  public String getRegistro() {
    return registro;
  }

  public void setRegistro(String registro) {
    this.registro = registro;
  }

  String imprimirDadosDaPessoa(){
    System.out.println(super.imprimirDadosDaPessoa());
    return "O tipo deste usuário é Professor";
  }
}
