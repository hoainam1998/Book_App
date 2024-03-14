import Messages from './messages';
import { Actions } from '../enums';

export default class MessageCreator extends Messages {
  private name: string;
  private propertyName: string;

  constructor(name: string, propertyName: string) {
    super();
    this.name = name;
    this.propertyName = propertyName;
  }

  getMessageByErrorNo(errorNo: number): string {
    return this.SQL_ERROR_MESSAGE.get(errorNo)
      .replace('<name>', this.name)
      .replace('<property_name>', this.propertyName);
  }

  getMessageByEvent(action: Actions): string {
    return this.ACTIONS_MESSAGE.get(action).replace('<name>', this.name);
  }
}
