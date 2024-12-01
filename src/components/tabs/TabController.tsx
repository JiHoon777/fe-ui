import type { ReactNode } from 'react'

import { useState } from 'react'

interface TabControllerProps {
  initialIndex?: number
  onChange?: (index: number) => void
  children: (props: {
    currentIndex: number
    setCurrentIndex: (index: number) => void
  }) => ReactNode
}

export const TabController = ({
  initialIndex = 0,
  onChange,
  children,
}: TabControllerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handleChange = (index: number) => {
    setCurrentIndex(index)
    onChange?.(index)
  }

  return children({ currentIndex, setCurrentIndex: handleChange })
}
