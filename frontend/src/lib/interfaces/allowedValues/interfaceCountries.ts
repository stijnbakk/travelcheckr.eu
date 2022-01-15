export type TCountry = 
    "germany" | 
    "sweden"

export interface ICountry {
    code: TCountry,
    name: string
}

export type TCountries = ICountry[]