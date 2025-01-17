import { NavLink } from 'react-router-dom'
import './index.css'

const ClientHeader = () => {
  return (
    <>
    <div className="client-header">
      <div className="header-1">
        <p className='logo-1'>COLO<span className='logo-2'>SHOP</span></p>
      </div>
      <div className="header-2">      
          <nav>
            <ul className='header-2-ul'>
              <li>
                <NavLink to={'/'} className={'header-2-a'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/products'} className={'header-2-a'}>Products</NavLink>
              </li>
              <li>
                <NavLink to={'/wishlist'} className={'header-2-a'}>Favorites<span className='header-fav'>0</span></NavLink>
              </li>
            </ul>
          </nav>
      </div>
    </div>
    </>
  )
}

export default ClientHeader