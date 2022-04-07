import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import  Propertie  from 'App/Models/Propertie'

import { StoreValidator, UpdateValidator} from 'App/Validators/Propertie'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Propertie.all()
    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const post = await Propertie.create( data )

    return post
  }

  public async show({ params }: HttpContextContract) {
    
    const post = await Propertie.findOrFail(params.id)
  
    return post
  }

  public async update({ params, request }: HttpContextContract) {
    const post = await Propertie.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    post.merge(data)

    await post.save()
  
    return post

  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Propertie.findOrFail(params.id)

    await post.delete()
  }
}
