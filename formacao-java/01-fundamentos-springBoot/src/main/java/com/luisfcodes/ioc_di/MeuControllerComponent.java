package com.luisfcodes.ioc_di;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
@RequestMapping("/component")
public class MeuControllerComponent {

  @Autowired
  MeuComponente meuComponente;

  @GetMapping("/")
  public String chamandoComponent() {
    var resultado = meuComponente.chamarMeuComponente();
    return  resultado;
  }

}
