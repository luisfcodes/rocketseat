package construtor;

public class TesteDeConstrutor {
  public static void main(String[] args) {
    Construtor construtor = new Construtor(5);
    Construtor construtor1 = new Construtor(5, "testando");

    System.out.println(construtor.getNumero());
    System.out.println(construtor1.getTexto());
  }
}
