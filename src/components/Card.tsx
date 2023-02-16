




import React from 'react'
import './cardStyles.css'



  interface CardProps{

      img?:string;
      name?: string;
      gender?: string;
      specie?: string;
      episodes?: string[];
      status?: string;
      
  }


export const Card = ({ img, name,
  gender,
  specie,
  episodes,
  status, }:CardProps) => {


  return (

            <div className='card' > 
                <div className='conten_img' >
                 <img className='img' src={img} alt="" />
                </div>
                <div className='content_card' >
                    <h3> { name } </h3>
                    <p> Gender:  <span> { gender } </span></p>
                    <p> Specie:  <span>  { specie }  </span></p>
                    <p className='epi' > Episodes:
                    {
                      episodes?.map( ( epi, index )=>{

                          return    <span key={index} > { index }, </span>

                      } )
                    }
                   </p>
                   <p> Status:  <span>  { status }  </span></p>
                </div>
            </div>

  )
}
