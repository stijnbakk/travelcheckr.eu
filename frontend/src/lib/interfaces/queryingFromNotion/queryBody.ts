
export default interface INotionIPARuleQuery {
	filter?: IFilter,
}

interface IFilter {
    and?: Array<TFilterObject>,
    or?: Array<TFilterObject>,
}

type TFilterObject = {
    property: string,
    select?: any,
    date?: any
}

