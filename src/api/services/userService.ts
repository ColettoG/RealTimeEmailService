import User, { IUser } from '../models/User';

const UserService = {
    async createUser(data: Partial<IUser>): Promise<IUser> {
        const user = new User(data);
        console.log('UserService.createUser:', user);
        return await user.save();
    },

    async getUsers(): Promise<IUser[]> {
        return await User.find();
    },

    async getUserById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    },

    async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, data, { new: true });
    },

    async deleteUser(id: string): Promise<boolean> {
        const result = await User.findByIdAndDelete(id);
        return result !== null;
    }
};

export default UserService;
