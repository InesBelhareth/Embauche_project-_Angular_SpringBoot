package com.example.embauche.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Personnel {
    @Id
    private String cin ;
    private String nom;
    private String prenom;
    private String image;
    private String post;
}
