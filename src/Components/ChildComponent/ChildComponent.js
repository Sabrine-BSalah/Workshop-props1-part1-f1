import React from 'react'
import PropTypes from 'prop-types'

const ChildComponent = ({ name, age, skills, lang, isStudent, callBackFn, children }) => {
    // console.log(props)
    const x = "child component"
    return (
        <div>
            <h2>Hello from Child Component</h2>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>Skills : {skills}</h2>
            <h2>English : {lang.english}</h2>
            <h2>French : {lang.french}</h2>
            {isStudent &&
                <button onClick={() => callBackFn(x)}>Click here</button>
            }
            {children}
        </div>
    )
}

export default ChildComponent

/*** Default props */
ChildComponent.defaultProps = {
    name: "No name"
}

/*** Prop types */
ChildComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    skills: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.shape({
        english: PropTypes.string,
        french: PropTypes.string,
    })
}
