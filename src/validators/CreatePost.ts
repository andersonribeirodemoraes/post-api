import * as Yup from 'yup';
import { Request, Response, NextFunction } from 'express';

export default async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const schema = Yup.object().shape({
      title: Yup.string().required('Title é obrigatório'),
      description: Yup.string().required('Description é obrigatório'),
    });

    await schema.validate(request.body, { abortEarly: false });

    return next();
  } catch (err) {
    return response
      .status(400)
      .json({ error: 'Campos inválidos', messages: err.inner });
  }
};
