import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
      <Menu style ={{ marginTop:'10px' }}>
        <Link route="/">
          <a className="item">CrowdCoin</a>
        </Link>

    <Menu.Menu position="right">
        <Link route="/buytokens">
          <a className="item">Buy Tokens</a>
        </Link>


        </Menu.Menu>
      </Menu>
    );
};
