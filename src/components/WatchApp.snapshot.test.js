import React from 'react'
import renderer from 'react-test-renderer'
import WatchApp from './WatchApp'
import { reducer } from '../reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducer)

it('WatchAppコンポーネントのスナップショットテスト', () => {
  const result = renderer
    .create(
      <Provider store={store}>
        <WatchApp />
      </Provider>
    )
    .toJSON()

  expect(result).toMatchSnapshot()
})
