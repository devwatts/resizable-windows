import { useEffect } from 'react';

const useResizable = (ref, refLeft, refTop, refRight, refBottom) => {
    useEffect(() => {
        if (!ref.current) return;

        let originalWidth = parseInt(window.getComputedStyle(ref.current).width, 10);
        let originalHeight = parseInt(window.getComputedStyle(ref.current).height, 10);
        let originalX = 0; // Original x position
        let originalY = 0; // Original y position
        let originalLeft = 0; // Original left position
        let originalTop = 0; // Original top position

        const onMouseMove = (direction, event) => {
            const dx = event.clientX - originalX;
            const dy = event.clientY - originalY;

            if (direction === 'right') {
                const newWidth = originalWidth + dx;
                ref.current.style.width = `${newWidth}px`;
            } else if (direction === 'left') {
                const newWidth = originalWidth - dx;
                ref.current.style.width = `${newWidth}px`;
                ref.current.style.left = `${originalLeft + dx}px`;
            } else if (direction === 'top') {
                const newHeight = originalHeight - dy;
                ref.current.style.height = `${newHeight}px`;
                ref.current.style.top = `${originalTop + dy}px`;
            } else if (direction === 'bottom') {
                const newHeight = originalHeight + dy;
                ref.current.style.height = `${newHeight}px`;
            }
        };

        const onMouseDown = (direction, event) => {
            event.preventDefault(); // Prevent text selection
            originalX = event.clientX;
            originalY = event.clientY;
            originalWidth = parseInt(window.getComputedStyle(ref.current).width, 10);
            originalHeight = parseInt(window.getComputedStyle(ref.current).height, 10);
            originalLeft = parseInt(window.getComputedStyle(ref.current).left, 10);
            originalTop = parseInt(window.getComputedStyle(ref.current).top, 10);

            const handleMouseMove = (e) => onMouseMove(direction, e);
            const stopResize = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', stopResize);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', stopResize);
        };

        // Add event listeners
        refRight.current && refRight.current.addEventListener('mousedown', onMouseDown.bind(null, 'right'));
        refLeft.current && refLeft.current.addEventListener('mousedown', onMouseDown.bind(null, 'left'));
        refTop.current && refTop.current.addEventListener('mousedown', onMouseDown.bind(null, 'top'));
        refBottom.current && refBottom.current.addEventListener('mousedown', onMouseDown.bind(null, 'bottom'));

    }, [ref, refLeft, refTop, refRight, refBottom]); // Dependency array
};

export default useResizable;
