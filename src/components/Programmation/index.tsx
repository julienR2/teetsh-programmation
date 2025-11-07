import React from 'react'
import type { Programmation as ProgrammationType } from '../../types'

import { PeriodeCell } from './PeriodeCell'
import { DomainCell } from './DomainCell'
import { ItemsCell } from './ItemsCell'
import { MatiereSelect } from '../MatiereSelect'

export const Programmation = ({ data }: { data: ProgrammationType }) => {
  const [selectedMatiereId, setSelectedMatiereId] = React.useState<
    string | undefined
  >(undefined)

  const customVariables = React.useMemo(
    () =>
      ({ '--column-width': `${data.columnWidth}px` } as React.CSSProperties),
    [data.columnWidth],
  )

  const selectedMatiere = React.useMemo(
    () => data.matieres.find((matiere) => matiere.id === selectedMatiereId),
    [data.matieres, selectedMatiereId],
  )

  React.useEffect(() => {
    if (selectedMatiereId || !data.matieres.length) return

    setSelectedMatiereId(data.matieres[0].id)
  }, [data.matieres, selectedMatiereId])

  return (
    <div
      className='flex flex-col gap-6 w-full items-center'
      style={customVariables}
    >
      <h1 className='text-2xl font-bold m-4 flex items-center gap-6 flex-wrap justify-center text-center'>
        {data.name}{' '}
        <MatiereSelect
          matieres={data.matieres}
          setSelectedMatiereId={setSelectedMatiereId}
        />{' '}
      </h1>

      <div className='flex flex-col gap-6 w-full'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-center'>
            <DomainCell placeholder />
            {data.periodes.map((periode) => (
              <PeriodeCell key={periode.id} periode={periode} />
            ))}
          </div>
          {selectedMatiere?.domaines.map((domaine) => (
            <div key={domaine.id} className='flex flex-row justify-center'>
              <DomainCell domaine={domaine} />
              {data.periodes.map((periode) => (
                <ItemsCell
                  key={periode.id}
                  periodeId={periode.id}
                  items={domaine.items}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
