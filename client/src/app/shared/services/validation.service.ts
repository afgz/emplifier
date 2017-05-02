import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  static nameValidator(control) {
    if (!control.value) {
      return null;
    }
    if (control.value.match(/^[a-z ,.'-]{1,50}$/i)) {
      return null;
    } else {
      return { 'invalidName' : true}
    }
  }

  static phoneValidator(control) {
    if (!control.value) {
      return null;
    }
    if (control.value.match(/^[0-9]{5,15}$/)) {
      return null;
    } else {
      return { 'invalidPhone' : true}
    }
  }

  static emailValidator(control) {
    if (!control.value) {
      return null;
    }
    if (control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return null;
    } else {
      return { 'invalidEmail' : true}
    }
  }

  static dateValidator(control) {
    if (!control.value) {
      return null;
    }
    if (control.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
      return null;
    } else {
      return { 'invalidDate' : true}
    }
  }

}
