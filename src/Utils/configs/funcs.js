export const funcs = {
  LOWER: {
    label: 'Lowercase',
    mongoFunc: '$toLower',
    jsonLogic: ({ str }) => ({ method: [str, 'toLowerCase'] }),
    returnType: 'text',
    args: {
      str: {
        label: 'String',
        type: 'text',
        valueSources: ['value', 'field']
      }
    }
  }
}
