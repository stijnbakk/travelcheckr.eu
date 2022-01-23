export default function generateFeedbackBody(name, email, feedback): any {
    return {
        "parent":{
            "database_id": import.meta.env.VITE_FEEDBACK_DB_ID,
        },
        "properties":{
            "feedback":{
                "title":[{
                    "text":{
                        "content":feedback
                    }
                }]
            },
            "email":{
                "rich_text": [
                    {"text":{"content":email}}
                ]
            },     
            "name":{
                "rich_text": [
                    {"text":{"content":name}}
                ]
            },         
            "source":{
                "rich_text": [
                    {"text":{"content":import.meta.env.VITE_DEPLOY_MODE}}
                ]
            },          
        }
    }
}