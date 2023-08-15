import { nanoid } from "nanoid"
import { IconCaretRightFilled } from '@tabler/icons-react';
import { NewBadge } from '@/shared';
import { useScreenSize } from "@/hooks";

export type TLisItem = {
  id: string | number
  tab: string,
  tabColor?: '',
  bodyType: string,
  bodyTitle: string,
  bodyResponsible: string,
  footerDate: string,
  active: boolean
}

type TCardToggle = {
  onToggleStatus?: (items: TLisItem) => void,
  listItem: TLisItem[]
}

export const CardToggle = ({ listItem, onToggleStatus }: TCardToggle) => {

  const { height } = useScreenSize()

  const ellipsis = 'text-ellipsis overflow-hidden whitespace-nowrap'
  const customActive = '-bg--daisy-blue-jeans-100 text-white'
  const customActiveBadge = 'bg-white -text--daisy-blue-jeans-100'

  return (
    <div
      className="overflow-y-auto border rounded-t-md transition-all"
      style={{ height: `calc(${height}px - ${height > 800 ? '335px' : '285px'})` }}
    >
      {
        listItem?.map(item => (
          <div
            key={nanoid()}
            className={`border-b grid grid-cols-new-2-4-2-1 gap-x-4 text-sm text-daisy-space-100 font-normal items-center cursor-pointer transition-all p-2 ${item.active ? customActive : 'hover:bg-gray-100'}`}
            onClick={() => onToggleStatus({ ...item, active: !item.active })}
          >

            <div className={`flex justify-center ${ellipsis}`}>
              <NewBadge
                value={item.tab}
                size="md"
                className={`w-full text-xs ${item.active ? customActiveBadge : '-bg--daisy-blue-jeans-100 text-white'}`} color="custom"
              />
            </div>

            <div>
              <div className={`font-semibold ${ellipsis}`}>{item.bodyTitle}</div>
              <div className={ellipsis}>Tipo: {item.bodyType}</div>
              <div className={ellipsis}>Responsable: {item.bodyResponsible}</div>
            </div>

            <div className="text-xs font-normal flex justify-between items-center">
              <div>vence: {item.footerDate}</div>
              <IconCaretRightFilled height={22} width={22} className={item.active ? 'text-white' : 'text-gray-600'} />
            </div>

          </div>
        ))
      }
    </div>
  )

}