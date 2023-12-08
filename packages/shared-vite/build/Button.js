import { __rest } from './_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import styled from 'styled-components';

const BaseButton = styled.button `
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing.medium};
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
  }
`;
const DestructiveButton = styled(BaseButton) `
  background-color: ${(props) => props.theme.colors.red};
`;
const NormalButton = styled(BaseButton) `
  background-color: ${(props) => props.theme.colors.primary};
`;
function Button(props) {
    const { variant } = props, rest = __rest(props, ["variant"]);
    if (variant === "destructive") {
        return jsx(DestructiveButton, Object.assign({}, rest));
    }
    return jsx(NormalButton, Object.assign({}, rest));
}

export { BaseButton, Button, DestructiveButton, NormalButton };
