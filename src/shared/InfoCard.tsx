type TInfoCard = {
    hasHeader?: boolean,
    colorHeader?: 'space-100' | 'space-80' | 'space-60' | 'space-40' | 'success' | 'warning',
    titleHeader?: string,
    valueHeader?: string,
    titleBody: string,
    valueBody: string,
    subtitleBody: string,
    iconFooter: React.ReactNode,
    textFooter: string,
    onClick?: () => void
}

export const InfoCard = ({
    iconFooter,
    subtitleBody,
    textFooter,
    titleBody,
    valueBody,
    colorHeader = 'space-100',
    hasHeader = true,
    titleHeader,
    valueHeader,
    onClick
}: TInfoCard) => {

    let customHeader = ''

    if (colorHeader === 'space-100') customHeader = 'bg-daisy-space-100'
    if (colorHeader === 'space-80') customHeader = 'bg-daisy-space-80'
    if (colorHeader === 'space-60') customHeader = 'bg-daisy-space-60'
    if (colorHeader === 'space-40') customHeader = 'bg-daisy-space-40'
    if (colorHeader === 'success') customHeader = 'bg-daisy-green-leaf-100'
    if (colorHeader === 'warning') customHeader = '-bg--daisy-red-100'

    return (
        <div
            className="shadow-md rounded-md border-gray-300 border cursor-pointer transition-all hover:scale-105"
            onClick={onClick}
        >
            {
                hasHeader ? (
                    <div
                        id="header-info-card"
                        className={`pt-2 pb-1 px-4 text-white rounded-t-md text-sm ${customHeader}`}
                    >
                        <div className="font-semibold">{titleHeader}</div>
                        <div className="">{valueHeader}</div>
                    </div>
                ) : ''
            }

            <div id="body-info-card" className="p-2 text-xs text-daisy-space-100">
                <div className="font-semibold mb-2">
                    {titleBody}
                </div>

                <div className="size11 font-medium text-slate-800">
                    {valueBody}
                </div>

                <div className="size11 font-medium text-slate-800">
                    {subtitleBody}
                </div>

            </div>

            <div id="footer-info-card" className="p-2 pt-0 flex gap-x-2 items-center">
                {iconFooter}

                <div className="size11 font-medium text-gray-500">
                    {textFooter}
                </div>
            </div>
        </div>
    )
}