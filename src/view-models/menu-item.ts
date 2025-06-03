import { ReactNode } from "react";

export class MenuItem {
  id: number;
  title: string;
  icon: ReactNode;
  link: string;

  constructor(id: number, title: string, icon: ReactNode, link: string) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.link = link;
  }
}
