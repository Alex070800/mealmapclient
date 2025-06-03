export enum LocalStorageVariableName {
  theme = 1,
  // isAuth,
  user,
}

class LocalStorageService {
  getValue<T>(name: LocalStorageVariableName) {
    let value = window.localStorage.getItem(LocalStorageVariableName[name]);
    if (value) {
      let result: T = JSON.parse(value);
      return result;
    } else return null;
  }

  setValue(name: LocalStorageVariableName, value: any) {
    if (value) {
      window.localStorage.setItem(
        LocalStorageVariableName[name],
        JSON.stringify(value)
      );
    }
  }

  deleteValue(name: LocalStorageVariableName) {
    window.localStorage.removeItem(LocalStorageVariableName[name]);
  }
}

export const localStorageService: LocalStorageService =
  new LocalStorageService();
