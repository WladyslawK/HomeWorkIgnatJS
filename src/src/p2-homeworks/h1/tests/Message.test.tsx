import React from 'react'
import {render} from '@testing-library/react'
import Message from "../../../../p2-homeworks/h1/Message";


test.skip('find text "test message name"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name="Artem"
            message=""
            time=""
        />
    ))
    const linkElement = getByText(/Artem/i)
    expect(linkElement).toBeInTheDocument()
})
test.skip('find text "test message"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name=""
            message="test message"
            time=""
        />
    ))
    const linkElement = getByText(/test message/i)
    expect(linkElement).toBeInTheDocument()
})
test.skip('find text "test message time"', () => {
    const {getByText} = render((
        <Message
            avatar=""
            name=""
            message=""
            time="test message time"
        />
    ))

    const linkElement = getByText(/test message time/i)
    expect(linkElement).toBeInTheDocument()
})
