import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WatchApp from './WatchApp'

configure({ adapter: new Adapter() })

describe('Components WatchApp', () => {
  it('timerId が null のとき、ボタンクリックで moveStartTimer に event が入ること', () => {
    const fakeOnClick = jest.fn()

    // shallow だと SetTime コンポーネントまで展開しない
    const wrapper = shallow(
      <WatchApp timerId={null} moveStartTimer={fakeOnClick} />
    )
    wrapper
      .find('button')
      .first()
      .simulate('click')
    expect(fakeOnClick).toHaveBeenCalled()
  })

  it('timerId が int のとき、ボタンクリックで moveStopTimer に event が入ること', () => {
    const fakeOnClick = jest.fn()

    // shallow だと SetTime コンポーネントまで展開しない
    const wrapper = shallow(
      <WatchApp timerId={10} moveStopTimer={fakeOnClick} />
    )
    wrapper
      .find('button')
      .first()
      .simulate('click')
    expect(fakeOnClick).toHaveBeenCalled()
  })

  it('Resetボタンクリックで clearTimer に event が入ること', () => {
    const fakeOnClick = jest.fn()

    // shallow だと SetTime コンポーネントまで展開しない
    const wrapper = shallow(<WatchApp clearTimer={fakeOnClick} />)
    wrapper
      .find('button')
      .at(1)
      .simulate('click')
    expect(fakeOnClick).toHaveBeenCalled()
  })
})
