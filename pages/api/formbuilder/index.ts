import { NextApiRequest, NextApiResponse } from 'next';
import createHandler from '../middleware';
import Formbuilder from '../models/formbuilder';

const formbuilderRouter = createHandler();

formbuilderRouter.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const formbuilders = await Formbuilder.find({});
  return res.status(200).json({ data: formbuilders });
});

// eslint-disable-next-line consistent-return
formbuilderRouter.post(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req.body', req.body);
  try {
    const formbuilders = new Formbuilder(req.body);
    await formbuilders.save();
    return res.send(formbuilders);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default formbuilderRouter;
