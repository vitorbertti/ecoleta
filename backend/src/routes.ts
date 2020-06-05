import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import ItemsController from './controllers/ItemsController'
import PointsController from './controllers/PointsController'

const routes = Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.post('/points', upload.single('image'), pointsController.store);
routes.get('/points/:id', pointsController.show);

export default routes;
