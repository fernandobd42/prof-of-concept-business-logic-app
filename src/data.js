export default {
  id: 'b8b8aaba-0123-4456-b89a-b170a30ac0c7',
  type: 'group',
  children1: {
    'a98ba8ba-cdef-4012-b456-7170a30aef7c': {
      type: 'group',
      properties: {
        conjunction: 'AND'
      },
      children1: {
        'b99aba9a-cdef-4012-b456-7170a30b3688': {
          type: 'group',
          properties: {
            conjunction: 'AND'
          },
          children1: {
            'a8988a89-89ab-4cde-b012-3170a30b3688': {
              type: 'rule_group',
              properties: {
                conjunction: 'AND',
                field: 'Product'
              },
              children1: {
                '9b989bbb-4567-489a-bcde-f170a30b6d8d': {
                  type: 'rule',
                  properties: {
                    field: 'Product.RecordReference',
                    operator: 'is_not_empty',
                    value: [],
                    valueSrc: [],
                    valueType: []
                  }
                },
                'aaaabb98-0123-4456-b89a-b170a30b9072': {
                  type: 'rule',
                  properties: {
                    field: 'Product.NotificationType',
                    operator: 'between',
                    value: [0, 10],
                    valueSrc: ['value', 'value'],
                    valueType: ['number', 'number']
                  }
                },
                '988baa9a-cdef-4012-b456-7170a30bbcbd': {
                  type: 'rule_group',
                  properties: {
                    conjunction: 'AND',
                    field: 'Product.ProductIdentifier'
                  },
                  children1: {
                    '999ab888-4567-489a-bcde-f170a30be8b1': {
                      type: 'rule',
                      properties: {
                        field: 'Product.ProductIdentifier.ProductIDType',
                        operator: 'between',
                        value: [0, 50],
                        valueSrc: ['value', 'value'],
                        valueType: ['number', 'number']
                      }
                    },
                    '8a8baa9a-0123-4456-b89a-b170a30bf1aa': {
                      type: 'rule',
                      properties: {
                        field: 'Product.ProductIdentifier.IDValue',
                        operator: 'is_not_empty',
                        value: [],
                        valueSrc: [],
                        valueType: []
                      }
                    }
                  }
                },
                '99b98889-cdef-4012-b456-7170a30c3708': {
                  type: 'rule',
                  properties: {
                    field: 'Product.ProductForm',
                    operator: 'select_any_in',
                    value: [['AC', 'AB', 'ACB', 'ACBK']],
                    valueSrc: ['value'],
                    valueType: ['multiselect']
                  }
                },
                'a8889b8b-89ab-4cde-b012-3170a30c9d40': {
                  type: 'rule_group',
                  properties: {
                    conjunction: 'AND',
                    field: 'Product.Title'
                  },
                  children1: {
                    'bbb8a8a9-4567-489a-bcde-f170a30ca863': {
                      type: 'rule',
                      properties: {
                        field: 'Product.Title.TitleType',
                        operator: 'between',
                        value: [0, 10],
                        valueSrc: ['value', 'value'],
                        valueType: ['number', 'number']
                      }
                    },
                    'b8a989a8-0123-4456-b89a-b170a30ceb95': {
                      type: 'rule',
                      properties: {
                        field: 'Product.Title.TitleText',
                        operator: 'like',
                        value: ['Human Rights'],
                        valueSrc: ['value'],
                        valueType: ['text']
                      }
                    }
                  }
                }
              }
            },
            'a98bb898-cdef-4012-b456-7170a30d6ea8': {
              type: 'group',
              properties: {
                conjunction: 'AND'
              },
              children1: {
                'aabb9b9b-89ab-4cde-b012-3170a30d6ea8': {
                  type: 'rule',
                  properties: {
                    field: 'Pages',
                    operator: 'greater_or_equal',
                    value: [100],
                    valueSrc: ['value'],
                    valueType: ['number']
                  }
                },
                '8aa998a8-4567-489a-bcde-f170a30e8c18': {
                  type: 'rule',
                  properties: {
                    field: 'IsPromotion',
                    operator: 'equal',
                    value: [true],
                    valueSrc: ['value'],
                    valueType: ['boolean']
                  }
                }
              }
            }
          }
        },
        '8b8aba8a-89ab-4cde-b012-3170a30aef7d': {
          type: 'rule_group',
          properties: {
            conjunction: 'AND',
            field: 'Header'
          },
          children1: {
            'aba8a88b-4567-489a-bcde-f170a30af61b': {
              type: 'rule',
              properties: {
                field: 'Header.FromCompany',
                operator: 'equal',
                value: ['Zookal'],
                valueSrc: ['value'],
                valueType: ['text']
              }
            },
            'a8baaa9a-0123-4456-b89a-b170a30b0a2e': {
              type: 'rule',
              properties: {
                field: 'Header.SentDate',
                operator: 'less_or_equal',
                value: ['2020-03-04'],
                valueSrc: ['value'],
                valueType: ['date']
              }
            }
          }
        }
      }
    }
  }
}
