import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Menu } from '../Menu/Menu'
import { Home } from '../../pages/Intro'
import { Publications } from '../../Pages/Publications'
import { Teaching } from '../../Pages/Teaching'
import { Research } from '../../Pages/Research'
import { CV } from '../../pages/CV'
import { Other } from '../../Pages/Other'
import { ProfileSideBar } from '../ProfileSideBar/index'
import { Container, Row, Col } from 'reactstrap'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export const Routes = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Container>
          <Row>
            <Col xs='12' sm='4'>
              <ProfileSideBar />
            </Col>
            <Col xs='12' sm='8'>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/publications'>
                  <Publications />
                </Route>
                <Route path='/teaching'>
                  <Teaching />
                </Route>
                <Route path='/research'>
                  <Research />
                </Route>
                <Route path='/cv'>
                  <CV />
                </Route>
                <Route path='/other'>
                  <Other />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  )
}
