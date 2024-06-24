import React, { useEffect } from 'react';

const CountdownSection = () => {
    useEffect(() => {
        const countdownDate = new Date("September 26, 2024 00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;

            if (distance < 0) {
                clearInterval(interval);
                document.getElementById('days').innerText = 0;
                document.getElementById('hours').innerText = 0;
                document.getElementById('minutes').innerText = 0;
                document.getElementById('seconds').innerText = 0;
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className="relative text-center text-black">
                <h1 className="text-2xl md:mt-10 font-bold lg:text-6xl">
                    1st International Conference On Sustainability of Sciences for the Future
                </h1>
                <h1 className="text-2xl text-blue mb-8">September 26-27th, 2024</h1>
                
                <div className="countdown-container text-xl">
                    <div className="countdown-item p-2 rounded-lg bg-black-light">
                        <span id="days">0</span>
                        <p>Days</p>
                    </div>
                    <span className='countdown-item2'>:</span>
                    <div className="countdown-item p-2 rounded-lg bg-black-light">
                        <span id="hours">0</span>
                        <p>Hours</p>
                    </div>
                    <span className='countdown-item2'>:</span>
                    <div className="countdown-item p-2 rounded-lg bg-black-light">
                        <span id="minutes">0</span>
                        <p>Minutes</p>
                    </div>
                    <span className='countdown-item2'>:</span>
                    <div className="countdown-item p-2 rounded-lg bg-black-light">
                        <span id="seconds">0</span>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountdownSection;
