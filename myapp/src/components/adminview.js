import React, { useState } from 'react';
import List from './list'

const Adminview = () => {
  const [passwordEntered, setPasswordEntered] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password == '123456') {
      setPasswordEntered(true);
    }
  };

  if (!passwordEntered) {
    return (
      <form onSubmit={handlePasswordSubmit}>
        <label>
          Admin Password:
          <div className="input-group"><input  style={{width:'min-content', margin:'0px 750px'}} type="password" value={password} className='form-input w-1/3' onChange={handlePasswordChange} /></div>
        </label>
        <button type="submit" className='border py-2 text-white bg-slate-800 rounded-lg w-20'>Submit</button>
      </form>
    );
  }

  return <List />;
};

export default Adminview;
