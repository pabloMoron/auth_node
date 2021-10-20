import {User, IUser} from './user'

const createUser = (user : IUser): void => {
    //const existent = User.findOne({name: user.name})
    user.save()
}