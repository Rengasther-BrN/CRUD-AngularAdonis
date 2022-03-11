import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Neighborhood'


export default class NeighborhoodsController {
  
  // Rota de criação do registro
    public async store({ request, response }: HttpContextContract) {
      const body = request.body()
      
      const moment = await Moment.create(body)
  
      response.status(201)
  
      return {
        message: 'Bairro enviado com sucesso!',
        data: moment,
      }
    }
  
    // Rota de resgate de todos os registros
        public async index() {
        const neighborhoods = await Moment.all()
  
        return {
            data: neighborhoods,
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
        message: 'Bairro deletado com sucesso!',
        data: moment,
      }
    }
  
    // Rota de alteração (UPDATE) de um registro
    public async update({ params, request }: HttpContextContract) {
      const body = request.body()
  
      const moment = await Moment.findOrFail(params.id)
  
      moment.Neighborhood = body.neighborhood
        
      await moment.save()
  
      return {
        message: 'bairro atualizado com sucesso!',
        data: moment,
      }
    }
  }