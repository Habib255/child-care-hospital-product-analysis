import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='main'>
            <div>
                <h4 className='question1 text-2xl'>Question: What is contex api?</h4>
                <p><strong>Answer: </strong>Contex api is a way to pass data to different level of component tree without using props to every level of the component tree. </p>
            </div>
            <div>
                <h4 className='question2 text-2xl'>Question: What is simentic tag?</h4>
                <p><strong>Answer: </strong>Simentic tag is a browser and programmer friendly tag which is used to easily understand what the meaning and what should contain in it.It's structured in a meaningful way in HTML5 to easily understand about it's content.  </p>
            </div>
            <div>
                <h4 className='question3 text-2xl'>Question: What's the different between inline and block elements?</h4>
                <p><strong>Answer: </strong> Different between inline and block element are:- </p>
                <p><strong>inline</strong></p>

                <li>inline element just block the size of it's content size.it doesn't block the full width</li>
                <li>inline element only start new line when the it is positioned beside block element.</li>
                <li>other inline element can be positioned beside inline element has finished</li>
                <p><strong>block</strong></p>
                <li>block element block the entire width of the element</li>
                <li>block element always starts in a new line </li>
                <li>no other element can be positioned beside block element</li>
            </div>


        </div>
    );
};

export default Blogs;