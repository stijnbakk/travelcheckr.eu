export type TCountry = 
    "germany" | 
    "belgium"

export interface ICountry {
    code: TCountry,
    name: string
}

export type TCountries = ICountry[]