export interface Beer {
  id: number;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  imageURL: string;
  abv: number;
  ibu?: number;
  targetFg: number;
  targetOg: number;
  ebc?: number;
  srm?: number;
  ph?: number;
  attenuationLevel: number;
  volume: BoilVolume;
  boilVolume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  foodPairing: string[];
  brewersTips: string;
  contributedBy: ContributedBy;
}

export interface BoilVolume {
  value: number;
  unit: Unit;
}

export enum Unit {
  Celsius = "celsius",
  Grams = "grams",
  Kilograms = "kilograms",
  Litres = "litres",
}

export enum ContributedBy {
  AliSkinnerAliSkinner = "Ali Skinner <AliSkinner>",
  SamMasonSamjbmason = "Sam Mason <samjbmason>",
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export interface Hop {
  name: string;
  amount: BoilVolume;
  add: Add;
  attribute: Attribute;
}

export enum Add {
  DryHop = "dry hop",
  End = "end",
  Middle = "middle",
  Start = "start",
}

export enum Attribute {
  Aroma = "aroma",
  AttributeFlavour = "Flavour",
  Bitter = "bitter",
  Flavour = "flavour",
}

export interface Malt {
  name: string;
  amount: BoilVolume;
}

export interface Method {
  mashTemp: MashTemp[];
  fermentation: Fermentation;
  twist?: string;
}

export interface Fermentation {
  temp: BoilVolume;
}

export interface MashTemp {
  temp: BoilVolume;
  duration?: number;
}
