package jar.controller;

import jar.model.StudentService;
import jar.repo.StudentServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    private StudentServiceRepository repository;

    @PostConstruct
    public void init() {
        if (repository.count() == 0) {
            repository.saveAll(Arrays.asList(
                    new StudentService(null, "Academic Counseling", "Guidance on course selection and career paths.",
                            "counseling@university.edu"),
                    new StudentService(null, "Financial Aid", "Support for scholarships, grants, and student loans.",
                            "finaid@university.edu"),
                    new StudentService(null, "Health Center", "On-campus medical services and mental health support.",
                            "health@university.edu"),
                    new StudentService(null, "Career Services", "Resume building, interview prep, and job placement.",
                            "careers@university.edu"),
                    new StudentService(null, "Library Services",
                            "Access to research materials, journals, and study spaces.", "library@university.edu")));
        }
    }

    @GetMapping
    public List<StudentService> getAllServices() {
        return repository.findAll();
    }
}
