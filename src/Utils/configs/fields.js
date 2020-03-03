import React from 'react'

export const fields = {
  Header: {
    label: 'Header',
    type: '!group',
    subfields: {
      FromCompany: {
        label: 'From Company',
        type: 'text',
        valueSources: ['value']
      },
      SentDate: {
        label: 'Sent Date',
        type: 'date',
        valueSources: ['value']
      }
    }
  },

  Product: {
    label: 'Product',
    type: '!group',
    subfields: {
      RecordReference: {
        label: 'Record Reference',
        type: 'number',
        fieldSettings: {
          min: 0
        },
        valueSources: ['value'],
        preferWidgets: ['number']
      },
      NotificationType: {
        label: 'Notification Type',
        type: 'number',
        fieldSettings: {
          min: 0
        },
        valueSources: ['value'],
        preferWidgets: ['number']
      },

      ProductIdentifier: {
        label: 'Product Identifier',
        type: '!group',
        subfields: {
          ProductIDType: {
            label: 'Product ID Type',
            type: 'number',
            fieldSettings: {
              min: 0
            },
            valueSources: ['value'],
            preferWidgets: ['number']
          },
          IDValue: {
            label: 'ID Value',
            type: 'number',
            fieldSettings: {
              min: 0
            },
            valueSources: ['value'],
            preferWidgets: ['number']
          }
        }
      },

      ProductForm: {
        label: 'Product Form',
        type: 'select',
        valueSources: ['value'],
        listValues: [
          { value: 'A', title: 'A' },
          { value: 'AB', title: 'AB' },
          { value: 'ABC', title: 'ABC asa saasa textand sdsd' },
          { value: 'ABK', title: 'ABK' },
          { value: 'ABQ', title: 'ABQ' },
          { value: 'AC', title: 'AC' },
          { value: 'ACB', title: 'ACB' },
          { value: 'ACBK', title: 'ACBK' },
          { value: 'ACBN', title: 'ACBN' },
          { value: 'ACBP', title: 'ACBP' },
          { value: 'ACBS', title: 'ACBS' }
        ]
      },

      Title: {
        label: 'Title',
        type: '!group',
        subfields: {
          TitleType: {
            label: 'Title Type',
            type: 'number',
            fieldSettings: {
              min: 0
            },
            valueSources: ['value'],
            preferWidgets: ['number']
          },
          TitleText: {
            label: 'Title Text',
            type: 'text',
            valueSources: ['value']
          }
        }
      }
    }
  },

  Percentage: {
    label: 'Percentage',
    type: 'number',
    preferWidgets: ['slider', 'rangeslider'],
    valueSources: ['value', 'field'],
    fieldSettings: {
      min: 0,
      max: 100,
      step: 1,
      marks: {
        0: <strong>0%</strong>,
        100: <strong>100%</strong>
      }
    },
    //overrides
    widgets: {
      slider: {
        widgetProps: {
          valuePlaceholder: 'Slider'
        }
      }
    }
  },

  IsPromotion: {
    label: 'Promo?',
    type: 'boolean',
    operators: ['equal'],
    valueSources: ['value']
  }
}
