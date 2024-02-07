import './App.css'

export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
        className="tw-followCard-avatar"
        alt="Avatsrss" 
        src="https://unavatar.io/twitter/Midu"></img>
        <div className="tw-followCard-info">
          <strong>Cristhian Canon</strong>
          <span className="tw-followCard-infoUserName">@cristhianCanon</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">
          Follow
        </button>
      </aside>
    </article>
  )
}