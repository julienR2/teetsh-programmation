import React from 'react'
import type { Programmation } from '../../types'

export const ItemsCell = ({
  periodeId,
  items,
  className,
}: {
  periodeId: string
  items: Programmation['matieres'][0]['domaines'][number]['items']
  className?: string
}) => {
  const filteredItems = React.useMemo(
    () => items.filter((item) => item.periodeId === periodeId),
    [items, periodeId],
  )

  return (
    <div
      className={`border-black border-4 -m-0.5 w-full max-w-(--column-width) flex flex-col gap-2 p-2 bg-gray-100 ${className}`}
    >
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className='p-2 border border-black rounded-md bg-white'
        >
          <p
            className='text-sm'
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
        </div>
      ))}
    </div>
  )
}
