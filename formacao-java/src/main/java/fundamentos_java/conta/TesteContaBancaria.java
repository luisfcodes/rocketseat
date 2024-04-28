package fundamentos_java.conta;

public class TesteContaBancaria {
  public static void main(String[] args) {
    ContaBancaria contaBancaria = new ContaBancaria();
    contaBancaria.setNumero("0245");
    contaBancaria.setTitular("Luis Fernando da Silva");

    contaBancaria.depositar(125.98);

    contaBancaria.sacar(50);

  }
}
