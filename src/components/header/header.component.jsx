import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
import logo from '../../assets/logo.jpg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      {/* <Logo className='logo' /> */}
      <img src={logo} className='logo' alt='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/collections'>
        COLLECTIONS
      </Link>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/projects'>
        PROJECTS
      </Link>
      <Link className='option' to='/contacts'>
        CONTACTS
      </Link>
    </div>
    <div className='option-sign-in'>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon className='option' />
      {hidden ? null : <CartDropdown />}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
