/**
 * Summary. Make POST call to Notion to retrieve rules
 * 
 * @param {TCountry} country      - The country code to query for
 */
import type { TCountry } from "$lib/interfaces/allowedValues/interfaceCountries";
import type INotionIPARuleQuery from "$lib/interfaces/queryingFromNotion/queryBody";
import axios from "axios";
import generateQueryBody from "./generateQueryBody";


export default async function fetchNotionRules () {
    /**
     * Summary. Make POST call to Notion API to retrieve rules
     * 
     * @param {TCountry} country      - The country code to query for
     * @param {string} search_date  - The date to search for
     */
    
    console.log('queryNotionRules() called')
    try {
        
        // Setup config for post request
        const uri:string = import.meta.env.VITE_RULESET_URI;
        const query:INotionIPARuleQuery = generateQueryBody('germany','2022-01-15');
        const headers = {
            headers: {
                'content-type': 'application/json', 
                'Authorization': import.meta.env.VITE_RULESET_SECRET, 
                'Notion-Version': '2021-08-16',
            }
        }

        // Make POST request to Notion API
        const queriedNotionRulesResult = await axios.post(uri, query, headers);
        // TODO: add types to axios
        

        // Return response
        if(queriedNotionRulesResult){
            // console.log(queriedNotionRulesResult)
            return queriedNotionRulesResult
        }
    } catch (error){
        console.error(error)
    }
}