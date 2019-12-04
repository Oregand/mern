import React, { Suspense, lazy } from 'react'
import styled from 'styled-components'

const Logo = lazy(() => import('../Logo'));
const Links = lazy(() => import('../Links'));

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

const NavBar = () => {
    return (
        <Container>
            <Nav>
                <Suspense>
                    <Logo />
                </Suspense>
                <Suspense>
                    <Links />
                </Suspense>
            </Nav>
        </Container>
    )
}

export default NavBar