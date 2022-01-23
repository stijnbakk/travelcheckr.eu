export default function generateNewsletterSignupBody(email): any {
    return {
        "parent":{
            "database_id": import.meta.env.VITE_NEWSLETTERSIGNUP_DB_ID,
        },
        "properties":{
            "email":{
                "title":[{
                    "text":{
                        "content":email
                    }
                }]
            },   
            "source":{
                "rich_text": [
                    {"text":{"content":import.meta.env.VITE_DEPLOY_MODE}}
                ]
            },          
        }
    }
}