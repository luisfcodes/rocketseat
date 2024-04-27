package pessoa;

public class TesteDePessoa {
  public static void main(String[] args) {
    Pessoa pessoa1 = new Pessoa();
    pessoa1.setCpf("12345678900");
    pessoa1.setNome("Luis Fernando");
    pessoa1.setIdade(26);

    System.out.println(pessoa1.imprimirDadosDaPessoa());

    Professor professor = new Professor();
    professor.setRegistro("89876");
    professor.setCpf("09876543210");
    professor.setNome("Ronaldo Souza");
    professor.setIdade(46);

    System.out.println(professor.imprimirDadosDaPessoa());

    Aluno aluno = new Aluno();
    aluno.setMatricula("45567");
    aluno.setCpf("67875434567");
    aluno.setNome("Guilherme Pereira");
    aluno.setIdade(21);

    System.out.println(aluno.imprimirDadosDaPessoa());
  }
}
