import { useData } from './hooks/useData'
import { Spinner } from './components/Spinner'
import { Programmation } from './components/Programmation'
import { Header } from './components/Header'

export const App = () => {
  const { data, loading } = useData()

  return (
    <div className='w-full h-full flex flex-col gap-4 items-center'>
      <Header />
      {loading || !data ? (
        <Spinner className='mt-4 size-8' />
      ) : (
        <Programmation data={data} />
      )}
    </div>
  )
}
