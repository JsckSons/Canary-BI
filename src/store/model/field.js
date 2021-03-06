class Field {
  constructor (props = {}) {
    const {label, name, type, aggFunc = 'sum'} = props
    this.label = label
    this.name = name
    this.type = type
    this.aggFunc = aggFunc
  }
  isDimension () {
    return this.type === 'string' || this.type === 'time'
  }
  isTime () {
    return this.type === 'time'
  }
  isMeasure () {
    return this.type === 'number'
  }
  setDimension () {
    this.type = 'string'
    return this
  }
  setMeasure (aggFunc = 'sum') {
    this.type = 'number'
    this.aggFunc = aggFunc
    return this
  }
  copy ({name, type, aggFunc = 'sum'}) {
    this.name = name
    this.type = type
    this.aggFunc = type === 'number' ? aggFunc : undefined
    return this
  }
}

export default Field
