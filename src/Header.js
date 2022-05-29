import React from 'react'
import { useEffect, useState } from "react";
import { moneyFormat } from './helpers';
import "./style.scss"



function Header({money,total}) {
  return (
    <>

        {total>0 && 
             <div className="header">
                  Harmacak için <span>${moneyFormat(money-total)}</span> paranız kaldı!
             </div>
            || <div className="header">
            Harmacak için <span>${moneyFormat(money-total)}</span> paranız var
  
            </div> }

            {money-total===0 && (
                <div className='header'>Paran bitti, herhangi bir ürün alamazsın.</div>
            )}

        
       



    </>
  )
}

export default Header