package primeirasAulas;

import java.util.ArrayList;
import java.util.List;

public class EstruturaDeDados {
  public static void main(String[] args) {
    // Lista
    List<String> nomes = new ArrayList<>();
    nomes.add("Luis Fernando");
    nomes.add("Fabiana");

//  System.out.println(nomes.get(0));

//    for (int i = 0; i < nomes.size(); i++) {
//      System.out.println(nomes.get(i));
//    }

//    for(String nome : nomes) {
//      System.out.println("Nome é: " + nome);
//    }

//    nomes.forEach(nome -> System.out.println(nome));
    nomes.forEach(System.out::println);
  }
}
