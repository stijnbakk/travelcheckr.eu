
import type { TCountry } from "$lib/interfaces/IAllowedValues/interfaceCountries";
import type INotionIPARuleQuery from "$lib/interfaces/IQueryingFromNotion/queryBody";
import axios from "axios";
import generateQueryBody from "./generateQueryBody";
import logNotionRuleQuery from "./logNotionRuleQuery";


export default async function fetchNotionRules (country, search_date) {
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
        const query:INotionIPARuleQuery = generateQueryBody(country,search_date);
        const headers = {
            headers: {
                'content-type': 'application/json', 
                'Authorization': import.meta.env.VITE_RULESET_SECRET, 
                'Notion-Version': '2021-08-16',
            }
        }

        // Make POST request to Notion API
        const queriedNotionRulesResult = await axios.post(uri, query, headers);
        // const loggedQueryResult = await logNotionRuleQuery();
        // TODO: add types to axios
        

        // Return response
        if(queriedNotionRulesResult){
            // console.log('queriednotionRulesResult:')
            // console.log(queriedNotionRulesResult.data.results[3].properties.description)
            return queriedNotionRulesResult
        }
    } catch (error){
        console.error(error)
    }
}