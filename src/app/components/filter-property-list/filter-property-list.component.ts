import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { ResourceProperty } from './../../models/resource-property.model';

@Component({
    selector: 'app-filter-property-list',
    templateUrl: './filter-property-list.component.html',
    styleUrls: ['./filter-property-list.component.scss']
})
export class FilterPropertyListComponent implements OnInit, OnChanges {
    @Input() properties: ResourceProperty[]
    @Input() activeProperty: ResourceProperty
    @Input() showProperties: boolean

    @Output('f-click') click = new EventEmitter<any>()

    @ViewChild('propertyList', { static: true }) propertyList: ElementRef<any>

    constructor(private _renderer2: Renderer2) { }

    ngOnInit(): void {
        this.activeProperty ??= this.properties[0]
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['showProperties'].currentValue)
            this._renderer2.setProperty(this.propertyList.nativeElement, 'scrollTop', 0)
    }

    onSelectedProperty(property: ResourceProperty) {
        this.activeProperty = property

        this.click.emit(property)
    }
}
