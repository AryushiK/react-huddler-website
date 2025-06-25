import React from 'react';
import './circles.css';

function Circles() {
    return (
        <div className="circles-container">
            <div className="circles-wrapper">
                {/* Animated circles */}
                <div className="circles-group">
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
                </div>

                {/* Center content */}
                <div className="center-content">
                    <h1 className="coming-soon-text">Coming Soon</h1>
                </div>
            </div>
        </div>
    );
}

export default Circles;