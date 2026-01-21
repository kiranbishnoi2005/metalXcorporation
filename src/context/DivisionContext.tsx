import { createContext, useContext, useState, ReactNode } from 'react';

export type DivisionType = 'scrap' | 'wheels';

interface DivisionContextType {
  division: DivisionType;
  setDivision: (division: DivisionType) => void;
  divisionName: string;
}

const DivisionContext = createContext<DivisionContextType | undefined>(undefined);

export function DivisionProvider({ children }: { children: ReactNode }) {
  const [division, setDivision] = useState<DivisionType>('scrap');

  const divisionName = division === 'scrap'
    ? 'MetalXCorporation, Scrap Division'
    : 'MetalXCorporation, Wheels & Axle Division';

  return (
    <DivisionContext.Provider value={{ division, setDivision, divisionName }}>
      {children}
    </DivisionContext.Provider>
  );
}

export function useDivision() {
  const context = useContext(DivisionContext);
  if (context === undefined) {
    throw new Error('useDivision must be used within a DivisionProvider');
  }
  return context;
}
