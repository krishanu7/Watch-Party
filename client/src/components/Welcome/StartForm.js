import React from 'react'
import {Card} from '../common'
const StartForm = ( props ) => {
    const {onSubmit, buttonName, header, loading} = props;
  return (
    <form onSubmit={onSubmit}>
      <Card padding="20px">
        <Header>{header}</Header>
      </Card>
    </form>
  )
}
const Forms = (props) => {

}
const Header = styled.h1``;

export default StartForm
