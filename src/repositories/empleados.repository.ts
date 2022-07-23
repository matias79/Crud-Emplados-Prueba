import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoempleadosDataSource} from '../datasources';
import {Empleados, EmpleadosRelations} from '../models';

export class EmpleadosRepository extends DefaultCrudRepository<
  Empleados,
  typeof Empleados.prototype.id,
  EmpleadosRelations
> {
  constructor(
    @inject('datasources.mongoempleados') dataSource: MongoempleadosDataSource,
  ) {
    super(Empleados, dataSource);
  }
}
