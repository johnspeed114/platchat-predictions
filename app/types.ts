import { StaticImageData } from 'next/image';

export interface PredictionData {
  Name: string;
  [key: string]: string | number | null | undefined;
}

export interface MemberImage {
  happy: StaticImageData;
  sad: StaticImageData;
}

export type PredictionType =
  | 'Total'
  | '2023'
  | '2022'
  | '2021'
  | 'Game Changers';

export type MemberName =
  | 'Aevilcat'
  | 'Avast'
  | 'Balla'
  | 'Bren'
  | 'Sideshow'
  | 'Wyatt'
  | 'Sliggy'
  | 'TMV'
  | 'Group';
