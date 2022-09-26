import React from 'react';
import { Input, Label } from 'components/Filter/Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Search"
      />
    </Label>
  );
};

export default Filter;
