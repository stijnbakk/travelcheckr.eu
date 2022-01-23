export type TCountry = 
    "germany" | 
    "belgium" |
    "austria"

export interface ICountry {
    code: TCountry,
    name: string
}

export type TCountries = ICountry[]