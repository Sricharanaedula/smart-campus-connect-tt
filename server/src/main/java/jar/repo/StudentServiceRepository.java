package jar.repo;

import jar.model.StudentService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentServiceRepository extends JpaRepository<StudentService, Long> {
}
