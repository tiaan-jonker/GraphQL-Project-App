import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Clients } from './components/Clients'
import { AddClient } from './components/AddClient'
import { Jobs } from './components/Jobs'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          },
        },
        jobs: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

export const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Jobs />
                    <Clients />
                  </>
                }
              />
              <Route path='/newclient' element={<AddClient />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  )
}
