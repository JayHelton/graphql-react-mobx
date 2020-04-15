import { observer } from 'mobx-react';
import React from 'react';

import { UserStore } from './Store';

function UserPage({ store }: { store: UserStore }): JSX.Element {
    return (
        <>
            <button onClick={() => store.fetch()}>Fetch</button>
            <h1>Users</h1>
            <div>
                <ul>
                    {store.searchedUsers?.map(({ email, name, id }: any) => (
                        <li>
                            {id} - {email} - {name}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <label>
                    Search Users:
                    <input
                        value={store.searchedText}
                        onChange={(e) => store.setSearchedText(e.target.value)}
                    />
                </label>
            </div>
        </>
    );
}

export const UserPageComponent = observer(UserPage);
