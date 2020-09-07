import React from 'react'

import { Container } from 'components/layout'
import PokemonName from 'components/pokemon-name'

const Detail = () => {
  return (
    <Container>
      <div className="w-full">
        <PokemonName id={"123"} name={"pokemon name"} />
      </div>
      <div className="flex min-h-screen">
        <div className="flex-1 bg-red-300"></div>
        <div className="flex-1 bg-green-300"></div>
        <div className="flex-1 bg-blue-300"></div>
      </div>
    </Container>
  )
}

export default Detail
