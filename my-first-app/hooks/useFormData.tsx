// hooks/useFormData.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'

/** your field shapes—you can extend these */
type Personal   = { name: string; dob: string; gender: string; occupation: string; workType: string }
type Lifestyle  = { height: number; weight: number; bedtime: string; wakeup: string; nap: number; sleepQuality: string }
type Habits     = { smoking: string; alcohol: string; smokeless: string }
type Medical    = { conditions: string[]; diagnosisYear?: string; meds: string; familyHistory: string[] }

/** form store interface */
interface FormData {
  personal: Personal
  lifestyle: Lifestyle
  habits: Habits
  medical: Medical

  setPersonal:   (v: Partial<Personal>)   => void
  setLifestyle:  (v: Partial<Lifestyle>)  => void
  setHabits:     (v: Partial<Habits>)     => void
  setMedical:    (v: Partial<Medical>)    => void
}

/** defaults so TS knows all fields exist */
const defaultPersonal:  Personal  = { name: '', dob: '', gender: '', occupation: '', workType: '' }
const defaultLifestyle: Lifestyle = { height: 0, weight: 0, bedtime: '', wakeup: '', nap: 0, sleepQuality: '' }
const defaultHabits:    Habits    = { smoking: 'No', alcohol: 'No', smokeless: 'No' }
const defaultMedical:   Medical   = { conditions: [], diagnosisYear: undefined, meds: 'No', familyHistory: [] }

const FormContext = createContext<FormData | undefined>(undefined)

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [personal,  setPersonalState]  = useState(defaultPersonal)
  const [lifestyle, setLifestyleState] = useState(defaultLifestyle)
  const [habits,    setHabitsState]    = useState(defaultHabits)
  const [medical,   setMedicalState]   = useState(defaultMedical)

  return (
    <FormContext.Provider value={{
      personal,
      lifestyle,
      habits,
      medical,
      setPersonal:   (v) => setPersonalState(curr => ({ ...curr, ...v })),
      setLifestyle:  (v) => setLifestyleState(curr => ({ ...curr, ...v })),
      setHabits:     (v) => setHabitsState(curr => ({ ...curr, ...v })),
      setMedical:    (v) => setMedicalState(curr => ({ ...curr, ...v })),
    }}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormData() {
  const ctx = useContext(FormContext)
  if (!ctx) throw new Error('useFormData must be used within <FormDataProvider>')
  return ctx
}
