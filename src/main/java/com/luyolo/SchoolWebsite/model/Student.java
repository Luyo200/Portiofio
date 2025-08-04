package com.luyolo.SchoolWebsite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Student {
    @Id
    private String name;
    private String surname;
    private String idNumber;
    private String email;
    private String phoneNumber;
    private String currentGrade;
    private String gradeApplying;
    private String stream;
    private String streetAddress;
    private String city;
    private String postalCode;
    @Lob
    private byte[] studentIdCopy;
    private byte[] studentReportCopy;
    private byte[] parentIdCopy;

    public Student(){

    }





}
