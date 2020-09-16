import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  setPets = (newPets) => {
    this.setState({
      pets: newPets
    })
  }

  adoptPet = (id) => {
    let pets = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet
    })
    console.log(pets)
    this.setState({pets: pets})
  }

  findPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(res => res.json())
        .then(petList => this.setPets(petList))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(petList => this.setPets(petList))
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
