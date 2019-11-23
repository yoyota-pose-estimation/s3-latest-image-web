// eslint-disable-next-line import/prefer-default-export
export const time = {
  state: {
    time: new Date()
      .toISOString()
      .split(".")
      .shift()
  },
  reducers: {
    setTime(_, payload) {
      return payload
    }
  }
}
