import { useEffect, useState } from 'react';

const useResponsive = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isMobile };
};

export default useResponsive;