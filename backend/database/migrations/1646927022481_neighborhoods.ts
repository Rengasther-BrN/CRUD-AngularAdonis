import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Neighborhoods extends BaseSchema {
  protected tableName = 'neighborhoods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Neighborhood')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
