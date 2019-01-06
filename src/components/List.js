import React from 'react';

const List = props => {
  const { items } = props;
  if (!items) return null;
  if (!items.length) return <p>No items found.</p>;

  return (
    <div className="list">
      {items.map(item => {
        return (
          <div key={item.id.value} className="list-item">
            <img
              src={item.picture.thumbnail}
              alt={item.login.username}
              className="avatar"
            />
            <div className="user-details">
              <p className="user-name">{item.login.username}</p>
              <p className="user-email">{item.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
