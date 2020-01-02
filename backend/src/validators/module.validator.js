import * as Yup from 'yup';

export default async (req, res, next) => {

    const schema =  Yup.object().shape({
        name: Yup.string().required()
    });
    
    if (!(await schema.isValid(req.body).catch(err => {})));
    
    return next();
}