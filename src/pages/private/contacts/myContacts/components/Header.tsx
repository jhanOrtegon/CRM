//icons
import { IconMessage2 } from '@tabler/icons-react';

export const Header = () => {

    return (
        <div className="flex gap-3 items-center">
            <div className="tooltip" data-tip="Agregar nota">
                <IconMessage2 width={35} height={35} className="text-daisy-space-100 cursor-pointer " />
            </div>
            <div className="rating rating-sm">
                <input type="radio" name="rating-5" className="mask mask-star-2 -bg--daisy-yellow-60" defaultChecked />
                <input type="radio" name="rating-5" className="mask mask-star-2 -bg--daisy-yellow-60" />
                <input type="radio" name="rating-5" className="mask mask-star-2 -bg--daisy-yellow-60" />
                <input type="radio" name="rating-5" className="mask mask-star-2 -bg--daisy-yellow-60" />
                <input type="radio" name="rating-5" className="mask mask-star-2 -bg--daisy-yellow-60" />
            </div>

        </div>
    )
}