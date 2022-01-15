
/**
 * Summary. Retrieve rules from Notion
 * 
 * Description. Retrieve rules from Notion
 * 
 * @param {TCountry} country      - The country code to query for
 * @param {string} search_date  - The date to search for
 */



// Services
import fetchNotionRules from '$lib/services/queryingFromNotion/fetchNotionRules';

// Types & Interfaces
import type { TCountry } from '$lib/interfaces/allowedValues/interfaceCountries';
import { cleanNotionRules } from '$lib/services/parseData/cleanNotionRules';

// create endpoint for POST, return unprocessed array of rules
export async function post() {
    try {
        const queryNotionRulesResult = await fetchNotionRules();

        if (queryNotionRulesResult.status === 200 && queryNotionRulesResult.data.object === 'list') {
            const cleanedRuleSet = cleanNotionRules(queryNotionRulesResult.data.results);
            return{
                status: 200,
                body: cleanedRuleSet,
            }
        
        } else {
            console.error('error: ', queryNotionRulesResult.status)
            console.error(queryNotionRulesResult)
        }
    } catch (error) {
        console.error(error)
    }
}





