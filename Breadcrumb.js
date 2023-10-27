import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/breadcrumb/styles.css';

const Breadcrumbs = ({ crumbs }) => {
  return (
  	<nav aria-label="breadcrumb">
  	  <ol className="breadcrumb">
  	    {crumbs.map(({ name, path }, key) =>
  	      key + 1 === crumbs.length ? (
  	        <li className="breadcrumb-item active" aria-current="page" key={key}>
  	          <span className="breadcrumb-item">{name}</span>
  	        </li>
  	      ) : (
  	        <li className="breadcrumb-item" key={key}>
  	          <Link to={path} className="text-decoration-none">{name}</Link>
  	        </li>
  	      )
  	    )}
  	  </ol>
  	</nav>
  );
};

export default Breadcrumbs;