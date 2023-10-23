package com.example.embauche.services;

import com.example.embauche.models.Personnel;
import com.example.embauche.response.Message;
import com.example.embauche.repositorys.PersonnelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PersonnelService {
    @Autowired
    private PersonnelRepository personnelRepository;

    public List<Personnel> afficherPersonnel() {
        return personnelRepository.afficherPersonnel();
    }

    public Message ajouterpersonnel(Personnel personnel) {
        Personnel p=personnelRepository.findPersonnelByCin(personnel.getCin()).orElse(null);
        if (p==null){
            personnelRepository.save(personnel);
            return new Message("personnel ajoutee");}
        else {
            throw new IllegalStateException("cin exist");
        }
    }
}
