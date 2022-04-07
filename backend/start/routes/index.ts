import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './posts'
import './properties'


Route.get('/', async () => {
  return { hello: 'world' }
})


