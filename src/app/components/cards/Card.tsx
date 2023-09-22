import { InputCard } from "./InputCard";

export function Card() {
  return (
    <div className="flex justify-center items-center gap-10 flex-row">
      <InputCard 
        text="Notificação de receita"
      />

      <InputCard 
        text="Notificação de receita"
        bgGreen
      />

      <InputCard 
        text="Notificação de receita"
      />
    </div>
  )
}