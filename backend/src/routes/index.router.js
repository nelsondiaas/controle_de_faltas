import authenticateValidator from '../validators/authenticate.validator';
import teacherValidator from '../validators/teacher.validator';
import studentValidator from '../validators/student.validator';
import moduleValidator from '../validators/module.validator';
import teacherHandler from '../handlers/teacher.handler';
import studentHandler from '../handlers/student.handler';
import moduleHandler from '../handlers/module.handler';
import loginHandler from '../handlers/login.handler';
import authToken from '../auth/token.auth';
import { Router } from 'express';

const router = new Router();

router.post('/api/v1/sessions/', authenticateValidator, loginHandler.login)
router.post('/api/v1/teachers/', teacherValidator, teacherHandler.store)
router.post('/api/v1/students/', studentValidator, studentHandler.store)

/* Endpoints with auth */
router.use(authToken.checkToken);

router.post('/api/v1/modules/', moduleValidator, moduleHandler.store)

export default router;