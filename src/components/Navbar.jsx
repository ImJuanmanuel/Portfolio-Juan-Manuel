import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, linkedin, menu, close, github } from '../assets'

export default function Navbar() {

  const [Active, setActive] = useState(``)
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX}  w-full flex items-center py-5 fixed top-0 z-20  bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-20 h-20 object-contain' />

          <p className='text-white text-lg font-bold cursor-pointer'>
            Juan Manuel |<span className='md:block hidden'> Meza Borrego</span>
          </p>
        </Link>

        <div className='flex'>
          <Link to="https://www.linkedin.com/in/juan-manuel-meza-borrego-35884b264/">
            <img src={linkedin} alt="linkedin" className='max-md:w-9 max-md:h-9 w-20 h-20 object-contain md:hover:animate-bounce'  />
          </Link>
          <Link to="https://github.com/Juanitopilot/">
            <img src={github} alt="github" className='max-md:w-9 max-md:h-9 w-20 h-20 object-contain md:hover:animate-spin' />
          </Link>
        </div>

        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${Active === Link.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-lg 
                font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"
            className='w-7 h-7 object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle)
            }}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-10 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex  justify-end items-start flex-col gap-4  '>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${Active === Link.title
                    ? "text-white"
                    : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-lg`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(Link.title)

                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
