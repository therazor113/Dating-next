const useAPI = () => {
  return [
    async (path, method, body) => {
      try {
        let res = {}

        if (method === 'GET') {
          res = await fetch(`${path}`)
        }

        if (['POST', 'PUT'].includes(method)) {
          res = await fetch(`${path}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          })
        }

        return await res.json()
      } catch (err) {
        console.error(err.message)
      }
    }
  ]
}

export default useAPI
