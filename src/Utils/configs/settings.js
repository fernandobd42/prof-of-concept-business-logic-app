import { BasicConfig } from 'react-awesome-query-builder'
import React from 'react'
import { Widgets } from 'react-awesome-query-builder'

const { FieldDropdown } = Widgets

const localeSettings = {
  valueLabel: 'Value',
  valuePlaceholder: 'Value',
  fieldLabel: 'Field',
  operatorLabel: 'Operator',
  fieldPlaceholder: 'Select field',
  operatorPlaceholder: 'Select operator',
  deleteLabel: null,
  addGroupLabel: 'Add group',
  addRuleLabel: 'Add Logic',
  delGroupLabel: null,
  notLabel: 'Not',
  valueSourcesPopupTitle: 'Select value source',
  removeRuleConfirmOptions: {
    title: 'Are you sure delete this logic?',
    okText: 'Yes',
    okType: 'danger'
  },
  removeGroupConfirmOptions: {
    title: 'Are you sure delete this group?',
    okText: 'Yes',
    okType: 'danger'
  }
}

export const settings = {
  ...BasicConfig.settings,
  ...localeSettings,

  valueSourcesInfo: {
    value: {
      label: 'Value'
    },
    field: {
      label: 'Field',
      widget: 'field'
    },
    func: {
      label: 'Function',
      widget: 'func'
    }
  },
  renderSize: 'large',
  renderField: props => <FieldDropdown {...props} />,
  renderOperator: props => <FieldDropdown {...props} />,
  renderFunc: props => <FieldDropdown {...props} />,
  canReorder: true,
  canRegroup: true,
  showNot: true,
  showLabels: true,
  maxNesting: 3,
  canLeaveEmptyGroup: true
}
