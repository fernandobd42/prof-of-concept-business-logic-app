import { BasicConfig } from 'react-awesome-query-builder'

export const operators = {
  ...BasicConfig.operators,
  equal: {
    ...BasicConfig.operators.equal,
    label: 'Equal'
  },
  select_equals: {
    ...BasicConfig.operators.select_equals,
    label: 'Equal'
  },
  not_equal: {
    ...BasicConfig.operators.not_equal,
    label: 'Different'
  },
  select_not_equals: {
    ...BasicConfig.operators.select_not_equals,
    label: 'Different'
  },
  greater: {
    ...BasicConfig.operators.greater,
    label: 'Greater'
  },
  greater_or_equal: {
    ...BasicConfig.operators.greater_or_equal,
    label: 'Greater or equal'
  },
  less: {
    ...BasicConfig.operators.less,
    label: 'Less'
  },
  less_or_equal: {
    ...BasicConfig.operators.less_or_equal,
    label: 'Less or equal'
  }
}

console.log(operators)
