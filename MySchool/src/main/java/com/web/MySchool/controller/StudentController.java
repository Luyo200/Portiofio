package com.web.MySchool.controller;

import com.web.MySchool.model.Student;
import com.web.MySchool.repository.StudentRepo;
import com.web.MySchool.request.StudentStatusRequest;
import com.web.MySchool.service.EmailService;
import com.web.MySchool.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "https://brighthighschool.netlify.app")
public class StudentController {

    private final StudentService studentService;
    private final StudentRepo studentRepo;
    private final EmailService emailService;

    @Autowired
    public StudentController(StudentService studentService, StudentRepo studentRepo, EmailService emailService) {
        this.studentService = studentService;
        this.studentRepo = studentRepo;
        this.emailService = emailService;
    }

    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student savedStudent = studentService.addStudent(student);
        return ResponseEntity.ok(savedStudent);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @PostMapping("/update-status")
    public ResponseEntity<?> updateStatus(@RequestBody StudentStatusRequest request) {
        Optional<Student> optionalStudent = studentRepo.findByEmail(request.getEmail());
        if (!optionalStudent.isPresent()) {
            return ResponseEntity.status(404).body("Student not found");
        }

        Student student = optionalStudent.get();
        student.setStatus(request.getStatus());
        studentRepo.save(student);

        String subject = "Application Status Update";
        String body = "Dear " + student.getName() + ",\n\n" +
                "We hope this message finds you well. We would like to inform you that your application status has been updated to: *" + student.getStatus() + "*.\n\n" +
                "Thank you for your interest in MySchool. If you have any questions or need further information, please don't hesitate to reach out.\n\n" +
                "Best regards,\n" +
                "MySchool Admissions Team";

        emailService.sendStatusEmail(student.getEmail(), subject, body);
        System.out.println("Received update request: " + request.getEmail() + " | " + request.getStatus() + " | " );

        return ResponseEntity.ok("Status updated and email sent");
    }
}
