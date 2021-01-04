import React from 'react'
import Card from './index.js'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Card component', decorators: [withKnobs]}
export const card = () => {
  const username = text('Text', 'cnocon')
  return <Card username={username} theme={true}></Card>
}