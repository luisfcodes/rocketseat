package fundamentos_java.primeirasAulas;

import java.util.HashMap;
import java.util.Map;

public class Colecoes {
  public static void main(String[] args) {
    Map<String, Integer> notas = new HashMap<>();
    notas.put("Paulo", 68);
    notas.put("Vini", 100);
    notas.put("Aline", 89);

//    var nota = notas.get("Paulo");
//    System.out.println(nota);

    for(Map.Entry<String, Integer> entry : notas.entrySet()) {
      String key = entry.getKey();
      Integer value = entry.getValue();

      System.out.println(key + " => " + value);
    }
  }
}
