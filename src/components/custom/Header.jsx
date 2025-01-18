import React from 'react'

function Header() {
  return (
    <div>
      <div className="navbar bg-orange-600 text-white">
        <div className="flex-1">
          <a href='/' className="btn btn-ghost text-xl">
            <div>
              <img src="/logo.svg" />
            </div>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-md">
            <li>
              <a href='/create-hotel'>Hotels</a>
            </li>
            <li>
              <a href='/create-trip'>Generate Trip</a>
            </li>
            <li>
              <a href='/create-flight'>Flight</a>
            </li>
            <li>
              <a href="/create-about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
