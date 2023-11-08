import { Component } from "react";
import './card.styles.css'

class Card extends Component {
  render() {
    const {id, firstName, email} = this.props.monster
    return (
      <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set2size=180x180`} 
                  alt={`${firstName}`}
            />
              <h2>{firstName}</h2>
              <p>{email}</p>
      </div>
    )
  }

}

export default Card