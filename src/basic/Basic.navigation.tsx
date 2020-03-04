import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from '../types/NanLinkProps.type';

const linkclassNames = 'py-1 px-2 m-1';
const linkActiveClassName = 'bg-gray-300';


export function BasicNavigation() {

  const routes = [
    { route: "/basic/text", name: 'text' },
    { route: "/basic/checkbox", name: 'checkbox' },
    { route: "/basic/selectbox", name: 'selectbox' },
    { route: "/basic/radio", name: 'radio' },
    { route: "/basic/textaera", name: 'textaera' }
  ] as Array<NavLinkProps>;

  function getNavLink({ route, name }: NavLinkProps ) {
    return (
      <NavLink key={route} to={route} className={linkclassNames} activeClassName={linkActiveClassName}>
				    {name}
      </NavLink>     
    )
  }

	return (
    <div className="flex flex-col">
      { routes.map((x, index) => getNavLink(x)) }
		</div>
	);
}
