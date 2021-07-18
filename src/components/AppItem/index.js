import './index.css'

const AppItem = props => {
  const {appData} = props
  const {appName, imageUrl} = appData

  return (
    <li className="app-container">
      <img src={imageUrl} className="app-icon" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
