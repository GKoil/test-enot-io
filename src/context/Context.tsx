import { createContext } from "react";
import { Data } from "@/types/data.type";

// no need declare act
const context = createContext<{ data: Data | null; actions: any } | null>(null);

export default context;
