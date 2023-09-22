import Image from "next/image"
import React from "react"

import img from '../../../../public/icon-main.svg'

interface InputCardProps{
  text: string,
  bgGreen?: boolean
}
  
export const InputCard: React.FC<InputCardProps> = ({
  text, 
  bgGreen 
}) => {

  const styles = `${bgGreen ? 'bg-blue-500' : 'bg-blue-400'} ${bgGreen ? 'hover:bg-red-600' : 'hover:bg-blue-500'} w-[264px] h-[244px] flex justify-center items-center flex-col gap-8 rounded-[12px] border-[3px] border-dashed border-current border-blue-900 p-5 cursor-pointer transition-all duration-500`

  const styles02 = `${bgGreen ? 'bg-blue-400' : 'bg-blue-500'} ${bgGreen ? 'hover:bg-blue-500' : 'hover:bg-blue-600'} w-[264px] h-[244px] flex justify-center items-center flex-col gap-8 rounded-[12px] cursor-pointer transition-all duration-500
  shadow-md shadow-slate-400
  `

  return (
    <div 
      className={styles02}
    >
      <Image 
        src={img}
        alt="Imagem"
        width={90}
      />
      
      <p
        className="font-medium text-lg text-white-100 bg-blue"
      >
        {text}
      </p>

      <p className="font-normal text-xs text-white-100 font-raleway">
        Tipos de Notificação de receita
      </p>
    </div>
  )
}