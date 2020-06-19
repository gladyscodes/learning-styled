import React, { useState } from 'react';
import logo from './logo.svg';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { Button } from './components/Button';
import { theme_one, theme_two } from './theme/themes';
import ThemeSelect  from './components/ThemeSelect';
import UikitC from './components/UikitC';

const AppWrapper = styled.div`
  text-align: center;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 10s linear;
  height: 80px;
  &:hover{
    animation: ${rotate360} infinite 1s linear;
  }
`;

const AppHeader = styled.div`
  background-color: ${props => props.theme.primary};
  height: 150px;
  padding: 20px;
  color: white;
`
const AppTitle = styled.h1`
  font-size: 1.3em;
`
const AppIntro = styled.p`
  font-size: large;
  `

function App() {
  const [ theme, setTheme ] = useState(theme_one)

  const handleThemeChange = (e) => {
    let theme = e.target.value
    theme === 'theme_one' ? (theme = theme_one) : (theme = theme_two)
    setTheme(theme)
  } 

  return (
    <ThemeProvider theme={theme}>
 <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>
         Hello
        </AppTitle>
       <AppIntro>
         This is a styled component
       </AppIntro>
       <Button>Press me!</Button>
       <Button primary>Press me primary!</Button>
       <Button secondary>Press me secondary!</Button>
       <Button danger>Press me danger!</Button>
     
      </AppHeader>

      <ThemeSelect handleThemeChange={handleThemeChange}/>
    </AppWrapper>
    <UikitC/>
    </ThemeProvider>
   
  );
}

export default App;
