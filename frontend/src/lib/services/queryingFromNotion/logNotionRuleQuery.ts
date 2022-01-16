/**
 * Summary. Make POST call to Notion to retrieve rules
 * 
 * @param {TCountry} country      - The country code to query for
 */
 import type { TCountry } from "$lib/interfaces/IAllowedValues/interfaceCountries";
 import type INotionIPARuleQuery from "$lib/interfaces/IQueryingFromNotion/queryBody";
 import axios from "axios";
import generateLogBody from "./generateLogBody";
 import generateQueryBody from "./generateQueryBody";
 
 
 export default function logNotionRuleQuery (country, search_date) {
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
         axios.post(uri, query, headers);
         // TODO: add types to axios

     } catch (error){
         console.error(error)
     }
 }