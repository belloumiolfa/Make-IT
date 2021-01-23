import React, { useState, useEffect } from 'react';
import { socialMediaData } from '../../../Utils/FakeData/SocialMediaData';

function SocialMedia() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setAccounts(socialMediaData);
  });

  return (
    <div className="social-links text-center">
      {accounts.map(account => (
        <a
          key={account.icon}
          target="_blank"
          rel="noreferrer"
          href={account.link}
          className={account.name}
        >
          <i className={account.icon}></i>
        </a>
      ))}
    </div>
  );
}
export default SocialMedia;
