import { Spinner } from './components/Spinner'
import { useData } from './hooks/useData'

export const App = () => {
  const { data, loading } = useData()

  console.log('data', data)

  return (
    <div className='w-full h-full flex justify-center'>
      {loading ? <Spinner /> : 'Hello World'}
    </div>
  )
}
