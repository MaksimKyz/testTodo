import React, {ChangeEvent, useCallback, useState} from 'react';

export type UseInput = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const useInput = (initialValue = ""): UseInput => {
    const [value, setValue] = useState(initialValue);

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
        []
    );

    return {value, onChange, setValue};
};