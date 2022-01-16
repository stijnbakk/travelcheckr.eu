
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
import logNotionRuleQuery from '$lib/services/queryingFromNotion/logNotionRuleQuery';

// create endpoint for POST, return unprocessed array of rules
export async function post() {
    console.log('log_rules() serverside called')
    try {
        const logResult = await logNotionRuleQuery('test','2022-01-01');
        return {
            status: 200
        }
    } catch (error) {
        console.error(error)
    }
}





