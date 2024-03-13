import { IsNotEmpty, IsString } from 'class-validator';

export default class CategoryDTO {
  @IsNotEmpty({ message: 'Category is not empty!' })
  @IsString({ message: 'Category id must be string!' })
  category_id: string;

  @IsNotEmpty({ message: 'Name is not empty!' })
  @IsString({ message: 'Name must be string!' })
  name: string;
}
