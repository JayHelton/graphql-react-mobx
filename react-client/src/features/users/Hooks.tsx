import React, { useEffect, useState } from 'react';

import { useStores } from '../../Context';

export function useUserFeature() {
    const { userStore } = useStores();
    useEffect(() => {
        userStore.fetch();
        console.log('fetching');
    }, []);
    return { store: userStore };
}

export function useFormState(defaultFormValue: any) {
    // Idea by Michael O'Keefe
    const [values, setValues] = useState(defaultFormValue);
    // Maybe dont use the event here? 🤔
    const setFormValues = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return [values, setFormValues];
}
