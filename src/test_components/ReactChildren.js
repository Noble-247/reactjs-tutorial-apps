import React from "react";

function Child({ children, spacing }) {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
}

function ReactChildren() {
  return (
    <div className='w-50 mx-auto my-5 border bg-dark text-white p-3'>
      <Child spacing={32}>
        <p>Pizza Magrita</p>
        <p>2</p>
        <p>$30</p>
        <p>18:30</p>
        <p>John</p>
      </Child>
    </div>
  );
}

export default ReactChildren;
