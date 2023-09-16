import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
  return (
  	<nav aria-label="breadcrumb">
  	  <ol className="breadcrumb loginTitle">
  	    {crumbs.map(({ name, path }, key) =>
  	      key + 1 === crumbs.length ? (
  	        <li className="breadcrumb-item active" aria-current="page" key={key}>
  	          {name}
  	        </li>
  	      ) : (
  	        <li className="breadcrumb-item" key={key}>
  	          <Link to={path} className="text-decoration-none text-black">{name}</Link>
  	        </li>
  	      )
  	    )}
  	  </ol>
  	</nav>
  );
};

export default Breadcrumbs;