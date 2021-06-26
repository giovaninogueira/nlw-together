import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ListTagsController } from "./controller/ListTagsController";
import { ListUserController } from "./controller/ListUserController";
import { ListUserReceiverComplimentsController } from "./controller/ListUserReceiverComplimentsController";
import { ListUserSendComplimentsController } from "./controller/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();
const createUserController = new CreateUserController();
const createTageController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post('/tags', ensureAuthenticated, ensureAdmin, createTageController.handle);

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated, complimentController.handle);

router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/receiver', ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated, listUserController.handle);

export { router };