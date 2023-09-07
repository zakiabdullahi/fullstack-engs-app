import express from 'express';
import { createEng, getEngineers, getUnVerifiedEngineers, getVerifiedEngineers, removeVerifiedEng, updateEng } from '../controllers/engController.js';





const engRouter = express.Router();

engRouter.post('/create-eng', createEng)
engRouter.get('/readAll-engs', getEngineers)
engRouter.get('/readVerified-engs', getVerifiedEngineers)
engRouter.get('/readUnVerified-engs', getUnVerifiedEngineers)
engRouter.put('/update/:id', updateEng)
engRouter.put('/remove/:id', removeVerifiedEng)



// usersRouter.post('/register-user', validateUserRegistration, registerUser)

// usersRouter.post('/login-user', validateUserLogin, login)
// usersRouter.get('/get-user-profile', authenticate, getUserProfile)
// usersRouter.get('/logout', authenticate, logout)


export default engRouter