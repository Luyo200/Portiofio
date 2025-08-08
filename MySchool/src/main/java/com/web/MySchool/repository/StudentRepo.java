package com.web.MySchool.repository;

import com.web.MySchool.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {
    Optional<Student> findByEmail(String email);
    Optional<Student> findByIdNumber(String idNumber);


}
