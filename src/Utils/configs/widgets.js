import { BasicConfig } from 'react-awesome-query-builder'

export const widgets = {
  ...BasicConfig.widgets,
  text: {
    ...BasicConfig.widgets.text,
    customProps: {
      style: { minWidth: '200px' }
    }
  },
  number: {
    ...BasicConfig.widgets.number,
    customProps: {
      style: { minWidth: '200px' }
    }
  },
  select: {
    ...BasicConfig.widgets.select,
    customProps: {
      style: { minWidth: '150px' }
    }
  },
  date: {
    ...BasicConfig.widgets.date,
    jsonLogic: val => new Date(val).toISOString()
  }
}
