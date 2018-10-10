import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SetTime from './SetTime'

configure({ adapter: new Adapter() }) // セットアップコード

describe('Components SetTime', () => {
  it('SetTime コンポーネント', () => {
    const fakeOnClick = jest.fn()
    const wrapper = mount(<SetTime setTime={fakeOnClick} />) // Props を渡す

    wrapper
      .find('li')
      .first() // li だけだと4つある
      .simulate('click')
    expect(fakeOnClick).toHaveBeenCalled()
  })
})
