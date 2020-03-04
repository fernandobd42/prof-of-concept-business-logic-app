import React, { useState, useCallback, memo } from 'react'
import { Query, Builder, Utils } from 'react-awesome-query-builder'
import './style.css'

// import throttle from 'lodash/throttle'
import { RenderResult } from './components/RenderResult'
import config from './Utils/configs'
import data from './data'

const { checkTree, uuid, getTree, loadTree } = Utils

const emptyInitValue = { id: uuid(), type: 'group' }
const initValue = data && Object.keys(data).length > 0 ? data : emptyInitValue

const initialTree = checkTree(loadTree(initValue), config)

const App = memo(() => {
  const [state, setState] = useState({
    tree: initialTree,
    config
  })

  const onChange = useCallback(
    (immutableTree, config) => {
      // throttle(() => {
      setState({
        tree: immutableTree,
        config
      })
      // }, 100)

      const jsonTree = getTree(immutableTree) //can be saved to backend
      console.log(jsonTree)
    },
    [setState]
  )

  const renderBuilder = props => (
    <div className="query-builder-container" style={{ padding: '10px' }}>
      <div className="query-builder">
        <Builder {...props} />
      </div>
    </div>
  )

  return (
    <>
      <Query {...config} value={state.tree} onChange={onChange} renderBuilder={renderBuilder} />
      <RenderResult {...state} />
    </>
  )
})

export default App
