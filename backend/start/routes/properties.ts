import Route from '@ioc:Adonis/Core/Route'

Route.resource('/propertie', 'PropertiesController').apiOnly().middleware({
   //store: ['auth'],
   update: ['auth'],
   destroy: ['auth']
})
