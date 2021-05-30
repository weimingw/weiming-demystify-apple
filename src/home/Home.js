import './home.scss';

export default function Home() {
    return (
        <div className='home'>
            <h1>This site is to illustrate the JavaScript behind Apple's product pages.</h1>
            <p>How it works: there are scroll listeners on multiple elements.</p>
            <p>The user's scroll position gets converted into relative proportion that the user has scrolled through the element (i.e. if the scroll position is a quarter way through scrolling the element, the JS gets 0.25)</p>
            <p>The relative proportion gets interpolated into a style.</p>
            <p>When scrolling through an element, there's an element with CSS "position: sticky;" so that it stays inside the view, but also would not stay when the user scrolls past the element.</p>
            
            <h4>Click the links above to see live examples:</h4>
            <h2>Basic</h2>
            <p>This is a simple example where you only see the relative proportion inside a sticky element.</p>
            <h2>Full</h2>
            <p>This is a full example where you can see a few styles that get interpolated from the proportion.</p>
        </div>
    )
}