import express from 'express';
import {login, register} from '../controllers/authentication';
import { defaults } from 'lodash';
export default(router: express.Router) => {
	router.post("/auth/register", register);
	router.post("/auth/login", login);
};