import { user1Mock, user2Mock } from "../mocks/values/user-mock";
import { User } from "../mocks/view-models/user";
import {
  localStorageService,
  LocalStorageVariableName,
} from "./local-storage-service";

class AuthService {
  async login(id:number) {
    try {
      let user: User = id===1 ? user1Mock : user2Mock;
      localStorageService.setValue(LocalStorageVariableName.user, user);
      return user;
    } catch (error) {
      return user1Mock;
    }
  }

  async logout() {
    try {
      localStorageService.deleteValue(LocalStorageVariableName.user);
    } catch (error) {}
  }
}

export const authService: AuthService = new AuthService();
