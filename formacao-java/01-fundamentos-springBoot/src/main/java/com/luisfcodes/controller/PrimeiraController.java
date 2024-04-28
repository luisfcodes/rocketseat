package com.luisfcodes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/primeiraController")
public class PrimeiraController {

  @GetMapping("/primeiroMetodo")
  public String primeiroMetodo(){
    return "Meu primeiro método api rest";
  }

}
