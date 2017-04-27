import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  static getErrorMessage(validatorName:string, validatorValue?:any) {
    let errorMessage = {
      'required' : 'This field is required.',
      'invalidName' : 'Name must contain only alphanumeric characters and space.',
      'invalidNationality' : 'Nationality must contain only alphanumeric characters and space.',
      'invalidPhone' : 'Phone must contain only numeric characters.',
      'invalidEmail' : 'E-mail address pattern is invalid.'

    };

    return errorMessage[validatorName];
  }

  static nameValidator(control) {
    if (control.value.match(/^[a-z ,.'-]{1,50}$/i)) {
      return null;
    } else {
      return { 'invalidName' : true}
    }
  }

  static nationalityValidator(control) {
    if (control.value.match(/^[a-z ]{1,45}$/i)) {
      return null;
    } else {
      return { 'invalidNationality' : true}
    }
  }

  static phoneValidator(control) {
    if (control.value.match(/^[0-9]{5,15}$/)) {
      return null;
    } else {
      return { 'invalidPhone' : true}
    }
  }

  static emailValidator(control) {
    if (control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return null;
    } else {
      return { 'invalidEmail' : true}
    }
  }

}
