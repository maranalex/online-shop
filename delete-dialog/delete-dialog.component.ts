import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  @Output() deleteRequest: EventEmitter<void> = new EventEmitter();

  approveAction() {
    this.deleteRequest.emit();
    this.activeModal.close();
  }

  closeDialog() {
    this.activeModal.close();
  }


  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
