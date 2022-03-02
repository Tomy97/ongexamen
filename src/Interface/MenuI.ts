export interface MenuI {
  navbar:  Campito[];
  campito: Campito[];
  club:    Campito[];
}

interface Campito {
  id:   number;
  name: string;
}