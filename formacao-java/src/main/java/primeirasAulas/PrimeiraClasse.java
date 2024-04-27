package primeirasAulas;

public class PrimeiraClasse {
  public static void main(String[] args) {
    int dadoDoTipoInt = 10;
    double dadoDoTipoDouble = 10.3;
    float dadoDoTipoFloat = 10.43f;
    long dadoDoTipoLong = 10333333L;
    String dadoDoTipoString = "10";
    boolean dadoDoTipoBoolean = false;

    if (dadoDoTipoInt == 10) {
      System.out.println("Entrou no if");
    } else if(dadoDoTipoInt == 20) {
      System.out.println("Entrou no if pois é 20");
    } else {
      System.out.println("Entrou no else");
    }

    int value = 0;
    while (value < 3) {
      System.out.println("While " + value);
      value++;
    }

    for (int i = 0; i < 4; i++) {
      System.out.println("For " + i);
    }
  }
}
