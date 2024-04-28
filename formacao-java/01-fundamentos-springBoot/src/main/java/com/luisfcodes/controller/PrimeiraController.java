package com.luisfcodes.controller;

import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/primeiraController")
public class PrimeiraController {

  @GetMapping("/primeiroMetodo/{id}")
  public String primeiroMetodo(@PathVariable String id) {
    return "O parâmetro é: " + id;
  }

  @GetMapping("/metodoComQueryParams")
  public String metodoComQueryParams(@RequestParam String id) {
    return "O método metodoComQueryParams recebeu como parâmetro: " + id;
  }

  @GetMapping("/metodoComDiversosQueryParams")
  public String metodoComDiversosQueryParams(@RequestParam Map<String, String> allParams) {
    return "O método metodoComQueryParams recebeu como parâmetro: " + allParams.entrySet();
  }

  @PostMapping("/metodoComBodyParams")
  public String metodoComBodyParams(@RequestBody Usuario usuario) {
    return "metodoComBodyParams\n" + usuario.username();
  }

  @PostMapping("/metodoComHeadersParams")
  public String metodoComHeadersParams(@RequestHeader String username) {
    return "metodoComHeadersParams\n" + username;
  }

  @PostMapping("/metodoComVariosHeadersParams")
  public String metodoComVariosHeadersParams(@RequestHeader Map<String, String> allParams) {
    return "metodoComVariosHeadersParams\n" + allParams.entrySet();
  }

  record Usuario(String username){}
}
