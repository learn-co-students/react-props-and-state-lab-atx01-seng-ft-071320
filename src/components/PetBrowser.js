import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div>{this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id}/>)}</div>
  }
}

export default PetBrowser
