import React from 'react';

const List = props => {
  const { items } = props;
  if (!items) return null;
  if (!items.length) return <p>No items found.</p>;

  return (
    <div className="list">
      {items.map(item => {
        return (
          <div key={item.id} className="list-item">
            <img src={item.avatar_url} alt={item.login} className="avatar" />
            <div className="user-details">
              <p className="user-name">{item.login}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
