
import axios from 'axios';
import { createQuery } from '$lib/Query';


export async function post() {
    console.log('server side getRules.js post() called')
    try {
        let result = await queryNotionRules();

        console.log(`number of results received: ${result.length}`)
        if (result){
            console.log('sending result to client:')
            console.log(result)
            return {
                status: 200,
                body: result
            }
        }
        // return {body:'result example from post()'}
    } catch (error) {
        console.error(error)
    }
}






async function queryNotionRules () {
    console.log('queryNotionRules() called')
    try {
        let query = createQuery('germany','2022-01-15');


        console.log(query)
        let uri = import.meta.env.VITE_RULESET_URI
        let headers = {
            headers: {
                'content-type': 'application/json', 
                'Authorization': import.meta.env.VITE_RULESET_SECRET, 
                'Notion-Version': '2021-08-16',
            }
        }

        // @ts-ignore
        const response = await axios.post(uri, query, headers);

        
        if(response){
            switch(response.status) {
                case 200:
                    console.log('notion auth succesful')
                    if(response.data.object === 'list'){
                        return response.data.results
                    } else { 
                        return {
                            error: true,
                            location: '/api/getRules --> queryNotionRules() --> case 200 --> response.data.object !== list',
                        }
                    }  
                default: 
                    return {
                        error: true,
                        location: '/api/getRules --> queryNotionRules() --> default',
                    }
            }
            
        }

    } catch (error){
        console.error(error)
    }
}