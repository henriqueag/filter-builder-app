import { Component } from '@angular/core';
import { ResourceProperty } from './models/resource-property.model';
import { Filter } from './models/filter.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    properties: ResourceProperty[] = [
        { name: 'property_1', displayName: 'Propriedade Boolean', type: 'boolean' },
        { name: 'property_2', displayName: 'Propriedade Number', type: 'number' },
        { name: 'property_3', displayName: 'Propriedade String', type: 'string' },
        { name: 'property_4', displayName: 'Propriedade Date', type: 'date' }
    ]

    filter: Filter = {
        property: 'property_3',
        operator: 'GreaterOrEquals',
        values: [12]
    }

    onChangeOperator() {
        // console.log('Solicitou alteração do operador')
    }

    onChangeFilter(filter: Filter) {
        console.log(filter)
    }

    onRemoveNode() {
        // console.log('Solicitou a remoção do nodo')
    }

    onClick() {
        // console.log('Selecionou uma propriedade')
    }
}
