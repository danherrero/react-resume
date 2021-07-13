import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const Accordion = ({ title, content, imageName, type, link, id, i }) => {
const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? 'accordion-item open' : 'accordion-item closed' } key={i}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h3><FontAwesomeIcon icon={["fab", type]} /> {title}</h3>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content"><img src={"/images/" + imageName } className="img-fluid" alt="" /><div dangerouslySetInnerHTML={ {__html: content} }  /></div>}
    </div>
  );
};

export default Accordion;