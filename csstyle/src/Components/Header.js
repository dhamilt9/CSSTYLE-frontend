import React, {Fragment} from 'react';
import {SideNav, SideNavItem, Button, Row, Col, Modal} from 'react-materialize'
import CreateSnippet from './CreateSnippet'
import CreateUser from './CreateUser'
import Login from './Login'
import { Link } from 'react-router-dom'

const Header = ({currentuser, handleSubmit, handleChange, snippetForm, authenticated, toggleLoginForm, loginToggled, loginUsername, handleLoginUsername, signIn, handleRegister}) => (
  <Row style={{background: '#333', height: '75px', padding:'15px'}}>
    <Col s={1}>
      <SideNav
        trigger={<Button icon='menu'></Button>}
        options={{ closeOnClick: true }}
        >
        {!authenticated && <Button onClick={toggleLoginForm}>{loginToggled ? "Register" : "Login"}</Button>}
        {!loginToggled && !authenticated && <CreateUser handleRegister={handleRegister} loginUsername={loginUsername} handleLoginUsername={handleLoginUsername}/>}
        {loginToggled && !authenticated && <Login loginUsername={loginUsername} signIn={signIn} handleLoginUsername={handleLoginUsername} />}
        {authenticated && <Fragment>
        <SideNavItem userView
          user={{
            background: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            image: currentuser.user_image,
            name: currentuser.username
          }}
        />
        <Link to='/'>Home</Link>
        <Link to='/user'>View My Snippets</Link>
        </Fragment>}
      </SideNav>
    </Col>
    <Col s={3} offset={"s8"}>
      <Modal
        header='Modal Header'
        trigger={<Button> New Snippet</Button>}>
        <Row>
          <CreateSnippet snippetForm={snippetForm} handleChange={handleChange} handleSubmit={handleSubmit} />
        </Row>
      </Modal>
    </Col>

  </Row>
);

export default Header;
