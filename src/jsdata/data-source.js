import DSFirebaseAdapter from 'js-data-firebase';
import JSData from 'js-data';

/**
 * Configure JSData library and provide access to JSData.DS instance
 */
export class DataSourceManager {

  /**
   * Access to JSData.DS instance
   * @returns {JSData.DS}
     */
  get DS() {
    return this._ds;
  }

  /**
   * Configure JSData library
   *
   */
  constructor() {
    // TODO temporary it uses Firebase adapter until we create own API server
    let adapter = new DSFirebaseAdapter({
      basePath: 'https://aurelia-jsdata-demo.firebaseio.com/'
    });

    this._ds = new JSData.DS();
    this._ds.registerAdapter('firebase', adapter, {default: true});
  }
}
