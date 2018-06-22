import React from "react";

function NavLink(props) {
  const liClassName = props.route === props.activeRoute ? "is-active" : "";
  const href = "#" + props.route;

  return (
    <li className={liClassName}>
      <a href={href}>{props.label}</a>
    </li>
  );
}

function NavBar(props) {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" class="brand-logo">KAPPA Insurance</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <NavLink label="Main" route="/main" activeRoute={props.activeRoute} />
                <NavLink label="Quote Request" route="/quoteRequest" activeRoute={props.activeRoute} />
                <NavLink label="Customer" route="/customer" activeRoute={props.activeRoute} />
                <NavLink label="tasks" route="/tasks" activeRoute={props.activeRoute} />
                </ul>
            </div>
        </nav>
    );
}

export default NavBar