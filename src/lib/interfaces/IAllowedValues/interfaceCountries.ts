export type TCountry = 
    "germany" | 
    "belgium" |
    "denmark" |
    "austria" |
    "france"  |
    "netherlands"

export interface ICountry {
    code: TCountry,
    name: string
}

export type TCountries = ICountry[]