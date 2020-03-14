import React from "react";

import "./User.css";

interface IUser {
  avatar_url: string;
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <main>
        <img src={user.avatar_url} alt="Avatar" />
        <p>
          <strong>Name: </strong> {user.name}
        </p>
        <p>
          <strong>Email: </strong> {user.email || "There is not email"}
        </p>
      </main>
    </div>
  );
};

export default User;
