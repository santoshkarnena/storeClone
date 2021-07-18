import './index.css'

const TabItem = props => {
  const {tabData, updateSelectedCategory, isActive} = props
  const updateCategory = () => {
    updateSelectedCategory(tabData.tabId)
  }

  const tabClass = isActive ? 'tab active' : 'tab'
  return (
    <li className="tab-item">
      <button type="button" className={tabClass} onClick={updateCategory}>
        {tabData.displayText}
      </button>
    </li>
  )
}

export default TabItem
