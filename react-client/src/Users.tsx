import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

import { useUserStore } from './CustomHooks';

export const User = observer(() => {
    const userStore = useUserStore();
    return (
        <>
            <label>
                Email:
                <input
                    name="email"
                    value={userStore.searchCriteria?.email}
                    onChange={(e) =>
                        userStore.addSearchCriteria({
                            [e.target.name]: e.target.value,
                        })
                    }
                />
            </label>

            {userStore.searchedUsers?.map((u: any) => (
                <p>
                    {u.email} - {u.name}
                </p>
            ))}
        </>
    );
});
