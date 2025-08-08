package com.web.MySchool.controller;
import com.web.MySchool.model.Admin;
import com.web.MySchool.request.LoginRequest;
import com.web.MySchool.service.AdminService;
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
    @CrossOrigin(origins ="https://brighthighschool.netlify.app")
    public ResponseEntity<?> addUsers(@RequestBody Admin admin) {
        boolean anyAdminExists = adminService.anyAdminExists();

        if (anyAdminExists) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("An admin account already exists. Only one account is allowed.");
        }

        Admin savedAdmin = adminService.addAdmin(admin);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAdmin);
    }
@PostMapping("/loginAdmin")

    @CrossOrigin(origins ="https://brighthighschool.netlify.app" )
    public Boolean loginUser(@RequestBody LoginRequest loginRequest){
        return adminService.loginAdmin(loginRequest);
    }
}

