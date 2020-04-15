import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

function SurveySidebar({ store }: any): JSX.Element {
    {
        return (
            <>
                {store.survey?.sections?.map((s: any) => {
                    if (s.id === store.activeSection?.id) {
                        return (
                            <p>
                                <strong>{s.name}</strong>
                            </p>
                        );
                    }
                    return <p>{s.name}</p>;
                })}
            </>
        );
    }
}

export const SurveySidebarComponent = observer(SurveySidebar);
