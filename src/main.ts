import { startApp } from './app'

startApp().then(app => {
  app.listen({ port: 3333 }).then(() => {
    console.log('Servidor rodando em http://localhost:3333')
    console.log('Documentação Swagger: http://localhost:3333/docs')
  }).catch(err => {
    console.error('Erro ao iniciar servidor:', err)
  })
}).catch(err => {
  console.error('Erro ao iniciar aplicação:', err)
})
