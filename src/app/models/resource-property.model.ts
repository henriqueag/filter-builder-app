export interface ResourceProperty {
    name: string
    displayName: string
    type: ResourcePropertyType
}

export type ResourcePropertyType = 'number' | 'date' | 'string' | 'boolean'
