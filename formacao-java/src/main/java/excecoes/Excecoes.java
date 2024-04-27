package excecoes;

import pessoa.Pessoa;

public class Excecoes {
  // Checked exceptions

  //Unchecked exceptions

  public static void main(String[] args) {
//    try {
//      validarNumero();
//    } catch (Exception error) {
//      System.out.println("Deu ruim, veja com mais detalhes:");
//      error.printStackTrace();
//    }

    Pessoa p = null;
    p.getCpf();
  }

  public static void validarNumero() throws Exception {
    int numero = 10;

    if(numero > 5) {
      throw new Exception("O número é maior que 5");
    }
  }
}
