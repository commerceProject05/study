import { MouseEvent } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Filter } from '@/hooks/useTodo';
import { theme } from '@/styles/theme.js';

type TodoFilterProps = {
  filter: Filter;
  onChangeFilter: (filter: Filter) => void;
};
const TodoFilter = ({ filter, onChangeFilter }: TodoFilterProps) => {
  const handleClickFilter = (event: MouseEvent<HTMLLIElement>) => {
    const filter = event.currentTarget.dataset.filter as Filter;
    onChangeFilter(filter);
  };

  return (
    <Filters>
      <FilterItem
        selected={filter === 'ALL'} //
        data-filter="ALL"
        onClick={handleClickFilter}
      >
        ALL
      </FilterItem>
      <FilterItem selected={filter === 'TODO'} data-filter="TODO" onClick={handleClickFilter}>
        TODO
      </FilterItem>
      <FilterItem selected={filter === 'DONE'} data-filter="DONE" onClick={handleClickFilter}>
        DONE
      </FilterItem>
    </Filters>
  );
};

export default TodoFilter;

export const Filters = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const FilterItem = styled.li<{ selected: boolean }>`
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: ${theme.color.G8};
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      color: ${theme.color.primary};
    `}
`;
