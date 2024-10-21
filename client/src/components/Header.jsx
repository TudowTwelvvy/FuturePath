import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/futurepath-logo.png'
import { BsSearch } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

function Header() {
  const path = useLocation().pathname
  return (
    <Navbar className="border-b-2 pb-2 pt-2">
      <Link to="/" className="self-center w-[180px] sm:w-[250px]">
        <img src={logo} alt="futurepath-logo" />
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={BsSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button color="gray" className="w-12 h-10 lg:hidden rounded-full">
        <BsSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button
          //gradientMonochrome="purple"
          className="w-12 h-10 hidden sm:inline rounded-full"
          color="gray"
        >
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" className="" outline>
            Sign In
          </Button>
        </Link>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/interview'} as={'div'}>
          <Link to="/interview">Interview Tips</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
