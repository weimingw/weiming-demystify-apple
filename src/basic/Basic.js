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
                <StickyView height={3240}>
                    {(proportion) => (
                        <div className="basic-sticky-content">
                            <h1>{proportion}</h1>
                            <h6>Scroll this page!</h6>
                            <p>
                                As you scroll, you'll notice that this number
                                changes, and text stays stuck on screen.
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
                <StickyView height={3240}>
                    {(proportion) => (
                        <div className="basic-sticky-content sticky-content-2">
                            <h1>{proportion}</h1>
                            <p>
                                Notice that the other sticky element is gone and
                                this one has the spotlight now.
                            </p>
                            <p>Also, notice that:</p>
                            <li>
                                When the last sticky element moved out, its
                                proportion is above 1.
                            </li>
                            <li>
                                When the this sticky element is moving in, its
                                proportion is above below 0.
                            </li>
                        </div>
                    )}
                </StickyView>
                <StickyView height={3240}>
                    {(proportion) => (
                        <div className="basic-sticky-content">
                            <h1>{proportion}</h1>
                            <p>This is the third one.</p>
                            <p>Nothing important here.</p>
                        </div>
                    )}
                </StickyView>
            </div>
        </ScrollContext.Provider>
    );
}
