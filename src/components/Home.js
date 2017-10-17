import React from 'react';

const Home = () => {

    return (
        <section>
            <article className="col-sm-4">
                <header>
                    <h1 className="type-title">
                        I'm Jason Fukura
                    </h1>
                    <h2 className="type-subtitle">
                        User Experience Designer &amp; Web Developer
                    </h2>
                </header>
                <p>
                    I am a true User Experience designer&mdash;I do more than just neat looking wireframes&mdash;and
                    a web developer. Recently out of Udacity with my Web Developer certification to show that what I
                    have been doing for years, now has an education to back it. Frameworks, libraries, test-driven,
                    object oriented MV* code is what I love to work with, but I am no stranger to making pixel
                    perfect designs in Fireworks, Sketch and Illustrator. I tend to stay away from Photoshop for web
                    work, feel free to ask me why.
                </p>
                <p>
                    A coffee-addicted, scotch-snob father of three, there is little time in my day for things other
                    than work and kids, but when I find those moments, I generally spend my time outside, working
                    with wood, taking pictures or dealing with the other full-time job: my house. Thanks for taking
                    a look, drop me a line at
                    <a className="link" href="mailto:jason@jasonfukura.com">jason@jasonfukura.com</a>
                </p>
            </article>
            <aside className="col-sm-8" />
        </section>
    );

};

export default Home;
