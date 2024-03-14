import { Actions } from '../enums';

export default class Messages {
  protected readonly SQL_ERROR_MESSAGE: Map<number, string> = new Map([
    [1062, '[<name>] <property_name> already exist!'],
  ]);

  protected readonly ACTIONS_MESSAGE: Map<Actions, string> = new Map([
    [Actions.ADD_SUCCESS, '[<name>] <property_name> already exist!'],
  ]);
}
