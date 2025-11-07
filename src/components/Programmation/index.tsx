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
      <h1
        className='text-2xl font-bold m-4 flex items-center gap-6 flex-wrap justify-center text-center'
        data-testid='programmation-title'
      >
        {data.name}{' '}
        <MatiereSelect
          matieres={data.matieres}
          setSelectedMatiereId={setSelectedMatiereId}
        />{' '}
      </h1>

      <div className='md:flex hidden flex-col gap-6 w-full'>
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
          2
        </div>
      </div>

      <div className='md:hidden flex flex-col gap-10 w-full p-2 relative'>
        {data.periodes.map((periode) => (
          <div key={periode.id} className='relative bg-white'>
            <PeriodeCell
              periode={periode}
              className='w-full max-w-full mx-0 -my-1 sticky top-0 border-b-4'
            />
            {selectedMatiere?.domaines.map((domaine) => (
              <div
                key={domaine.id}
                className='flex flex-col justify-center border-4 border-black p-2 bg-gray-100 -my-1'
              >
                <DomainCell
                  domaine={domaine}
                  horizontal
                  className='border-r-4 rounded-r-2xl mx-0'
                />
                <ItemsCell
                  key={domaine.id}
                  periodeId={periode.id}
                  items={domaine.items}
                  className='max-w-full m-0 border-none'
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
