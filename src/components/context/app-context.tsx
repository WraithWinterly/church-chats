import { createContext, useState, useContext } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";

type ContextProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const AppCreateContext = createContext<ContextProps>({
  sidebarOpen: false,
  setSidebarOpen: (): boolean => false,
});

export function AppContext({ children }: { children: ReactNode }) {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState<boolean>(false);

  return (
    <AppCreateContext.Provider
      value={{
        sidebarOpen: waitlistModalOpen,
        setSidebarOpen: setWaitlistModalOpen,
      }}
    >
      {children}
    </AppCreateContext.Provider>
  );
}

export const useAppContext = () => useContext(AppCreateContext);
