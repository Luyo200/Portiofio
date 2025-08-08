package com.web.MySchool.repository;

import com.web.MySchool.model.Admin;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface AdminRepo extends JpaRepository<Admin, String> {
    Optional<Admin> findByEmail(String email);
    Optional<Admin> findByPassword(String password);
}
