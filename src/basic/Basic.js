import { useState } from 'react';
import StickyView from '../common/StickyView';
import ScrollContext from '../common/ScrollContext';
import './basic.scss';

export default function Basic(props) {
    const [scrollingElement, setScrollingElement] = useState(null);

    function scrollingElRef(ref) {
        setScrollingElement(ref);
    }

    return (
        <ScrollContext.Provider value={{ scrollingElement }}>
            <div className="scrolling-view" ref={scrollingElRef}>
                <StickyView height={4320}>
                    {(proportion) => (
                        <div className="basic-sticky-content">
                            <h1>{proportion}</h1>
                            <p>
                                As you scroll, you'll notice that this number
                                changes, but its contents stay stuck on screen.
                            </p>
                            <p>This number goes from:</p>
                            <li>
                                0 when the top of the sticky container is at the
                                top of its parent
                            </li>
                            <li>
                                1 when the bottom of the sticky container is at
                                the bottom of its parent
                            </li>
                        </div>
                    )}
                </StickyView>
            </div>
        </ScrollContext.Provider>
    );
}
