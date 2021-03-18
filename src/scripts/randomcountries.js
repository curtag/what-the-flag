var chance = require('chance').Chance();

export default function randomCountries(numberOfCountries){
  const MAX_COUNTRIES = 253;
  // return 253 countries max
  const countries = chance.unique(chance.country, numberOfCountries > MAX_COUNTRIES ? MAX_COUNTRIES : numberOfCountries);
  return (
    countries
  )
}