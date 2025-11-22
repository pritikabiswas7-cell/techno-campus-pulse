package com.example.backendjava;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByStudentIdAndPassword(String studentId, String password);
}
