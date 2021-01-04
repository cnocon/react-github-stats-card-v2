import React from 'react'
import Card from './index.js'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default { title: 'Card component', decorators: [withKnobs]}
export const card = () => {
  const username = text('username', 'cnocon')
  const accessToken = text('access token', '')
  const theme = boolean('theme', true)
  return <Card username={username} theme={theme} accessToken={accessToken}></Card>
}