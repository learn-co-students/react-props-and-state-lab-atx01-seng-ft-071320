import React from 'react'

class Pet extends React.Component {
  render() {
    let pet = this.props.pet
    console.log(pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === 'male' ? '♂' : '♀' /*'♀' OR '♂' */}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
            {console.log(pet.isAdopted)}
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(pet.id)}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet

/* onClick={this.props.onAdoptPet(pet.id)}*/
