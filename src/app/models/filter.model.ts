import { FilterConditionOperator, FilterGroupOperator } from "./filter-operator.type";

export interface Filter {
    operator?: FilterConditionOperator | FilterGroupOperator
    property?: string
    values?: any[]
    parameters?: string[]
    conditions?: Filter[]
}
