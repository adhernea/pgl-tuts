import RenderCardListContext from "../contexts/RenderCardListContext";
import React from 'react'

type RenderCardListProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const RenderCardListProvider = (props: RenderCardListProviderProps) => {
  const { children } = props;

  const [isListRendered, setIsListRendered] = React.useState(true)

  const providerInitialValue = {
    isListRendered,
    setIsListRendered
  }

  return (
    <RenderCardListContext.Provider value={providerInitialValue}>
      {children}
    </RenderCardListContext.Provider>
  )

}

export default RenderCardListProvider;