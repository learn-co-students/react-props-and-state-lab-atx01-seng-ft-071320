import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  
  state = {
    pets: [],
    filters: {
      type: "all"
    }
  }

  componentDidMount() {
    this.fetchPets();
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    this.fetchPets(this.state.filters.type)
  }

  setStatePets = (pets) => {
    this.setState({
      pets
    })
  }

  fetchPets = (type = "all") => {
    let url = "/api/pets"
    if (type !== "all") {
      url = `${url}?type=${type}`
    }
    fetch(url).then((res) => res.json()).then((pets) => this.setStatePets(pets))
  }

  onAdoptPet = (petId) => {
    let newPets = this.state.pets.map(
      p => {return p.id === petId ? {...p, isAdopted: true} : p;
    });
    this.setState({ pets: newPets });
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
