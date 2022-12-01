import React from 'react'
import Spline from '@splinetool/react-spline';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Loader = ({ setLoad, animation }) => {
    const elem = React.useRef(null)
    const [arc_styles, arc_elem] = useSpring(() => ({
        loop: () => animation,
        to: { transform: 'rotate(-150deg) skewX(30deg)' },
        from: { transform: 'rotate(150deg) skewX(30deg)' }
    }))
    const [circel_styles, circle_elem] = useSpring(() => ({}))

    React.useEffect(() => {
        console.log(animation)
        if (!animation) {
            circle_elem({ height: '80vh', width: '80vh', top: 'calc(50% + 3rem)'})
            arc_elem({transform: 'rotate(150deg) skewX(30deg)', top: '-15px', left: '-5px', loop: false})
            setTimeout(() => { 
                elem.current.classList.add('finished')
                setTimeout(() => {
                    setLoad(prev => ({...prev, inprocess: false}))
                }, 300);
            }, 1000);
        }
    }, [animation])

    return (
        <div ref={elem} className="loader">
            <animated.div style={circel_styles} className="circle">
                <animated.div style={arc_styles} className="circle_arc"></animated.div>
            </animated.div>
        </div>
    )
}

function App() {
    const parallax = React.useRef()
    const [colorsList, setColorsList] = React.useState(0)
    const [load, setLoad] = React.useState({inprocess: true, animation: true})

    const handleScroll = () => {
        if (parallax.current) {
            if (parallax.current.current >= window.innerHeight) {
                document.querySelector('body').classList.add('black')
            } else {
                document.querySelector('body').classList.remove('black')
            }
        }
    }
      
    React.useEffect(() => {
        setTimeout(() => {
            setLoad(prev => ({...prev, animation: false}))
        }, 3000);

        const container = document.querySelector('.my-class-name')
        container.addEventListener('scroll', handleScroll)
        return () => {
            container.removeEventListener('scroll', handleScroll)
        }
    }, [])

	return (
		<div className="App">
            {
                load.inprocess && <Loader animation={load.animation} setLoad={setLoad} />
            }
            <header>
                <div className="container">
                    <div className="in_header">
                        <div className="logo">
                            <div className="small_circle"></div>
                            <p>.</p>
                        </div>
                        <nav>
                            <Link to="#">Colors.</Link>
                            <Link to="#">New Face.</Link>
                            <Link to="#">Allways-On.</Link>
                            <Link to="#">Your own.</Link>
                            <Link to="#">Crash Detection.</Link>
                            <Link to="#">Much more detail.</Link>
                            <Link to="#">24. Per. Second.</Link>
                            <Link to="#">All in, all day.</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="parallax_wrapper">
                <Parallax pages={3} style={{ top: '0', left: '0' }} ref={parallax} className='my-class-name'>
                    <ParallaxLayer offset={0} speed={2.5} >
                        <section className="dark_blue circle_section">
                            <div className="little_circle circle_left">
                                <div className="little_circle__content"> </div>
                            </div>
                            <div className="circle">
                                <div className="circle_arc"></div>
                                <div className="circle_text">
                                    <h1>IPHONE.</h1>
                                    <h3>New generation<br/>Big and bigger</h3>
                                </div>
                            </div>
                            <div className="little_circle circle_right">
                                <div className="little_circle__content"> </div>
                            </div>
                            {/* <Spline className="circle_spline" scene="https://prod.spline.design/LuK3RzQcoI9ywFyg/scene.splinecode" /> */}
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#ff6d6d' }} />
                    <ParallaxLayer offset={1} speed={0.5}>
                        <section className="pro_beyond_section">
                            <div className="section_content">
                                <h2>Pro.<br/>Beyond.</h2>
                                <h3>Destroy your limits.</h3>
                                <h4>From A$1,749 before trade-in<sup>1</sup></h4>
                                <a href="https://www.apple.com/au/apple-events/" target="_blank">
                                    <p>Watch the event</p>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </a>
                            </div>
                        </section>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#000' }} />
                    <ParallaxLayer offset={2} speed={0.5}>
                        <div className="container">
                            <section className="black colors_section">
                                <h2>Designed for durability.</h2>
                                <div className="section_content">
                                    <ul className="list_images">
                                        {
                                            [
                                                'https://www.apple.com/au/iphone-14-pro/images/overview/gallery_deep_purple__du23dbfjl1km_large.jpg',
                                                'https://www.apple.com/au/iphone-14-pro/images/overview/gallery_gold__e2kfk9zl5eie_large.jpg',
                                                'https://www.apple.com/au/iphone-14-pro/images/overview/gallery_silver__eph35go3eiy6_large.jpg',
                                                'https://www.apple.com/au/iphone-14-pro/images/overview/gallery_space_black__ev5ncqabz7ma_large.jpg'
                                            ].map((el, idx) => 
                                                <li key={el} className={colorsList === idx && "list_images__active"}>
                                                    <img src={el} alt=""/>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <div className="description">
                                        <ul className="list_colors">
                                            {
                                                ["Deep Puprle", "Gold", "Silver", "Space Black"].map((el ,idx) => 
                                                    <li 
                                                        key={el} 
                                                        className={colorsList === idx && "list_colors__active"}
                                                        onClick={() => setColorsList(idx)}
                                                    >{el}</li>
                                                )
                                            }
                                        </ul>
                                        <div className="line_horizontal"></div>
                                        <p>
                                            With Ceramic Shield, tougher than any smartphone glass. Water resistance.2 Surgical-grade stainless steel. 6.1″ and 6.7″ display sizes.3 All in four Pro colours.
                                        </p>
                                        <div className="bottom_content">
                                            <FontAwesomeIcon icon={faLock} />
                                            <p>
                                                iPhone is also designed from the ground up to protect your privacy and put you in control of what you share and who you share it with
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <p>Second spline</p> */}
                                {/* <Spline className="spline" scene="https://prod.spline.design/MXcS76HFKB6Sxszp/scene.splinecode" /> */}
                            </section>
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div>
		</div>
	);
}

export default App;
