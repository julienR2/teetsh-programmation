import React from 'react'
import type { Programmation as ProgrammationType } from '../../types'
import { formatDate } from '../../utils/formatting'

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
            <div className='p-4' style={{ writingMode: 'sideways-lr' }}>
              &nbsp;
            </div>
            {data.periodes.map((periode) => (
              <div
                key={periode.id}
                className={`bg-${periode.color} border-4 border-b-0 border-black rounded-t-2xl -mx-0.5 p-2 flex flex-col gap-2 flex-1 truncate max-w-(--column-width)`}
              >
                <h2 className='text-sm font-bold truncate' title={periode.name}>
                  {periode.name}
                </h2>
                <p className='text-end text-sm w-full truncate'>
                  🗓️ {formatDate(periode.startDate)} {'->'}{' '}
                  {formatDate(periode.endDate)}
                </p>
              </div>
            ))}
          </div>
          {data.matieres[0].domaines.map((domaine) => (
            <div key={domaine.id} className='flex flex-row justify-center'>
              <div
                className={`bg-${domaine.color} border-4 border-r-0 border-black rounded-l-2xl -mx-0.5 p-4 flex flex-col gap-2 `}
                style={{ writingMode: 'sideways-lr' }}
              >
                <h2 className='text-sm font-bold text-'>{domaine.name}</h2>
              </div>
              {data.periodes.map((periode) => (
                <div
                  key={periode.id}
                  className=' border-black border-4 -m-0.5 w-full max-w-(--column-width)'
                >
                  <h2 className='text-sm font-bold w-full'>items</h2>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
