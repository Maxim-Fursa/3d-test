import React from 'react'
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

function App() {

	return (
		<div className="App">
            <header>
                <div className="container">
                    <div className="in_header">
                        <div className="logo">
                            <div className="small_circle"></div>
                            <p>.</p>
                        </div>
                        <nav>
                            <Link to="#">Pro. Beyond.</Link>
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
            <section>
                <div className="circle">
                    <div className="circle_arc"></div>
                    <div className="circle_text">
                        <h1>IPHONE.</h1>
                        <h3>New generation<br/>Big and bigger</h3>
                    </div>
                    <ul>
                        <li>Pro. Beyond.</li>
                        <li>Colors.</li>
                        <li>New Face.</li>
                        <li>Allways-On.</li>
                        <li>Your own.</li>
                        <li>Crash Detection.</li>
                        <li>Much more detail.<br/>In much less light.</li>
                        <li>24. Per. Second.</li>
                        <li>All in, all day.</li>
                    </ul>
                </div>
                <Spline className="circle_spline" scene="https://prod.spline.design/LuK3RzQcoI9ywFyg/scene.splinecode" />
            </section>
            <section></section>
		</div>
	);
}

export default App;
