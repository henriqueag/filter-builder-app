export type FilterGroupOperator = 'And' | 'Or'

export type FilterConditionOperator =
      'In'
    | 'NotIn'
    | 'Between'
    | 'LessThan'
    | 'LessOrEquals'
    | 'GreaterThan'
    | 'GreaterOrEquals'
    | 'Equal'
    | 'NotEqual'
    | 'IsNull'
    | 'IsNotNull'
    | 'Like'
    | 'NotLike'

export interface FilterConditionOperatorWithIcon {
    icon: string
    operator: FilterConditionOperator
}

export const filterConditionOperators: FilterConditionOperatorWithIcon[] = [
    { icon: 'fa-solid fa-square-check', operator: 'In' },
    { icon: 'fa-solid fa-square-xmark', operator: 'NotIn' },
    { icon: 'fa-solid fa-left-right', operator: 'Between' },
    { icon: 'fa-solid fa-less-than', operator: 'LessThan' },
    { icon: 'fa-solid fa-less-than-equal', operator: 'LessOrEquals' },
    { icon: 'fa-solid fa-greater-than', operator: 'GreaterThan' },
    { icon: 'fa-solid fa-greater-than-equal', operator: 'GreaterOrEquals' },
    { icon: 'fa-solid fa-equals', operator: 'Equal' },
    { icon: 'fa-solid fa-not-equal', operator: 'NotEqual' },
    { icon: 'fa-regular fa-circle', operator: 'IsNull' },
    { icon: 'fa-solid fa-circle', operator: 'IsNotNull' },
    { icon: 'fa-solid fa-search', operator: 'Like' },
    { icon: 'fa-solid fa-ban', operator: 'NotLike' }
]
