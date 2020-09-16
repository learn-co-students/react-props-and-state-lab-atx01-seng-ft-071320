import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  render() {
    const petList = this.props.pets.map((pet) => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={pet.id} />
    ))
    return (
      <div className="ui cards">
        {petList}
      </div>
    )
  }
}

export default PetBrowser
