package com.footballsimulator.player;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/player")
public class PlayerController {

    @GetMapping("/")
    public ResponseEntity<String> get() {
        return ResponseEntity.ok("Hello World!");
    }

}
