package com.luyolo.SchoolWebsite.repository;

import com.luyolo.SchoolWebsite.model.Admin;
import com.luyolo.SchoolWebsite.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student, Integer> {
    Optional<Student> findByEmail(String email);
    Optional<Student> findByIdNumber(String idNumber);

}
