import Frequency from '../models/Frequency';
import Student from '../models/Student';
import Class from '../models/Class';

class FrequencyRepository {

    async create(data) {
        return await Frequency.create(data);
    }

    async getAll() {
        return await Frequency.findAll({});
    }

    async getFrequency(id) {
        const student = [
            'student_id', 
            'name', 
            'email', 
            'registration', 
            'phone', 
            'identity',
            'updatedAt',
            'createdAt'
        ]
        return await Frequency.findOne({where: {frequency_id: id}, include: [
            {as: 'students', model: Student, attributes: student},
            {as: 'classes', model: Class}
        ]});
    }
}

export default new FrequencyRepository();