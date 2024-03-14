import React from 'react';

export type TableHeadProps = {
  columnNames: Array<string>;
};

const TableHead = ({ columnNames }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {columnNames.map((item, i) => (
          <th key={'a-' + i}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
