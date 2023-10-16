import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild, ViewEncapsulation, Renderer2 } from '@angular/core';
import * as _ from 'lodash';
import { FilterConditionOperator, FilterGroupOperator } from 'src/app/models/filter-operator.type';
import { ResourceProperty } from 'src/app/models/resource-property.model';

@Component({
    selector: 'app-filter-value-or-parameter',
    templateUrl: './filter-value-or-parameter.component.html',
    styleUrls: ['./filter-value-or-parameter.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FilterValueOrParameterComponent implements OnChanges {
    @Input() showValueOrParameter: boolean
    @Input() property: ResourceProperty
    @Input() operator?: FilterConditionOperator | FilterGroupOperator

    @Output() add = new EventEmitter<any>()

    hideParameterSection = true
    value1: any
    value2: any
    values: any[] = []
    outputValues: any[] = []
    parameter1: string
    parameter2: string
    parameters: string[] = []
    outputParameters: string[] = []
    showCalendar: boolean
    booleanValues: any[] = [
        { label: 'Verdadeiro', value: true },
        { label: 'Falso', value: false }
    ]
    showDialog: boolean


    ngOnChanges(): void {
        this.resetValues()
        this.resetParameters()

        if (this.hasAnyValue()) {
            this.hideParameterSection = true
            return
        }

        if (this.hasAnyParameter()) {
            this.hideParameterSection = false
            return
        }

        if (!this.hasAnyValue() && !this.hasAnyParameter()) {
            this.hideParameterSection = true
            return
        }
    }

    toogleParameterSection() {
        if (this.hideParameterSection) {
            this.resetValues()
        }
        else {
            this.resetParameters()
        }

        this.hideParameterSection = !this.hideParameterSection
    }

    onAdd() {
        if (this.hideParameterSection) {
            this.pushOutputValues()
            this.add.emit({ values: this.outputValues, isValue: true })
            this.resetValues()
        } else {
            this.pushOutputParameters()
            this.add.emit({ parameters: this.outputParameters, isParameter: true })
            this.resetParameters()
        }

        this.showValueOrParameter = false
    }

    onFocusCalender() {
        this.showCalendar = true
    }

    onCloseCalender() {
        this.showCalendar = false
    }

    onCloseParameterModal(parameter) {
        console.log(parameter)
    }

    addValue() {
        if (!_.isEmpty(this.value1?.toString())) {
            this.values.push(this.value1)
            this.value1 = null
        }
    }

    removeValue(item: any) {
        const index = this.values.findIndex(current => current === item)
        if (index < 0) return

        this.values.splice(index, 1)
    }

    addParameter() {
        if (!_.isEmpty(this.parameter1)) {
            this.parameters.push(this.parameter1)
            this.parameter1 = ''
        }
    }

    removeParameter(parameter: string) {
        const index = this.parameters.findIndex(current => current === parameter)
        if (index < 0) return

        this.parameters.splice(index, 1)
    }

    formatShowValue(value: any) {
        if (value instanceof Date) {
            return value.toLocaleDateString()
        }
        return value
    }

    private hasAnyValue() {
        return !_.isEmpty(this.value1) || !_.isEmpty(this.value2)
    }

    private hasAnyParameter() {
        return !_.isEmpty(this.parameter1) || !_.isEmpty(this.parameter2)
    }

    private pushOutputValues() {
        if (!_.isEmpty(this.values)) {
            for (let item of this.values) {
                this.outputValues.push(item instanceof Date ? item.toISOString() : item)
            }
            return
        }

        if (this.value1 instanceof Date) {
            this.outputValues.push(this.value1.toISOString())
        }

        if (this.value2 instanceof Date) {
            this.outputValues.push(this.value2.toISOString())
        }

        if (!_.isEmpty(this.value1?.toString()) && !(this.value1 instanceof Date)) {
            this.outputValues.push(this.value1)
        }

        if (!_.isEmpty(this.value2?.toString()) && !(this.value2 instanceof Date)) {
            this.outputValues.push(this.value2)
        }
    }

    private pushOutputParameters() {
        if (!_.isEmpty(this.parameters)) {
            for (let item of this.parameters) {
                this.outputParameters.push(item)
            }
        }

        if (!_.isEmpty(this.parameter1)) {
            this.outputParameters.push(this.parameter1)
        }

        if (!_.isEmpty(this.parameter2)) {
            this.outputParameters.push(this.parameter2)
        }
    }

    private resetValues() {
        this.value1 = null
        this.value2 = null
        this.values = []
        this.outputValues = []
    }

    private resetParameters() {
        this.parameter1 = ''
        this.parameter2 = ''
        this.parameters = []
        this.outputParameters = []
    }
}
