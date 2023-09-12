import React from 'react'
import styled from 'styled-components'
import {Header} from '../common/Header'
const Intro = () => {
  return (
    <>
      <Header>YT Party</Header>
      <P> Watch Youtube With Friends!</P>
    </>
  )
}
const P = styled.p`
	font-size: 1em;
`;

export default Intro
