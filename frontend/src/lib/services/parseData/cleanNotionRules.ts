export interface TCleanedRule{
    rule_type:string,
    title:string,
    country:string,
    description:string,
    link:string | null,
}

export interface TGroupedRules{
    "a_actions_before_travel":{
        text: string
        rules: TCleanedRule[]
    }
    "b_documents_during_travel":{ 
        text: string
        rules: TCleanedRule[]
    },
    "c_rules_during_stay": {
        text: string
        rules: TCleanedRule[]
    }
    "d_expect_during_stay": {
        text: string,
        rules:TCleanedRule[]
    }
}


export function cleanNotionRules(rawApiData:Array<any>):any{
    // LOGIC:
    // 1. Clean up rules to keep only information we need
    // 2. Group rules by type
    // 3. Sort rules within the groups
    

    // Step 1: clean up the rules
    const cleanedRuleSet:Array<TCleanedRule> = [];

    for(let i=0;i<rawApiData.length;i++){
        const cleanedRule = cleanSingleRule(rawApiData[i].properties);
        cleanedRuleSet.push(cleanedRule);
    }

    

    // Step 2: group rules by type
    const groupedRules:TGroupedRules = {
        "a_actions_before_travel": {
            text:'Actions to take before you travel',
            rules:[],
        },
        "b_documents_during_travel": {
            text:'Documents to take during your travel',
            rules:[],
        },
        "c_rules_during_stay": {
            text:'Rules to be followed during your stay',
            rules:[],
        },
        "d_expect_during_stay": {
            text:'What you can expect during your stay',
            rules:[],
        }
    };

    for(let i=0;i<cleanedRuleSet.length;i++){
        switch(cleanedRuleSet[i].rule_type){
            case "a_actions_before_travel":
                groupedRules["a_actions_before_travel"].rules.push(cleanedRuleSet[i]);
                break;
            case "b_documents_during_travel":
                groupedRules["b_documents_during_travel"].rules.push(cleanedRuleSet[i]);
                break;
            case "c_rules_during_stay":
                groupedRules["c_rules_during_stay"].rules.push(cleanedRuleSet[i]);
                break;
            case "d_expect_during_say":
                groupedRules["d_expect_during_stay"].rules.push(cleanedRuleSet[i]);
                break;
            };
    }

    // Step 3
    // TODO: add sorting

    // Return the result
    return groupedRules
}


function cleanSingleRule(rawRuleData:any){
    // console.log('starting cleanSingleRule()')

    // Define type 
    const cleanedRule:TCleanedRule = {
        rule_type:'',
        title:'',
        country:'',
        description:'',
        link:null,
    };

    // Set ruletype
    rawRuleData.type ? cleanedRule.rule_type = rawRuleData.type.select.name : cleanedRule.rule_type = '';

    // Set rule title
    rawRuleData.Name ? cleanedRule.title = rawRuleData.Name.title[0].plain_text : ''

    // Set Country    
    cleanedRule.country = rawRuleData.country.select.name;

    // Set description
    rawRuleData.description.rich_text.length > 0 ? 
        cleanedRule.description = rawRuleData.description.rich_text[0].plain_text
    : 
        cleanedRule.description = ''
    
    // Set url
    cleanedRule.link = rawRuleData.link.url;
    

    // console.log('result of cleanSingleRule()')
    // console.log(cleanedRule)
    // console.log('finished cleanSingleRule()')

    return cleanedRule

}