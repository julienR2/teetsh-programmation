import React from 'react'
import type { Programmation as ProgrammationType } from '../../types'

import { PeriodeCell } from './PeriodeCell'
import { DomainCell } from './DomainCell'
import { ItemsCell } from './ItemsCell'

export const Programmation = ({ data }: { data: ProgrammationType }) => {
  const customVariables = React.useMemo(
    () =>
      ({ '--column-width': `${data.columnWidth}px` } as React.CSSProperties),
    [data.columnWidth],
  )

  return (
    <div
      className='flex flex-col gap-6 w-full items-center'
      style={customVariables}
    >
      <h1 className='text-2xl font-bold'>{data.name}</h1>

      <div className='flex flex-col gap-6 w-full'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-center'>
            <DomainCell placeholder />
            {data.periodes.map((periode) => (
              <PeriodeCell key={periode.id} periode={periode} />
            ))}
          </div>
          {data.matieres[0].domaines.map((domaine) => (
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
