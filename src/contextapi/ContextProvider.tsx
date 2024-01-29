import React, { createContext, useEffect, useState } from 'react'
import { portfolioApi, portfolioValuesApi } from '../serviceapi/serviceapi';


interface ContextValues {
  test: string;
  portofolioCollection: any[];
  portofolioValuesCollection: any[];

}

const initialContextValues: ContextValues = {
  test: '',
  portofolioCollection: [],
  portofolioValuesCollection: [],

};

export const GlobalData = createContext<ContextValues>(initialContextValues);

const ContextProvider = ({children}:React.PropsWithChildren<{}>) => {
      const [portofolioCollection,setportofolioCollection] = useState<any>([]);
      const [portofolioValuesCollection,setportofolioValuesCollection] = useState<any>([]);

  
      let getApi = async () =>{
        let res = await portfolioApi();
        res.status && setportofolioCollection(res.data);

        let res1 = await portfolioValuesApi();
        res1.status && setportofolioValuesCollection(res1.data);
      }
  
      useEffect(()=>{
          getApi();
      },[]);

  
  
    return (
  
      <GlobalData.Provider value={{
        test: "ok check",
        portofolioCollection,
        portofolioValuesCollection
      }}>
      
      {children}
      </GlobalData.Provider>
   
    )
  }

  export default ContextProvider