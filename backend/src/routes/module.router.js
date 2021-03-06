import moduleValidator from '../app/validators/module.validator';
import moduleHandler from '../app/handlers/module.handler';
import authToken from '../services/auth/token.auth';
import router from './config.router';

export default [

    router.post('/modules/', moduleValidator, authToken.checkToken, moduleHandler.store),
    router.get('/modules/:id/', authToken.checkToken, moduleHandler.show),
    router.get('/modules/', authToken.checkToken, moduleHandler.index),
    router.delete('/modules/:id/', authToken.checkToken, moduleHandler.destroy),
    router.put('/modules/:id/', moduleValidator, authToken.checkToken, moduleHandler.update),
]