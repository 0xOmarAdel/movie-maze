interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
}

export type Cast = {
  cast: Person[];
  crew: Person[];
  id: number;
};
