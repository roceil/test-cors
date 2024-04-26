export function useBaseFetch(url: string, options = {}) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  return $fetch(baseUrl + url, {
    ...options,
    timeout: 10000,
    credentials: 'include',
    onResponseError: (error) => {
      alert(error.response._data.message)
    },
  })
}
