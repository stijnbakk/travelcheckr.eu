
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
import type { TCountry } from '$lib/interfaces/IAllowedValues/interfaceCountries';
import { cleanNotionRules } from '$lib/services/parseData/cleanNotionRules';
import logNotionRuleQuery from '$lib/services/queryingFromNotion/logNotionRuleQuery';

// create endpoint for POST, return unprocessed array of rules
export async function post(request) {
    console.log('query_rules called, request:')
    console.log(request.body)
    try {
        const queryNotionRulesResult = await fetchNotionRules('germany','2022-01-15');

        if (queryNotionRulesResult.status === 200 && queryNotionRulesResult.data.object === 'list') {
            const cleanedRuleSet = cleanNotionRules(queryNotionRulesResult.data.results);
            // console.log('before logNotionRuleQuery()')
            // logNotionRuleQuery('test','2022-01-01');
            // console.log('after logNotionRuleQuery()')
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





