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

    public Student(){

    }

    public Student(String name, String surname, String idNumber, String email, String phoneNumber, String currentGrade, String gradeApplying, String stream, String streetAddress, String city, String postalCode) {
        this.name = name;
        this.surname = surname;
        this.idNumber = idNumber;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.currentGrade = currentGrade;
        this.gradeApplying = gradeApplying;
        this.stream = stream;
        this.streetAddress = streetAddress;
        this.city = city;
        this.postalCode = postalCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCurrentGrade() {
        return currentGrade;
    }

    public void setCurrentGrade(String currentGrade) {
        this.currentGrade = currentGrade;
    }

    public String getGradeApplying() {
        return gradeApplying;
    }

    public void setGradeApplying(String gradeApplying) {
        this.gradeApplying = gradeApplying;
    }

    public String getStream() {
        return stream;
    }

    public void setStream(String stream) {
        this.stream = stream;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
}
