import { useState } from 'react'

function useToggle(initialValue = false) {
  const [isVisible, setIsVisible] = useState(initialValue)

  function toggle() {
    setIsVisible(prevState => !prevState)
  }

  return [isVisible, toggle]
}

export default useToggle