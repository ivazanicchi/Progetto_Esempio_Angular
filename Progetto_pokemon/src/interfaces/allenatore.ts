export interface IAllenatore {
  id: number;
  username: string;
  dataDiNascita: string;
  email: string;
  password: string;
  rooster: {}[] | null | undefined;
}
