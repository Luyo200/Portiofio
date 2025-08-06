package com.luyolo.SchoolWebsite.service;

import com.luyolo.SchoolWebsite.model.Admin;
import com.luyolo.SchoolWebsite.model.Student;
import com.luyolo.SchoolWebsite.repository.AdminRep;
import com.luyolo.SchoolWebsite.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
@Service
public class StudentService {
    @Autowired
    StudentRepo studentRepo;
    public Student addStudent(Student student) {
        if (student.getEmail() == null || student.getIdNumber() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email and password cannot be null.");
        }

        String email = student.getEmail().trim();
        String idNumber= student.getIdNumber(); // Only trim if needed

        Optional<Student> existingEmail = studentRepo.findByEmail(email);
        Optional<Student> existingIdNumber = studentRepo.findByIdNumber(idNumber);

        if (existingEmail.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "An application with this Email/ ID number  already exists");
        }

        if (existingIdNumber.isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "n application with this Email/ ID number  already exists");
        }

        return studentRepo.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

}
