package com.luyolo.SchoolWebsite.controller;

import com.luyolo.SchoolWebsite.model.Student;
import com.luyolo.SchoolWebsite.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController


public class StudentController {

    @Autowired
    private StudentService studentService;

    // Add a new student
    @PostMapping("/add")
    @CrossOrigin(origins ="http://127.0.0.1:5502/")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student savedStudent = studentService.addStudent(student);
        return ResponseEntity.ok(savedStudent);
    }

    // Get all students
    @GetMapping("/all")
    @CrossOrigin(origins ="http://127.0.0.1:5502/")

    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }
}
