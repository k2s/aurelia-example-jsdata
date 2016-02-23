//import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import SampleStore from 'jsdata/sample-store';

@inject(SampleStore)
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';

  constructor(sampleStore) {
    this.store = sampleStore;
  }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName() {
    if (this.store.user) {
      return `${this.store.user.firstName} ${this.store.user.lastName}`;
    } else {
      return "";
    }
  }

  submit() {
    if (this.store.user.DSHasChanges()) {
      this.store.user.DSSave();
      alert("data saved in Firebase");
    } else {
      alert(`there was no change in data`);
    }
  }

  canDeactivate() {
    if (this.store.user.DSHasChanges()) {
      return confirm('Are you sure you want to leave?');
    }
  }

  attached() {
    return this.store.loadUser();
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
