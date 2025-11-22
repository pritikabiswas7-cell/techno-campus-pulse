package com.example.backendjava;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        String studentId = body.get("student_id");
        String password = body.get("password");
        Map<String, Object> response = new HashMap<>();
        Student student = studentRepository.findByStudentIdAndPassword(studentId, password);
        if (student != null) {
            response.put("success", true);
            response.put("student", student);
        } else {
            response.put("success", false);
            response.put("message", "Invalid credentials");
        }
        return response;
    }
}
