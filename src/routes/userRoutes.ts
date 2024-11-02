import express from 'express';
import UserController from '../api/controllers/userControler';

const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello User!');
});

// Route to create a new user
router.post('/', UserController.createUser);

// Route to get a user by ID
router.get('/:id', UserController.getUser);

// Route to update a user by ID
router.put('/:id', UserController.updateUser);

// Route to delete a user by ID
router.delete('/:id', UserController.deleteUser);

export default router;
