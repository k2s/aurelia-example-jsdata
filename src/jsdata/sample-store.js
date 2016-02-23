import {inject} from 'aurelia-framework';
import {DataSourceManager} from './data-source';

@inject(DataSourceManager)
export default class SampleStore {
    constructor(dataSourceManager) {
        this.dataSource = dataSourceManager;

        this.User = this.dataSource.DS.defineResource('user');
    }

    loadUser() {
        return this.User.find(1).then(user => {
            this.user = user;
            return user;
        });
    }
}