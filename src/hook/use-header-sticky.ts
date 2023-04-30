import React from 'react'

export function useHeaderSticky() {
  const [isHeaderShown, setIsHeaderShown] = React.useState(false)
  const [lastHeaderPosition, setLastHeaderPosition] = React.useState(0)

  React.useEffect(() => {
    function onChangeScrollPage() {
      if (scrollY > 64) {
        setIsHeaderShown(true)
      } else {
        setIsHeaderShown(false)
      }

      setLastHeaderPosition(scrollY)
    }

    addEventListener('scroll', onChangeScrollPage)

    return () => {
      removeEventListener('scroll', onChangeScrollPage)
    }
  }, [lastHeaderPosition])

  return { isHeaderShown }
}
