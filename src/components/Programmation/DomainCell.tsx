import React from 'react'
import type { Programmation } from '../../types'

export const DomainCell = ({
  domaine,
  placeholder,
  horizontal = false,
  className = '',
}: {
  placeholder?: boolean
  domaine?: Programmation['matieres'][0]['domaines'][number]
  horizontal?: boolean
  className?: string
}) => {
  const orientationStyle = React.useMemo<React.CSSProperties>(
    () => (horizontal ? {} : { writingMode: 'sideways-lr' }),
    [horizontal],
  )

  return (
    <div
      className={`bg-${
        domaine?.color
      } border-4 border-r-0 border-black rounded-l-2xl -mx-0.5 p-2 flex flex-col gap-2 ${
        placeholder ? 'invisible' : ''
      } ${className}`}
      style={orientationStyle}
    >
      <h2 className='text-sm font-bold text-center'>
        {placeholder ? '&nbsp;' : domaine?.name}
      </h2>
    </div>
  )
}
