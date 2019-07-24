import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() control: FormControl;


  constructor(private errorService: ErrorService) { }

  ngOnInit() {
  }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        const errorMessage = this.errorService.getValidatorErrorMessage(propertyName);
        return errorMessage;
      }
    }

    return null;
  }
}
