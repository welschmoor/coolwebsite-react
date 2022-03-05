
// this component wraps other (Home)

import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <LOWrapper>
      {children}
    </LOWrapper>
  )
}

const LOWrapper = styled.main`
  padding:  ${p => p.theme.MARGIN.mar20};
`


export default Layout