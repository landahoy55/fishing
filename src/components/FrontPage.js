import React from 'react';
import SessionList from './SessionList';
import SessionListFilter from './SessionListFilter';

const FrontPage = () => (
    <div>
      <SessionListFilter />
      <SessionList />
    </div>
);

export default FrontPage;