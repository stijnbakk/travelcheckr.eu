export default function generateLogBody(country, search_date): any {
    return {
        "parent":{
            "database_id": import.meta.env.VITE_QUERYLOG_DB_ID,
        },
        "properties":{
            "query_title":{
                "title":[{
                    "text":{
                        "content":"query via serverside api"
                    }
                }]
            },		
            "destination":{
                "rich_text": [
                    {"text":{"content":country}}
                ]
            },
            "arrival_date":{
                "rich_text": [
                    {"text":{"content":search_date}}
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