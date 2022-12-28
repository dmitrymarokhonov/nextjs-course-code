import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link legacyBehavior href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link legacyBehavior href='/posts'>Posts</Link>
          </li>
          <li>
            <Link legacyBehavior href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
