import React, { ReactNode } from 'react'

interface props {
  children: ReactNode;
}
const PageContainer: React.FC<props> = ({ children }) => {
  return (
    <div className="mx-auto w-[80vw] min-h-[80vh]">

      {children}
    </div>
  )
}

export default PageContainer