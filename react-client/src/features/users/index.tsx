import { observer } from 'mobx-react';
import React from 'react';

import { useUserFeature } from './Hooks';
import { UserPageComponent } from './UserPage';

// Would probably move this to its own file and export it from index instead ¯\_(ツ)_/¯
function UserFeature() {
    const { store } = useUserFeature();
    return (
        <>
            <UserPageComponent store={store} />
        </>
    );
}

export const UserFeatureComponent = observer(UserFeature);
