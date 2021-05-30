import { useContext, useEffect, useRef, useState } from 'react';
import ScrollContext from './ScrollContext';
import './stickyView.scss';

export default function StickyView(props) {
    const { height, children } = props;
    const elRef = useRef();
    const { scrollingElement } = useContext(ScrollContext);
    const [proportion, setProportion] = useState(null);

    function onScroll(container) {
        const containerRect = container.getBoundingClientRect();
        const selfRect = elRef.current.getBoundingClientRect();
        const offTop = containerRect.y - selfRect.y;
        const viewHeight = selfRect.height - containerRect.height;
        setProportion(offTop / viewHeight);
    }

    useEffect(() => {
        if (scrollingElement) {
            scrollingElement.addEventListener('scroll', (e) => onScroll(e.target));
            onScroll(scrollingElement);
        }
        return () => scrollingElement?.removeEventListener('scroll', onScroll);
    }, [scrollingElement]);

    return (
        <div className="sticky-view" ref={elRef} style={{ height }}>
            <div
                className="sticky-view-sticky"
                style={{ height: scrollingElement?.clientHeight }}
            >
                {children(proportion)}
            </div>
        </div>
    );
}
