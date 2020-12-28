import React from "react"
import "../../styles/ProficiencyRating.scss"


const BlankFill = () => {
  return (
    <div>
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="5.375" cy="5.625" rx="5.375" ry="5.625" fill="#FF6584"/>
    <ellipse cx="5.375" cy="5.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
    </svg>
    </div>

  )
}


const ColorFill = () => {
  return (
    <div >
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="5.43054" cy="5.875" rx="5.375" ry="5.625" fill="#FF6584"/>
    </svg>
    </div>
  )
}


const ProficiencyRating = ({percentage}) => {
    return ( 
        <div className="proficiency_rating_container">
        <div style={{ width: `${percentage}%` }} className="proficiency_rating_upper">
          <ColorFill/>
          <ColorFill/>
          <ColorFill/>
          <ColorFill/>
          <ColorFill/>
        </div>
        <div className="proficiency_rating_lower">
          <BlankFill/>
          <BlankFill/>
          <BlankFill/>
          <BlankFill/>
          <BlankFill/>
        </div>
      </div>
     );
}
 
export default ProficiencyRating;