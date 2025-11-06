import React from 'react'
import type { Programmation } from '../types'

export const useData = () => {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)
  const [data, setData] = React.useState<Programmation>()

  const fetchData = React.useCallback(async () => {
    setLoading(true)

    try {
      // Commented out for local development
      // const response = await fetch(
      //   'https://strapi.teetsh.com/api/programmations/d7tfhdcchm1bom0df2z6s8zv',
      //   {
      //     headers: {
      //       Authorization:
      //         'Bearer 2dba999015fbc84a7d1f6dd11b85c4f72bec98b28c9cecac6986780bcdd8e0ee42827a263ed0b54ee5f1b9910dcda1cbcc4368edc2862b1b1bd8d0339967de45556d4e0d0da6c9c5d28d790fb4f3cd8115ee27e1cb95dc1ea705604aec863197857e8b0af3f4639fff8788cf6f5ba2f20b4c23048956e3891ab60aa703c5729f',
      //     },
      //   },
      // )
      const response = await fetch('/src/assets/data.json')
      const data = await response.json()
      setData(data.data)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, fetchData }
}
