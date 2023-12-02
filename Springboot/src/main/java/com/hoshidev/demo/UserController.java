package com.hoshidev.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/games")
public class UserController {

    @GetMapping(value = {"", "/"})
    public ResponseEntity<String> helloworld() {
        return new ResponseEntity<>("My first java API! 🐋", HttpStatus.OK);
    }
    

}
