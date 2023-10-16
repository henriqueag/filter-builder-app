import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-create-or-update-parameter-modal',
  templateUrl: './filter-create-or-update-parameter-modal.component.html',
  styleUrls: ['./filter-create-or-update-parameter-modal.component.scss']
})
export class FilterCreateOrUpdateParameterModalComponent {
    @Input() showModal: boolean

    @Output() closeModal = new EventEmitter<any>()
    parameter: any = {}

    onCloseModal() {
        this.showModal = false
        this.closeModal.emit(this.parameter);
    }
 }
