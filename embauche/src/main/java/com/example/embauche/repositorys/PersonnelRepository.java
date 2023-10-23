package com.example.embauche.repositorys;

import com.example.embauche.models.Personnel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonnelRepository extends JpaRepository<Personnel,String> {
    @Query(value= "SELECT * from personnel",nativeQuery = true)
    List<Personnel> afficherPersonnel();
    Optional<Personnel> findPersonnelByCin(String cin);

}
