import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { filterConditionOperators } from 'src/app/models/filter-operator.type';
import { FilterConditionOperatorWithIcon } from './../../models/filter-operator.type';


@Component({
    selector: 'app-filter-operator-list',
    templateUrl: './filter-operator-list.component.html',
    styleUrls: ['./filter-operator-list.component.scss']
})
export class FilterOperatorListComponent implements OnInit, OnChanges {
    @Input() showOperators: boolean

    @Output('f-click') click = new EventEmitter<any>()

    @ViewChild('operatorList', { static: true }) operatorList: ElementRef<any>

    constructor(private _renderer2: Renderer2) { }

    operators = filterConditionOperators
    activeOperator: FilterConditionOperatorWithIcon

    ngOnInit(): void {
        this.activeOperator ??= this.operators[0]
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['showOperators'].currentValue) {
            this._renderer2.setProperty(this.operatorList.nativeElement, 'scrollTop', 0)
        }
    }

    onSelectedOperator(operator: FilterConditionOperatorWithIcon) {
        this.activeOperator = operator
        this.click.emit(operator.operator)
    }
}
