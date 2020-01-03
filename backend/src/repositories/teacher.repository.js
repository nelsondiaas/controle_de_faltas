import Teacher from '../models/Teacher';

class TeacherRepository {

    async create(data) {
        return await Teacher.create(data);
    }
    
    async getAll() {
        return await Teacher.findAll({});
    }

    async getTeacher(id) {
        return await Teacher.findOne({where: {teacher_id: id}});
    }

    async findByEmail(email) {
        return await Teacher.findOne({where: {email: email}});
    }
}

export default new TeacherRepository();