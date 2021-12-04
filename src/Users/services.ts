import { IUser, User } from './user'

export const createUser = (user : IUser): void => {
    //const existent = User.findOne({name: user.name})
    user.save()
}

export async function changePassword(userId: string, actualPassword: string, newPassword: string): Promise<void> {
    try {
        const user = await validateChangePassword(userId,actualPassword, newPassword)
        user.setPassword(newPassword)
        user.save()
        return Promise.resolve()
     } catch (err) {
        return Promise.reject(err)
      }
}

async function validateChangePassword(userId: string, actualPassword: string, newPassword: string): Promise<IUser> {
    try {
        if (!actualPassword) throw("Actual password can't be empty.")
        if (actualPassword.length < 4) throw ("Actual password must have at least 4 characters.")
        if (!newPassword) throw ("New password can't be empty.")
        if (newPassword.length < 4) throw ("New password must have at least 4 characters.")

        const user = await User.findOne({ _id: userId, enabled: true }).exec()
        if (!user) throw ("The user doesn't exist")

        if(!user.authenticate(actualPassword)) throw ("Actual password isn't correct.")
        return Promise.resolve(user)
    } catch (err) {
        return Promise.reject(err)
    }
}