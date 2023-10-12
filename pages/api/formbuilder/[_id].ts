import { NextApiRequest, NextApiResponse } from 'next';
import createHandler from '../middleware';
import Formbuilder from '../models/formbuilder';

const formbuilderRouter = createHandler();

// eslint-disable-next-line consistent-return
formbuilderRouter.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.query;

    const formbuilders = await Formbuilder.findOne({ _id });
    return res.send(formbuilders);
  } catch (err) {
    res.status(500).send({ err: (err as Error)?.message });
  }
});

// eslint-disable-next-line consistent-return
formbuilderRouter.put(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.query;
    const formbuilders = await Formbuilder.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.send(formbuilders);
  } catch (err) {
    res.status(500).send(err);
  }
});

// eslint-disable-next-line consistent-return
formbuilderRouter.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.query;
    const formbuilders = await Formbuilder.findByIdAndDelete(_id);
    return res.send(formbuilders);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default formbuilderRouter;
