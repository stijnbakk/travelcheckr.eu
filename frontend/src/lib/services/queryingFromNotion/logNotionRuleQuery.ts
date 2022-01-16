 import type { TCountry } from "$lib/interfaces/IAllowedValues/interfaceCountries";
 import type INotionIPARuleQuery from "$lib/interfaces/IQueryingFromNotion/queryBody";
 import axios from "axios";
import generateLogBody from "./generateLogBody";
 import generateQueryBody from "./generateQueryBody";
 
 
 export default async function logNotionRuleQuery (country, search_date) {
     /**
      * Summary. Make POST call to Notion API to retrieve rules
      * 
      * @param {TCountry} country      - The country code to query for
      * @param {string} search_date  - The date to search for
      */
     
     console.log('logNotionRuleQuery() called')
     try {
         
         // Setup config for post request
         const uri:string = import.meta.env.VITE_QUERYLOG_URI;
         const query = generateLogBody(country,search_date); 
         const headers = {
             headers: {
                 'content-type': 'application/json', 
                 'Authorization': import.meta.env.VITE_RULESET_SECRET, 
                 'Notion-Version': '2021-08-16',
             }
         }
 
         // Make POST request to Notion API
         console.log('about to attempt posting of logging query')
        //  const logQueryResult = await axios.post(uri, query, headers);
        axios.post(uri, query, headers);
        //  console.log(logQueryResult);
         // TODO: add types to axios

     } catch (error){
         console.error(error)
     }
 }