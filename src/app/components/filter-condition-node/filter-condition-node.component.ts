import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FilterConditionOperator, filterConditionOperators } from 'src/app/models/filter-operator.type';
import { Filter } from 'src/app/models/filter.model';
import { ResourceProperty } from 'src/app/models/resource-property.model';

@Component({
    selector: 'app-filter-condition-node',
    templateUrl: './filter-condition-node.component.html',
    styleUrls: ['./filter-condition-node.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FilterConditionNodeComponent implements OnInit {
    @Input() properties: ResourceProperty[]
    @Input() filter: Filter

    @Output() changeFilter = new EventEmitter<any>()
    @Output() removeNode = new EventEmitter<any>()

    showProperties = false
    showOperators = false
    showValueOrParameter = false
    property: ResourceProperty

    ngOnInit(): void {
        this.filter ??= {
            operator: filterConditionOperators[0].operator
        }
        this.property = this.properties.find(x => x.name == this.filter.property) ?? this.properties[1]
    }

    onRemoveNode() {
        this.removeNode.emit()
    }

    tooglePropertyList() {
        if (this.showOperators || this.showValueOrParameter) {
            this.showOperators = false
            this.showValueOrParameter = false
        }

        this.showProperties = !this.showProperties
    }

    toogleOperatorList() {
        if (this.showProperties || this.showValueOrParameter) {
            this.showProperties = false
            this.showValueOrParameter = false
        }

        this.showOperators = !this.showOperators
    }

    toogleValueOrParameter() {
        if (this.showProperties || this.showOperators) {
            this.showProperties = false
            this.showOperators = false
        }

        this.showValueOrParameter = !this.showValueOrParameter
    }

    onSelectedProperty(property: ResourceProperty) {
        this.property = property
        this.filter.property = property.name
        this.showProperties = false

        this.changeFilter.emit(this.filter)
    }

    onSelectedOperator(operator: FilterConditionOperator) {
        this.filter.operator = operator
        this.showOperators = false

        this.changeFilter.emit(this.filter)
    }

    onAddValueOrParameter(value: any) {
        if (value.isValue) {
            this.filter.parameters = []
            this.filter.values = value.values
        }

        if (value.isParameter) {
            this.filter.values = []
            this.filter.parameters = value.parameters
        }

        this.showValueOrParameter = false

        this.changeFilter.emit(this.filter)
    }
}
