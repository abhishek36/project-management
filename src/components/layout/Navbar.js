import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignInLink'
import SignedOutLinks from './SignOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3 waves-effect waves-light">
      <div className="container">
        <Link to='/' className="brand-logo">Project Management</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)