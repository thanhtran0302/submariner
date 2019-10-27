export enum QueryConnector {
  OR = "OR",
  AND = "AND"
}

export enum Operator {
  GREATER = ">",
  GREATER_EQUAL = ">=",
  LOWER = "<",
  LOWER_EQUAL = "<=",
  EQUAL = "="
}

export interface RangeQuery {
  facet: string;
  min: number;
  max: number;
  // false by default
  strictMin?: boolean;
  strictMax?: boolean;
  // AND by default
  connector?: QueryConnector;
}

export interface ChoiceQuery {
  facet: string;
  value: string;
}

export type ChoicesQuery = ChoiceQuery[];

export type AlgoliaQuery = Array<Array<RangeQuery | ChoicesQuery>>;

// Array of array queries.
// Everything inside of sub-array is AND
// Every sub-array neighbor is OR
/*
[
  [
    {
      facet: rooms,
      min: 5,
      max: 10,
      connector: 'AND'
    }
  ],
  [
    {
      facet: localisation
      value: Paris
    },
    {
      faceet: localisation,
      value: Paris
    }
  ]
]
*/
