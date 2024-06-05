import React, {useCallback, useEffect, useRef, useState} from "react";

interface UseFocusOptions {
    isFocused?: boolean;
    ref?: React.RefObject<HTMLDivElement>;
}

export function useFocus(): UseFocusOptions {
    const ref: React.RefObject<HTMLDivElement> = useRef(null)
    const [isFocused, setIsFocused] = useState(false)

    const toggle = useCallback(() => {
        setIsFocused(!isFocused)
    }, [isFocused])

    useEffect(() => {
        const element = ref.current

        element?.addEventListener('focus', toggle)
        element?.addEventListener('blur', toggle)

        return () => {
            element?.removeEventListener('focus', toggle)
            element?.removeEventListener('blur', toggle)
        }
    })

    return {ref, isFocused}
}