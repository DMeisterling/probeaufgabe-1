export interface Patients  {
  entry: Array<entries>
}

export interface entries {
  resource: {
    gender?: string;
    name: Array<names>;
  };
}

export interface names {
  family: string;
  given: String[];
  use: string;
  birthDate?: string;
}
