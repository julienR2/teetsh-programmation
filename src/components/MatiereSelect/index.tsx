import { Spinner } from '../Spinner'
import type { Programmation } from '../../types'
import React from 'react'

export const MatiereSelect = ({
  selectedMatiereId,
  matieres,
  setSelectedMatiereId,
}: {
  selectedMatiereId?: string
  matieres?: Programmation['matieres']
  setSelectedMatiereId: (matiereId: string) => void
}) => {
  const onSelect = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedMatiereId(event.target.value)
    },
    [setSelectedMatiereId],
  )

  return (
    <div className='flex items-center gap-2 bg-blue-500 rounded-md p-2 text-white font-semibold text-sm'>
      <p>🎓</p>
      <div className='min-w-10 flex items-center justify-center'>
        {matieres !== undefined ? (
          <select onChange={onSelect}>
            {matieres.map((matiere) => (
              <option
                key={matiere.id}
                value={matiere.id}
                selected={matiere.id === selectedMatiereId}
              >
                {matiere.name}
              </option>
            ))}
          </select>
        ) : (
          <Spinner className='size-2' />
        )}
      </div>
    </div>
  )
}
