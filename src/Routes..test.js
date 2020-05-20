import React from 'react'
import { render, getByAltText } from '@testing-library/react'
import Routes from './Routes'

test('renders learn react link', () => {
	const { getByText } = render(<Routes />)
	const testElement = getByText('test1')
	expect(testElement).toBeInTheDocument()
})
