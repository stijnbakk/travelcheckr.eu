
/**
 * Summary. Make POST request with query to Notion API. Return cleaned and grouped data.
 * 
 * Description. Make POST request with query to Notion API. Return cleaned and grouped data.
 * 
 * @param {TCountry} country      - The country code to query for
 * @param {string} search_date  - The date to search for
 */


// Import libraries
import axios from "axios";


// Import custom services
import cleanAndGroupNotionRules from '$lib/services/parseData/cleanAndGroupNotionRules';
import generateQueryBody from '$lib/services/queryingFromNotion/generateQueryBody';

// Import constants
import notionApiRequestHeaders from '$lib/constants/notionApiRequestHeaders';

// Import types & interfaces
import type INotionIPARuleQuery from '$lib/interfaces/IQueryingFromNotion/queryBody';


// TODO: make function typed
export async function post(request) {

    try {
        // 1. Parse incoming data
        const requestParsed = JSON.parse(request.body);

        // 2. Store incoming data
        const destination = requestParsed.destination;
        const search_date = requestParsed.search_date;

        // 3. Create query body
        const query:INotionIPARuleQuery = generateQueryBody(destination,search_date);

        // 4.  Setup request
        const uri:string = import.meta.env.VITE_RULESET_URI;
        const headers = notionApiRequestHeaders

        // 5. Make POST request with query to Notion API
        const queriedResult = await axios.post(uri, query, headers);

        // 6. Process result of querying Notion API
        if (queriedResult.status === 200 && queriedResult.data.object === 'list') {
            // 6.1. Clean and group Notion rules
            const groupedCleanedRuleSet = cleanAndGroupNotionRules(queriedResult.data.results);

            // 6.2 Log succesfull to console
            console.log(`Notion query (${destination}, ${search_date}) succesfull`);

            // 6.3. Return rules
            return{
                status: 200,
                body: groupedCleanedRuleSet,
            }
        } else {
            // 6.4 Log unsuccesfull to console
            console.error(`Notion query (${destination}, ${search_date}) error: `, queriedResult.status);
        }
    } catch (error) {
        // 7. Log error in post request
        console.log(`Caught error executing in /api/query_rules with request: ${request.body}`, error);
    }
}





