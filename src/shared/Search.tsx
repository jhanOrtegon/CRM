import { IconSearch } from '@tabler/icons-react';

interface TSearch extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const Search = (props: TSearch) => {
    return (
        <div className='flex items-center w-full'>
            <div className='relative flex items-center w-full shadow-sm'>
                <input
                    {...props}
                    type="text"
                    placeholder="Buscar"
                    className="input input-bordered w-full px-2 pr-10 bg-daisy-space-10 rounded-lg h-10 text-daisy-space-100 font-normal focus:outline-0"
                />
                <IconSearch className='absolute right-2 cursor-pointer text-daisy-space-100' size={15}/>
            </div>
        </div>

    )
}