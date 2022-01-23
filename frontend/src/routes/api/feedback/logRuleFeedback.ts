// Import libraries
import axios from 'axios';

// Import custom services
import generateRuleFeedbackBody from '$lib/services/queryingFromNotion/generateRuleFeedbackBody';

// Import constants
import notionApiRequestHeaders from '$lib/constants/notionApiRequestHeaders';

// Import types & Interfaces
// n/a


// create endpoint for POST, return unprocessed array of rules
export async function post(request) {
    try {
        console.log('logRuleFeedback post call received')
        console.log(request.body)
        // 1. Parse incoming data
        // const requestParsed = JSON.parse(request.body);
        // console.log(requestParsed)

        // 2. Store incoming data
        const destination = request.body.destination ? request.body.destination : 'no destination provided';
        const arrival_date = request.body.arrival_date ? request.body.arrival_date : 'no arrival date provided';
        const feedback = request.body.feedback ? request.feedback : 'No feedback provided';
        const name = request.body.name ? request.body.name : 'No name provided';
        const email = request.body.email ? request.body.email : 'No email provided';

        // 3. Create query body
        const query = generateRuleFeedbackBody(destination, arrival_date, feedback, name, email);

        // 4.  Setup request
        const uri:string = import.meta.env.VITE_RULEFEEDBACK_URI;
        const headers = notionApiRequestHeaders;

        // 5. Make POST request to log the query to Notion back-end
        const logRuleFeedbackyResult = await axios.post(uri, query, headers);


        // 6. Process result of querying Notion API
        if(logRuleFeedbackyResult){
            console.log(`Logging of ruleFeedback succesfull`);
            return {status: 200}
        } 
        
    } catch (error) {
        console.log(`Caught error executing in /api/log_query with request: ${request.body}`, error);
    }
}





