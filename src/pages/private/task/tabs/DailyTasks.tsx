import { CardToggle, TLisItem } from "../components"

type TDailyTasks = {
  onChangeStateCardToggle: (lisItem: TLisItem) => void,
  lisItem: TLisItem[]
}

export const DailyTasks = ({ onChangeStateCardToggle, lisItem }: TDailyTasks) => {

  return (
    <div>
      <CardToggle
        onToggleStatus={(dailyTask) => onChangeStateCardToggle(dailyTask)}
        listItem={lisItem}
      />

    </div>
  )
}