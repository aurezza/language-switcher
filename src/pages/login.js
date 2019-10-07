import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

const login = ({ t }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log('submitting...');
  } 

  return (
    <div className="login-container">
      <form onSubmit={onSubmit}>
        <div className="form">
          <p>{t('Login')}</p>
          <div className="input">
            <input
              type="text"
              placeholder={t("Username")}
              defaultValue={userName}
              onInput={({ target }) => setUserName(target.value)}
            />
            <input
              type="password"
              placeholder={t('Enter your password')}
              defaultValue={password}
              onInput={({ target }) => setPassword(target.value)}
            />
            <button type="submit">{t('Submit')}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default withTranslation()(login);