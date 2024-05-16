package com.luisfcodes.gestao_vagas.modules.candidate;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity(name = "candidate")
public class CandidateEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  private String name;

  @NotBlank()
  @Pattern(regexp = "\\S+", message = "Nome de usuário inválido, não deve conter espaço")
  private String username;

  @Email(message = "Insira um e-mail válido")
  private String email;

  @Length(min = 10, max = 100, message = "A senha deve conter de 10 a 100 caracteres")
  private String password;
  private String description;
  private String curriculum;

  @CreationTimestamp
  private LocalDateTime createdAt;
}
