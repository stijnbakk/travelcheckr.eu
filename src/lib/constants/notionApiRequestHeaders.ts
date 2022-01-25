const notionApiRequestHeaders = 
    {
        headers: {
            'content-type': 'application/json', 
            'Authorization': import.meta.env.VITE_RULESET_SECRET, 
            'Notion-Version': '2021-08-16',
        }
    }

export default notionApiRequestHeaders