package com.luyolo.SchoolWebsite.repository;

import com.luyolo.SchoolWebsite.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRep extends JpaRepository<Admin, String> {
    Optional<Admin> findByEmail(String email);
    Optional<Admin> findByPassword(String password);
}


