export class User {
  name: string;
  isMaster: boolean;

  constructor(name: string, isMaster: boolean) {
    this.name = name;
    this.isMaster = isMaster;
  }
}
