import styled, { css } from 'styled-components';
import {theme_one} from '../theme/themes.js';

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  ${props => 
   props.primary && css`
    background: ${props => props.theme.primary};
    color: white;
    border-color: ${props => props.theme.primary};
   `
  };

  ${props => 
   props.secondary && css`
    background: ${props => props.theme.secondary};
    color: white;
    border-color: ${props => props.theme.secondary};
   `
  };
  ${props => 
   props.danger && css`
    background: ${props => props.theme.danger};
    color: white;
    border-color: ${props => props.theme.danger};
   `
  };
`;