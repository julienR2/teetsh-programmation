import { useData } from './hooks/useData'
import { Spinner } from './components/Spinner'
import { Programmation } from './components/Programmation'

export const App = () => {
  const { data, loading } = useData()

  return (
    <div className='w-full h-full flex justify-center'>
      {loading || !data ? <Spinner /> : <Programmation data={data} />}
    </div>
  )
}
