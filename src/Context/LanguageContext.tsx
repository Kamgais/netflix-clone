import React , {createContext, useState} from 'react'


export  const LanguageContext = createContext({lang:undefined, changeLang:(str:string)=>{}})
export default function LanguageContextProvider(props: {
    children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
}) {
    const [lang,setLang] = useState<any>('ger')

    const changeLang = (str:string) => {
     setLang(str)
    }
  return (
    <LanguageContext.Provider value={{lang, changeLang}}>
      {props.children}
    </LanguageContext.Provider>
  )
}
