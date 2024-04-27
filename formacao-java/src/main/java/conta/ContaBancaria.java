package conta;

public class ContaBancaria {
  private String numero;
  private String titular;
  private double saldo;

  public ContaBancaria(){
    saldo = 0.0;
  }

  public void setNumero(String numero){
    this.numero = numero;
  }

  public String getNumero() {
    return numero;
  }

  public void setTitular(String titular) {
    this.titular = titular;
  }

  public String getTitular() {
    return titular;
  }

  public double getSaldo() {
    return saldo;
  }

  void depositar(double valor){
    if(valor > 0){
      saldo = saldo + valor;
      System.out.println("Depósito de R$" + valor + " realizado com sucesso!!! Saldo atual:" + String.format("%.2f", saldo));
    } else {
      System.out.println("Valor de depósito é inválido!!!");
    }
  }

  void sacar(double valor){
    if(valor > 0 && valor <= saldo){
      saldo = saldo - valor;
      System.out.println("Saque de R$" + valor + " realizado com sucesso!!! Saldo atual:" + String.format("%.2f", saldo));
    } else {
      System.out.println("Valor inválido ou saldo insuficiente!!!");
    }
  }
}
