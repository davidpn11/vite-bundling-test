import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const BaseButton = styled.button`
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

export const DestructiveButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.red};
`;

export const NormalButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.primary};
`;

type ButtonProps = {
  variant: "normal" | "destructive";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  const { variant, ...rest } = props;

  if (variant === "destructive") {
    return <DestructiveButton {...rest} />;
  }

  return <NormalButton {...rest} />;
}
