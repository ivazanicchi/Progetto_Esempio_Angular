import { IAllenatore } from "src/interfaces/allenatore";

export class Allenatore implements IAllenatore {
  id: number;
  username: string;
  dataDiNascita: string;
  email: string;
  password: string;
  rooster: any[] | null | undefined;

  constructor(){
    this.id = 0;
    this.username = "";
    this.dataDiNascita = "";
    this.email = "";
    this.password = "";
    this.rooster = [];
  }
}
