import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  const preventEnlace = null;
  return ( 
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <a href={preventEnlace} className="brand-logo center">{props.titulo} </a>
        </div>
    </nav>
   );
}
 
Header.propTypes = {
  titulo : PropTypes.string.isRequired,
}
export default Header;