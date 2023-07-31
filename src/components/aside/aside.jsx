import a from './aside.module.css'
import { NavLink } from 'react-router-dom'
const setActive = ({ isActive }) => (isActive ? 'active-link' : 'default-link')

const Aside = () => {
  return (
    <div className={a.aside_wrapper}>
      <div className={a.navbar}>
        <h2>
          <ul>
            <li className={a.item}>
              <NavLink to="/content" className={setActive}>
                Profile
              </NavLink>
            </li>
            <li className={a.item}>
              <NavLink to="/dialog" className={setActive}>
                Messages
              </NavLink>
            </li>
            <li className={a.item}>
              <NavLink to="#" className={setActive}>
                Updates
              </NavLink>
            </li>
            <li className={a.item}>
              <NavLink to="#" className={setActive}>
                Music
              </NavLink>
            </li>
          </ul>
        </h2>
      </div>
    </div>
  )
}

export default Aside
