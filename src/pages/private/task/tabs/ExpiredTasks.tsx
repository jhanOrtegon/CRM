import { CardToggle, TLisItem } from "../components"

type TExpiredTasks = {
  onChangeStateCardToggle: (lisItem: TLisItem) => void,
  lisItem: TLisItem[]
}

export const ExpiredTasks = ({ onChangeStateCardToggle, lisItem }: TExpiredTasks) => {

  return (
    <div>
      <CardToggle
        onToggleStatus={(dailyTask) => onChangeStateCardToggle(dailyTask)}
        listItem={lisItem}
      />

    </div>
  )
}