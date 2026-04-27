import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { CreateEmployeeValues } from "../../pages/CreateEmployee/types";

export interface LayoutProps {
    children: ReactNode
}

export interface NavLinkObject {
    to: string;
    linkName: string;
}

export interface EmployeeContextType {
  employeeData: CreateEmployeeValues | null;
  setEmployeeData: Dispatch<SetStateAction<CreateEmployeeValues | null>> | (()=>void);
}