
/**
 * Summary. Retrieve rules from Notion
 * 
 * Description. Retrieve rules from Notion
 * 
 * @param {TCountry} country      - The country code to query for
 * @param {string} search_date  - The date to search for
 */


// Import libraries
import axios from 'axios';

// Import custom services
import generateLogBody from '$lib/services/queryingFromNotion/generateLogBody';

// Import constants
import notionApiRequestHeaders from '$lib/constants/notionApiRequestHeaders';

// Import types & Interfaces
// n/a


// create endpoint for POST, return unprocessed array of rules
export async function post(request) {
    try {
        // 1. Parse incoming data
        const requestParsed = JSON.parse(request.body);

        // 2. Store incoming data
        const destination = requestParsed.destination;
        const search_date = requestParsed.search_date;

        // 3. Create query body
        const query = generateLogBody(destination,search_date);

        // 4.  Setup request
        const uri:string = import.meta.env.VITE_QUERYLOG_URI;
        const headers = notionApiRequestHeaders;

        // 5. Make POST request to log the query to Notion back-end
        const logQueryResult = await axios.post(uri, query, headers);


        // 6. Process result of querying Notion API
        if(logQueryResult){
            console.log(`Logging of query (${destination}, ${search_date}) succesfull`);
            return {status: 200}
        } 
        
    } catch (error) {
        console.log(`Caught error executing in /api/log_query with request: ${request.body}`, error);
    }
}





