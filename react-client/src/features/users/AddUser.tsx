import { observer } from 'mobx-react';
import React from 'react';

import { useFormState } from './Hooks';
import { UserStore } from './Store';

function AddUser({ store }: { store: UserStore }): JSX.Element {
    const [formValues, setFormValues] = useFormState({ name: '', email: '' });
    return (
        <>
            <h1>Create Users</h1>
            <div>
                <label>
                    Email
                    <input
                        name="email"
                        value={formValues.email}
                        onChange={(e) => setFormValues(e)}
                    />
                </label>
                <label>
                    Name
                    <input
                        name="name"
                        value={formValues.name}
                        onChange={(e) => setFormValues(e)}
                    />
                </label>
            </div>
            <button onClick={() => store.createUser(formValues)}>Create</button>
        </>
    );
}

export const AddUserComponent = observer(AddUser);
