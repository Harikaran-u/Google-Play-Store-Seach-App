// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props

  const {appName, imageUrl} = app

  const apps = (
    <li className="apps-list app-cont">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )

  return apps
}

export default AppItem
