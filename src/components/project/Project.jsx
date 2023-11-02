import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";


export default function Project({title, img, index}) {
  return (
    <div>
      <NavLink to={`/project/${index}`}>
        <li className="project">
            <img src={img} alt="Project img" className="project__img" />
            <h3 className="project__title">{title}</h3>
        </li>
      </NavLink>
      
    </div>
  );
}
