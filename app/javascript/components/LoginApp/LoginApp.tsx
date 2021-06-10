import * as React from 'react';
import { useEffect, useState } from 'react';
import { login } from '@api/endpoints';

export const LoginApp: React.FC = (props) => {
  const [name, setName] = useState("")
  const [role, setRole] = useState("candidate")

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onRoleChange = (e) => {
    setRole(e.target.value)
  }

  const handleSUbmit = (e) => {
    e.preventDefault();
    // POST /api/users/login
    // This will be perform two things
    // If user exist with same name then just return id of user and create Session
    // If user is not exist then create new record and return id and create session
    login({ name: name, role: role })
      .then(respose => {
        // setData(incentives);
        // setLoading(false);
      });

    if(role === "researcher") { // /setup
      window.location.replace("/setup");
    }
    else if(role === "candidate") { // /redeem
      window.location.replace("/redeem");
    }
  }

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSUbmit}>
        <div className="flex items-center space-x-2 pb-4">
          <p>Username:</p>
          <input
            className="text-xl border"
            type="text"
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="flex items-center space-x-2 pb-4">
          <p>Role:</p>
          <input
            style={{marginRight: 5}}
            type="radio"
            value="researcher"
            checked={role === "researcher"}
            onChange={onRoleChange}
          />Researcher
          <input
            style={{marginRight: 5}}
            type="radio"
            value="candidate"
            checked={role === "candidate"}
            onChange={onRoleChange}
          />Candidate
        </div>
        <button
          type="submit"
          className="hover:bg-gray-100 bg-gray-200 rounded-md px-4 py-2"
        >Login</button>
      </form>
    </div>
  );
};
