import type { Programmation } from '../../types'

export const DomainCell = ({
  domaine,
  placeholder,
}: {
  placeholder?: boolean
  domaine?: Programmation['matieres'][0]['domaines'][number]
}) => (
  <div
    className={`bg-${
      domaine?.color
    } border-4 border-r-0 border-black rounded-l-2xl -mx-0.5 p-2 flex flex-col gap-2 ${
      placeholder ? 'invisible' : ''
    }`}
    style={{ writingMode: 'sideways-lr' }}
  >
    <h2 className='text-sm font-bold text-center'>
      {placeholder ? '&nbsp;' : domaine?.name}
    </h2>
  </div>
)
