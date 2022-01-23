// Import libraries
import axios from 'axios';

// Import custom services
import generateRuleFeedbackBody from '$lib/services/queryingFromNotion/generateRuleFeedbackBody';

// Import constants
import notionApiRequestHeaders from '$lib/constants/notionApiRequestHeaders';
import generateNewsletterSignupBody from '$lib/services/queryingFromNotion/generateNewsletterSignupBody';

// Import types & Interfaces
// n/a


// create endpoint for POST, return unprocessed array of rules
export async function post(request) {
    try {
        // 1. Parse incoming data
        // 2. Store incoming data
        const email = request.body.email ? request.body.email : 'no email provided';

        // 3. Create query body
        const query = generateNewsletterSignupBody(email);

        // 4.  Setup request
        const uri:string = import.meta.env.VITE_RULEFEEDBACK_URI;
        const headers = notionApiRequestHeaders;

        // 5. Make POST request to log the query to Notion back-end
        const logNewsletterSignup = await axios.post(uri, query, headers);


        // 6. Process result of querying Notion API
        if(logNewsletterSignup){
            console.log(`Logging of ruleFeedback succesfull`);
            return {status: 200}
        } 
        
    } catch (error) {
        console.log(`Caught error executing in /api/log_query with request: ${request.body}`, error);
    }
}





