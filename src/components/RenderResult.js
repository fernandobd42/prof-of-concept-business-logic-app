import React, { memo } from 'react'
import { Utils } from 'react-awesome-query-builder'

import { Discount } from './Discount'

const stringify = JSON.stringify
const { jsonLogicFormat, getTree } = Utils

const preStyle = {
  backgroundColor: 'darkgrey',
  margin: '10px',
  padding: '10px'
}

const preErrorStyle = {
  backgroundColor: 'lightpink',
  margin: '10px',
  padding: '10px'
}

export const RenderResult = memo(({ tree: immutableTree, config }) => {
  const { logic, data, errors } = jsonLogicFormat(immutableTree, config)

  return (
    <div style={{ padding: '40px' }}>
      <Discount rules={logic} />
      <hr />
      <div>
        jsonLogicFormat: {errors.length > 0 && <pre style={preErrorStyle}>{stringify(errors, undefined, 2)}</pre>}
        {!!logic && (
          <pre style={preStyle}>
            <span>Rule</span>
            <br />
            {stringify(logic, undefined, 2)}
            <br />
            <hr />
            <span>Data</span>
            <br />
            {stringify(data, undefined, 2)}
          </pre>
        )}
      </div>
      <hr />
      <div>
        Tree:
        <pre style={preStyle}>{stringify(getTree(immutableTree), undefined, 2)}</pre>
      </div>
    </div>
  )
})
