import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/User'


export default class UsersController {                                // Rota de criação do registro
  
    // Rota de inclusão dos registros  
    public async store({ request }: HttpContextContract) {
      const data = request.only(['email','password'])
      const users = await Moment.create(data)

      return users
      
    }
  

    // Rota de resgate de todos os registros
    public async index() {
      const users = await Moment.all()
  
        return {
            data: users,
        }
    }
  
    //  Roda de resgate de apenas um registro especificado
    public async show({ params }: HttpContextContract) {
      const moment = await Moment.findOrFail(params.id)
  
      return {
        data: moment,
      }
    }
  
    // Rota de deleter um registro
    public async destroy({ params }: HttpContextContract) {
      const moment = await Moment.findOrFail(params.id)
  
      await moment.delete()
  
      return {
        message: 'Usuário deletado com sucesso!',
        data: moment,
      }
    }
  
    // Rota de alteração (UPDATE) de um registro
    public async update({ params, request }: HttpContextContract) {
      const body = request.body()
  
      const moment = await Moment.findOrFail(params.id)
  
      moment.email = body.email
        
      await moment.save()
  
      return {
        message: 'Usuário atualizado com sucesso!',
        data: moment,
      }
    }
}
