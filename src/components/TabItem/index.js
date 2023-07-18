// Write your code here
import './index.css'

const TabItem = props => {
  const {tabs, isActive, changeApp} = props
  const {displayText, tabId} = tabs

  const displayApps = () => {
    changeApp(tabId)
  }

  const currentTabStyle = isActive ? 'active-tab-style' : ''

  const tabList = (
    <li className="app-tabs">
      <button
        type="button"
        className={`tab-btn ${currentTabStyle}`}
        onClick={displayApps}
      >
        {displayText}
      </button>
    </li>
  )
  return tabList
}

export default TabItem
