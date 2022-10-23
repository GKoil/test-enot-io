import { createContext } from "react";
import { Data } from "@/types/data.type";

const context = createContext<{ data: Data | null } | null>(null);

export default context;
