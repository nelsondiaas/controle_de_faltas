import studentRepository from '../repositories/student.repository';
import hash from '../auth/hash.auth';

class StudentHandler {

    async store(req, res) {
        
        try {
            
            const passwordHashed = await hash.encrypt(req.body.password);
            req.body.password = passwordHashed;
            const { student_id } = await studentRepository.create(req.body);
            return res.status(201).json({student_id: student_id});

        } catch (error) {
            switch (error.errors) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }

    async index(req, res) {

        try {
            
            const student = await studentRepository.getStudent(req.auth.data.user_id);
            return res.status(200).json(student);
            
        } catch (error) { 
            switch (error.errors) {
                case error.errors:
                    return res.status(401).json({error: error.errors[0].message });
            }
        }
    }
}

export default new StudentHandler();