import React from 'react';
import './circles.css';

function Circles() {
    return (
        <div className="circles-container">
            <div className="circles-wrapper">
                {/* Animated circles */}
                <div className="circles-group">
                    {/* Circle 0.5 - innermost */}
                    <div className="circle circle-point5"></div>

                    {/* Circle 1 - innermost */}
                    <div className="circle circle-1"></div>

                    {/* Circle 2 */}
                    <div className="circle circle-2"></div>

                    {/* Circle 3 */}
                    <div className="circle circle-3"></div>

                    {/* Circle 4 */}
                    <div className="circle circle-4"></div>

                    {/* Circle 5 */}
                    <div className="circle circle-5"></div>

                    {/* Circle 6 - outermost */}
                    <div className="circle circle-6"></div>
                    {/* Circle 7 - outermost */}
                    <div className="circle circle-7"></div>
                    {/* Circle 8- outermost */}
                    <div className="circle circle-8"></div>
                    {/* Circle 9 - outermost */}
                    <div className="circle circle-9"></div>
                </div>

                {/* Center content */}
                <div className="center-content">
                    <h1 className="coming-soon-text">COMING SOON</h1>
                </div>
            </div>
        </div>
    );
}

export default Circles;