package fundamentos_java.construtor;

public class Construtor {
  private int numero;
  private String texto;

  public Construtor(int numero, String texto){
    this.numero = numero;
    this.texto = texto;
  }

  public Construtor(int numero){
    this.numero = numero;
  }

  public int getNumero() {
    return numero;
  }

  public void setNumero(int numero) {
    this.numero = numero;
  }

  public String getTexto() {
    return texto;
  }

  public void setTexto(String texto) {
    this.texto = texto;
  }
}
