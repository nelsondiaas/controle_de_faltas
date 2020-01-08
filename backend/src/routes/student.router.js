import studentValidator from '../validators/student.validator';
import studentHandler from '../handlers/student.handler';
import authToken from '../auth/token.auth';
import router from './config.router';

export default [

    router.post('/students/', studentValidator, studentHandler.store),
    router.get('/students/:id/', authToken.checkToken, studentHandler.show),
    router.get('/students/', authToken.checkToken, studentHandler.index)
    
]