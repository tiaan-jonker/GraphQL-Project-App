import { Header } from './components/Header'
import { ApolloProvider, ApolloClinet, InMemoryCache } from '@apollo/client'



export const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <h1>Hello World</h1>
      </div>
    </div>
  )
}
