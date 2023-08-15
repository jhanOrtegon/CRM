import { CardToggle, TLisItem } from "../components"

type THistory = {
  onChangeStateCardToggle: (lisItem: TLisItem) => void,
  lisItem: TLisItem[]
}

export const History = ({ onChangeStateCardToggle, lisItem }: THistory) => {

  return (
    <div>
      <CardToggle
        onToggleStatus={(dailyTask) => onChangeStateCardToggle(dailyTask)}
        listItem={lisItem}
      />

    </div>
  )
}