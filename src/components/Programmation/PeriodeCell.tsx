import type { Programmation } from '../../types'
import { formatDate } from '../../utils/formatting'

export const PeriodeCell = ({
  periode,
  className = '',
}: {
  periode: Programmation['periodes'][number]
  className?: string
}) => (
  <div
    data-testid={`period-${periode.id}`}
    className={`bg-${periode.color} border-4 border-b-0 border-black rounded-t-2xl -mx-0.5 p-2 flex flex-col gap-2 flex-1 truncate max-w-(--column-width) ${className}`}
  >
    <h2 className='text-sm font-bold truncate' title={periode.name}>
      {periode.name}
    </h2>
    <p className='text-end text-sm w-full truncate'>
      🗓️ {formatDate(periode.startDate)} {'->'} {formatDate(periode.endDate)}
    </p>
  </div>
)
