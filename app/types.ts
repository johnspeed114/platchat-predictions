export interface PredictionData {
    "Name": string;
    [key:string]: string | number | null | undefined;
  }

  export type PredictionType = 'Total' | '2023' | '2022' | '2021' | 'Game Changers'