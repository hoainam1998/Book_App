import { EntitySchema } from 'typeorm';
import ICategory from './category.interface';

const CategorySchema = new EntitySchema<ICategory>({
  name: 'categories',
  columns: {
    category_id: {
      type: 'varchar',
      length: 20,
      primary: true,
    },
    name: {
      type: 'varchar',
      length: 200,
    },
  },
});

export default CategorySchema;
