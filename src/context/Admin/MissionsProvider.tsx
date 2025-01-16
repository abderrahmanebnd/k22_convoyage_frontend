import React, { useState } from "react";
import useDialogState from "@/hooks/useDialogState";
import { Mission } from "@/services/getMissions";

type MissionsDialogType = "add" | "edit" | "delete";

interface MissionsContextType {
  open: MissionsDialogType | null;
  setOpen: (str: MissionsDialogType | null) => void;
  currentRow: Mission | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Mission | null>>;
}

const MissionsContext = React.createContext<MissionsContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function MissionsProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<MissionsDialogType>(null);
  const [currentRow, setCurrentRow] = useState<Mission | null>(null);

  return (
    <MissionsContext.Provider
      value={{ open, setOpen, currentRow, setCurrentRow }}
    >
      {children}
    </MissionsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMissions = () => {
  const missionsContext = React.useContext(MissionsContext);

  if (!missionsContext) {
    throw new Error("useMissions has to be used within <MissionsProvider>");
  }

  return MissionsContext;
};
