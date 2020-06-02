import { Router } from 'express'

import ItemsController from './controllers/ItemsController'
import PointsController from './controllers/PointsController'

const routes = Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.post('/points', pointsController.store);
routes.get('/points/:id', pointsController.show);

export default routes;
