import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Entrega de Site',
          type: 'income',
          category: 'Desenvolvimento',
          amount: 3957,
          date: new Date('2022-06-10 14:28'),
        },
        {
          id: 2,
          title: 'Bateria Tama',
          type: 'outcome',
          category: 'Música',
          amount: 4200,
          date: new Date('2022-05-31 11:43'),
        },
        {
          id: 3,
          title: 'Pratos hit-hat',
          type: 'income',
          category: 'Música',
          amount: 530,
          date: new Date('2022-05-22 18:30'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
