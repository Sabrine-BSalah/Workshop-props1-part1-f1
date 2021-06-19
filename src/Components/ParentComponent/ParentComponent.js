import React from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

const ParentComponent = () => {
    const callBackFn = x => alert(`this is a message from ${x}`)
    return (
        <div>
            <h2>Hello from Parent Component</h2>
            <ChildComponent
                name="John"
                age={25}
                isStudent={true}
                skills={["html", "css", "js"]}
                lang={{ english: "excellent", french: "good" }}
                callBackFn={callBackFn}
            >
                <span>Test Children props</span>
            </ChildComponent>
        </div>
    )
}

export default ParentComponent
