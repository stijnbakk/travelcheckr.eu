import type INotionIPARuleQuery from "$lib/interfaces/IQueryingFromNotion/queryBody";

export default function generateQueryBody(country, search_date): INotionIPARuleQuery {
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
        },
        "sorts": [
            {
                "property": "priority",
                "direction": "ascending"
              }
            ]
    }
}