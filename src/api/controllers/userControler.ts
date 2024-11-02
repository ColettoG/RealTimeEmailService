import UserService from '../services/userService';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

const UserController = {
    createUser: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        try {
            console.log('Creating user:', req.body);
            const user = await UserService.createUser(req.body);
            console.log('User created:', user);
            res.status(201).json(user);
        } catch (error) {
            console.log('Error creating user:', error);
            res.status(400).json({ error: 'Error creating user' });
        }
    }),

    getUser: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await UserService.getUserById(req.params.id);
            console.log('User found:', user);
            res.status(200).json(user);
        } catch (error) {
            console.log('Error getting user:', error);
            res.status(404).json({ error: 'User not found' });
        }
    }),

    updateUser: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            console.log('User updated:', user);
            res.status(200).json(user);
        } catch (error) {
            console.log('Error updating user:', error);
            res.status(400).json({ error: 'Error updating user' });
        }
    }),

    deleteUser: asyncHandler(async (req: Request, res: Response): Promise<void> => {
        try {
            const success = await UserService.deleteUser(req.params.id);
            console.log('User deleted:', success);
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.log('Error deleting user:', error);
            res.status(404).json({ error: 'User not found' });
        }
    })
};

export default UserController;