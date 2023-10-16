import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilterPropertyListComponent } from './components/filter-property-list/filter-property-list.component';
import { FilterOperatorListComponent } from './components/filter-operator-list/filter-operator-list.component';
import { FilterValueOrParameterComponent } from './components/filter-value-or-parameter/filter-value-or-parameter.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FilterConditionNodeComponent } from './components/filter-condition-node/filter-condition-node.component';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { FilterCreateOrUpdateParameterModalComponent } from './components/filter-create-or-update-parameter-modal/filter-create-or-update-parameter-modal.component';
import { FilterListParameterComponent } from './components/filter-list-parameter/filter-list-parameter.component';

@NgModule({
    declarations: [
        AppComponent,
        FilterConditionNodeComponent,
        FilterPropertyListComponent,
        FilterOperatorListComponent,
        FilterValueOrParameterComponent,
        FilterCreateOrUpdateParameterModalComponent,
        FilterListParameterComponent
    ],
    imports: [
        DialogModule,
        TabViewModule,
        ButtonModule,
        InputTextModule,
        InputNumberModule,
        CalendarModule,
        DropdownModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
