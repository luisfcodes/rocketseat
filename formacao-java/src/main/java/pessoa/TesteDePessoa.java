package pessoa;

public class TesteDePessoa {
  public static void main(String[] args) {
    Pessoa pessoa = new Pessoa();
    pessoa.setCpf("12345678900");
    pessoa.setNome("Luis Fernando");
    pessoa.setIdade(26);

    System.out.println(pessoa.imprimirDadosDaPessoa());

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
