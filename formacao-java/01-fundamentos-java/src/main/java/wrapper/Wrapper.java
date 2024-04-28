package wrapper;

public class Wrapper {
  public static void main(String[] args) {
    int tipoInt = 1;
    float tipoFloat = 1;
    boolean tipoBoolean = true;

    Float tipoFloatComWrapper = 1F;
    Integer tipoIntComWrapper = 1;
    Boolean tipoBooleanComWrapper = true;

    System.out.println(tipoIntComWrapper.doubleValue());
  }
}
