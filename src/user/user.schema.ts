import { EntitySchema } from 'typeorm';
import IUser from './user.interface';

const UserSchema = new EntitySchema<IUser>({
  name: 'users',
  columns: {
    user_id: {
      type: 'varchar',
      length: 20,
      primary: true,
    },
    name: {
      type: 'varchar',
      length: 200,
      nullable: false
    },
    avatar: {
      type: 'text',
      nullable: false,
    },
  },
});

export default UserSchema;
