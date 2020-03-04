import React, { useState, useEffect, memo } from 'react'
import jsonLogic from 'json-logic-js'

const data = {
  Header: {
    FromCompany: 'Zookal',
    SentDate: '2020-01-01T00:00:00.000Z'
  },
  Product: {
    RecordReference: 9780409308617,
    NotificationType: '04',
    ProductIdentifier: {
      ProductIDType: 15,
      IDValue: 343434344
    },
    ProductForm: 'AB',
    Title: {
      TitleType: '02',
      TitleText: 'The Human Rights Enterprise in Australia and Internationally'
    }
  },
  Pages: '200',
  IsPromotion: true
}

export const Discount = memo(({ rules }) => {
  const [discount, setDiscount] = useState(0)
  const [currentDiscount, setCurrentDiscount] = useState(0)

  useEffect(() => {
    const isRulesMeted = jsonLogic.apply(rules, data)

    if (isRulesMeted) {
      setCurrentDiscount(discount)
    } else {
      setCurrentDiscount(10)
    }
  }, [rules, setCurrentDiscount, discount])

  return (
    <>
      <h2>
        Default Discount: <span>10</span>
      </h2>
      <h2>
        Discount: <input value={discount} onChange={e => setDiscount(e.target.value)} />
      </h2>
      <h2>
        Current Discount: <span style={{ fontSize: '1.5em' }}>{currentDiscount}</span>
      </h2>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  )
})
