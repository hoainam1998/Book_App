import { Actions } from '../enums';

export default class Messages {
  protected readonly SQL_ERROR_MESSAGE: Map<number, string> = new Map([
    [1062, '[<name>] <property_name> already exist!'],
    [1406, '[<name>] Data too long!'],
  ]);

  protected readonly ACTIONS_MESSAGE: Map<Actions, string> = new Map([
    [Actions.ADD_SUCCESS, '[<name>] Add <name> success!'],
    [Actions.DELETE_SUCCESS, '[<name>] Delete <name> success!'],
    [Actions.UPDATE_SUCCESS, '[<name>] Update <name> success!'],
  ]);
}
