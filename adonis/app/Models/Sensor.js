'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class usuario2
 */
class sensor extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'usuario2Hook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * usuario2's schema
   */
  static get schema () {
    return {
      nombre: ''
    }
  }


    static get connection(){
      return 'mongodb';
  }
}

module.exports = sensor.buildModel('TipoDeSensor')
