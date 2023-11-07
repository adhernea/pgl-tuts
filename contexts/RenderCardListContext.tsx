import React from 'react'

type RenderCardListContextType = {
  isListRendered: boolean,
  setIsListRendered: Function
}

const RenderCardListContext = React.createContext({} as RenderCardListContextType)

export default RenderCardListContext;
