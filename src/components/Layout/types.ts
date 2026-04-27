import type { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode
}

export interface NavLinkObject {
    to: string;
    linkName: string;
}

export interface NameData {
    name: string;
}