package com.web.MySchool.service;

import com.web.MySchool.model.Admin;
import com.web.MySchool.repository.AdminRepo;
import com.web.MySchool.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    AdminRepo adminRepo;
    public Admin addAdmin(Admin users){
        Optional<Admin> existingEmail = adminRepo.findByEmail(users.getEmail().trim());
        Optional<Admin> existingPassword = adminRepo.findByPassword(users.getPassword());

        if (existingEmail.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already exists");
        }

        if (existingPassword.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Password is already in use");
        }
        return  adminRepo.save(users);
    }

    public Boolean loginAdmin(LoginRequest loginRequest){

        String email = loginRequest.getEmail() != null ? loginRequest.getEmail().trim() : "";
        String password = loginRequest.getPassword() != null ? loginRequest.getPassword().trim() : "";


        Optional<Admin> user = adminRepo.findByEmail(loginRequest.getEmail());
        if (user.isEmpty()) {
            return false;
        }

        Admin user1 = user.get();

        if(!user1.getPassword().equals(loginRequest.getPassword())){
            return false;
        }
        return true;

    }
    public boolean anyAdminExists() {
        return adminRepo.count() > 0;
    }
}

