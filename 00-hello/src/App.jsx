import './App.css'
import { TwitterCardBox } from './TwitterCardBox.jsx'

export function App() {
  const cris = { user: "criscano" }
  const elonmusk = { user: "elonmusk" }

  return (
    <section className='App'>   
      <TwitterCardBox {...cris}> {/* Passing objects as props */}
        Cristhian Canon
      </TwitterCardBox>

      <TwitterCardBox {...elonmusk}>
        Elon Musk
      </TwitterCardBox>

      <TwitterCardBox user="FCBarcelona" following>FC Barcelona</TwitterCardBox>{/*following=true as Props*/}
    </section>
  )
}