export default function generateRuleFeedbackBody(destination, arrival_date, feedback, name, email): any {
    return {
        "parent":{
            "database_id": import.meta.env.VITE_RULEFEEDBACK_DB_ID,
        },
        "properties":{
            "destination":{
                "title":[{
                    "text":{
                        "content":destination
                    }
                }]
            },		
            "arrival_date":{
                "rich_text": [
                    {"text":{"content":arrival_date}}
                ]
            },
            "feedback":{
                "rich_text": [
                    {"text":{"content":feedback}}
                ]
            },
            "name":{
                "rich_text": [
                    {"text":{"content":name}}
                ]
            },
            "email":{
                "rich_text": [
                    {"text":{"content":email}}
                ]
            },
            "query_source":{
                "rich_text": [
                    {"text":{"content":import.meta.env.VITE_QUERYLOG_ORIGIN}}
                ]
            }
            
        }
    }
}