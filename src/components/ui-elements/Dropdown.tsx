import React from 'react';
import './dropdown.less';

type Props = {
  handleChange: (targetValue: string) => void;
  id?: string;
  name?: string;
  className?: string;
  isRequired?: boolean;
  formId?: string;
  options: Option[];
};

type Option = {
  name: string;
  value: string;
};

const Dropdown: React.FC<Props> = (props) => {
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    if (props.handleChange) {
      props.handleChange(e.target.value);
    }
  }

  return (
    <select
      id={props.id}
      name={props.name}
      className={`${props.className} dropdown`}
      onChange={(e) => handleChange(e)}
      required={props.isRequired}
      autoComplete="off"
      form={props.formId}
    >
      {props.options.map((option, i) => {
        return (
          <option
            key={option.name + option.value + i}
            value={option.value}
          >
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
