export type TCountry = 
    "germany" | 
    "belgium" |
    "austria" |
    "france" 

export interface ICountry {
    code: TCountry,
    name: string
}

export type TCountries = ICountry[]