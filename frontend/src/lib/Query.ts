
export interface NotionRuleQuery {
	filter?: any,
    sorts?: any
}

export function createQuery(country, search_date): NotionRuleQuery {
    return {
        "filter": { "and": [
        {
            "property": "country",
            "select": {
                "equals": country
            }
        },
        {
            "property": "start_date",
            "date": {
                "on_or_before": search_date
            }
        },
        {
            "property": "end_date",
            "date": {
                "after": search_date
            }
        }
        ]
        }
    }
}