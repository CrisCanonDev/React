import './App.css'
import { TwitterCardBox } from './TwitterCardBox.jsx'

export function App() {
  const users = [
    {
      user: 'criscano',
      name: 'Cristhian Canon',
      following: true
    },
    {
      user: 'elonmusk',
      name: 'Elon Musk',
      following: false
    },
    {
      user: 'FCBarcelona',
      name: 'FC Barcelona',
      following: true
    }
  ]

  return (

    <section className='App'>
      {
        users.map( ({user, name, following}) =>(
          <TwitterCardBox 
            key={user /*Unique identifier to identify element of the array */}
            user={user}
            initialState={following}
          >
            {name}
          </TwitterCardBox>

        ) 
        )
      }
    </section>
  )
}