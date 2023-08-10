import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps } from '@mui/material/Select';
import { nanoid } from 'nanoid'
import { useScreenSize } from '@/hooks';
import { breakPoints } from '@/utils';

interface ISelectSingle extends SelectProps {
  inputLabel: string,
}

export const SelectSingle = ({ inputLabel, id, value, onChange, color }: ISelectSingle) => {

  const unique = nanoid()
  const { width } = useScreenSize()

  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  return (
    <FormControl 
      sx={{ m: 0, width: '100%', p: 0 }} 
      size={width >= breakPoints.lg ? 'medium' : 'small'}
    >
      <InputLabel id={`select-label-${unique}`}>{inputLabel}</InputLabel>
      <Select
        labelId={`select-label-${unique}`}
        id={id}
        value={value}
        label={inputLabel}
        onChange={onChange}
        color={color}
      >
        <MenuItem value="">
          <em>Ninguna</em>
        </MenuItem>
        <MenuItem value={10}>valor x</MenuItem>
        <MenuItem value={20}>valor y</MenuItem>
        <MenuItem value={30}>valor z</MenuItem>
      </Select>
    </FormControl>
  );
}