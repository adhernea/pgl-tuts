import React from 'react'

type RenderCardListContextType = {
  isListRendered: boolean;
  toggleIsListRendered: Function;
}

const RenderCardListContext = React.createContext({} as RenderCardListContextType)

export {RenderCardListContext, RenderCardListContextType};
