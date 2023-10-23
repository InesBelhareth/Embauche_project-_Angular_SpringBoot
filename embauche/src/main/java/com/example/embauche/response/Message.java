package com.example.embauche.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Message {
    public  String msg;

    public Message(String msg) {
        this.msg = msg;
    }
}
