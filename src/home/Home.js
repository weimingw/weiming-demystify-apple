import './home.scss';
import gif from './apple-animation.gif';

export default function Home() {
    return (
        <div className="home">
            <h1>The JavaScript behind Apple's product pages.</h1>
            <p>
                Apple's product pages are very impressive. Things are animated
                on scroll, and you can rewind the animation by scrolling back
                up.
            </p>
            <p>
                <a href="https://www.apple.com/ipad-pro/">
                    An example of what I'm talking about.
                </a>
            </p>
            <div>
                <img className="gif" src={gif} />
            </div>
            <p>
                I was mystified and needed to know how they did it. I managed to
                reverse engineer something similar by poking around their page.
            </p>
            <p>
                Note: I am not trying to describe exactly what designers / front
                end engineers at Apple are actually doing.
            </p>
            <p>1. They probably use a library like ScrollMagic.</p>
            <p>
                2. They interpolate way more advanced animations than what I'm
                showing.
            </p>
            <p>I'm trying to show that it looks like magic, but the JavaScript and CSS that they use are actually very simple.</p>

            <h4>Summary of how it works</h4>
            <p>There are scroll listeners on multiple elements.</p>
            <p>
                The user's scroll position gets converted into relative
                proportion that the user has scrolled through the element (i.e.
                if the scroll position is a quarter way through scrolling the
                element, the JS gets 0.25)
            </p>
            <p>The relative proportion gets interpolated into a style.</p>
            <p>
                When scrolling through an element, there's an element with CSS
                "position: sticky;" so that it stays inside the view, but also
                would not stay when the user scrolls past the element.
            </p>

            <h4>Click the links above to see live examples:</h4>
            <h5>Basic</h5>
            <p>
                This is a simple example where you only see the relative
                proportion inside a sticky element.
            </p>
            <h5>Full</h5>
            <p>
                This is a full example where you can see how relative
                proportions can be interpolated into a few styles, which gives
                rise to pleasing transitions and animations despite their
                simplicity.
            </p>
        </div>
    );
}
