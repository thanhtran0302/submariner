import { AlgoliaQuery } from "./interfaces";
import { OPERATOR_CONNECTOR_REGEX } from "./utils/constants";

/*
from : localisation:Paris AND localisation:Nice

to: [
  [
    {
      facet: localisation,
      value: Paris
    },
    {
      facet: localisation,
      value: Paris
    }
  ]
]
*/

export function toObject(query: string): AlgoliaQuery {
  const queryObject: AlgoliaQuery = [];

  console.log(query.split(new RegExp(OPERATOR_CONNECTOR_REGEX)));
  return queryObject;
}
