# thunk-last-action-dispatched

> This is a middledware for redux. It stores the name of the last action dispatched into store. There might be tricky situation where you need to know the last action dispatched from different component.

[![NPM](https://img.shields.io/npm/v/thunk-last-action-dispatched.svg)](https://www.npmjs.com/package/thunk-last-action-dispatched) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save thunk-last-action-dispatched
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'thunk-last-action-dispatched'
import 'thunk-last-action-dispatched/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [kamalendugarai](https://github.com/kamalendugarai)
