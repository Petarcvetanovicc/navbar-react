import { FaAlignJustify } from 'react-icons/fa'
import { links, social } from './data'
import { useRef, useState } from 'react'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksRef = useRef(null)

  const toggleMenu = () => {
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <p className="logo">Code&Coffee</p>
          <button onClick={toggleMenu}>
            <FaAlignJustify className="toggle-btn" />
          </button>
        </div>
        <div
          className="links-container"
          style={
            showLinks
              ? {
                  height: `${
                    linksRef.current.getBoundingClientRect().height
                  }px`,
                }
              : { height: '0px' }
          }
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className="social-links">
          {social.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
