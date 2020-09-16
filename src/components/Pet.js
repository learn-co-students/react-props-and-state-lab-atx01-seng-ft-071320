import React from 'react'

class Pet extends React.Component {

  render() {
    let genderSymbol = ''
    if (this.props.pet.gender === "male") {
      genderSymbol = `♂`
    }
    else {
      genderSymbol = `♀`
    }

    const adoptedButton = <button className="ui disabled button">Already adopted</button>
    const adoptButton = <button onClick={event => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {genderSymbol}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? adoptedButton : adoptButton}
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
