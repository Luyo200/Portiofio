package com.luyolo.SchoolWebsite.controller;

import com.luyolo.SchoolWebsite.model.Admin;
import com.luyolo.SchoolWebsite.request.LoginRequest;
import com.luyolo.SchoolWebsite.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdmniController {

    @Autowired
    AdminService adminService;
    @PostMapping("/addAdmin")
    @CrossOrigin(origins ="http://127.0.0.1:550/" )
    public Admin addUsers(@RequestBody Admin admin){
        return adminService.addAdmin(admin);
    }
    @PostMapping("/loginAdmin")

    @CrossOrigin(origins ="http://127.0.0.1:5500/" )
    public Boolean loginUser(@RequestBody LoginRequest loginRequest){
        return adminService.loginAdmin(loginRequest);
    }
}

