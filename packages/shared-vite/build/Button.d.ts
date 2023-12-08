import { ButtonHTMLAttributes } from "react";
export declare const BaseButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const DestructiveButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const NormalButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
type ButtonProps = {
    variant: "normal" | "destructive";
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare function Button(props: ButtonProps): JSX.Element;
export {};
