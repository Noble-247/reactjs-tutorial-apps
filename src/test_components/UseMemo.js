import React, { useMemo, useState } from "react";

function UseMemo() {
  const [numbers] = useState([1000, 12000, 103020]);
  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  // useMemo
  const total = useMemo(
    () => numbers.reduce((accumulator, number) => accumulator + number, 0),
    [numbers]
  );

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  //   useCallback

  return (
    <div className='container p-3 mt-5 bg-light'>
      <h2>UseMemo</h2>{" "}
      <p>
        The React useMemo Hook returns a memoized value. Think of memoization as
        caching a value so that it does not need to be recalculated. The useMemo
        Hook only runs when one of its dependencies update. This can improve
        performance. The useMemo and useCallback Hooks are similar. The main
        difference is that useMemo returns a memoized value and useCallback
        returns a memoized function.
      </p>
      <p>
        The useMemo Hook can be used to keep expensive, resource intensive
        functions from needlessly running. In this example, we have an expensive
        function that runs on every render. When changing the count or adding a
        todo, you will notice a delay in execution.
      </p>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <div>Sorted Names: {sortedNames.join(", ")}</div>
      <h2 className='mt-4'>
        UseCallBack - (Needs a more concise explanation with code snippets)
      </h2>
      <p>
        The React useCallback Hook returns a memoized callback function. Think
        of memoization as caching a value so that it does not need to be
        recalculated. This allows us to isolate resource intensive functions so
        that they will not automatically run on every render. The useCallback
        Hook only runs when one of its dependencies update. This can improve
        performance.
      </p>
      <p>
        One reason to use useCallback is to prevent a component from
        re-rendering unless its props have changed. In this example, you might
        think that the Todos component will not re-render unless the todos
        change:
      </p>
    </div>
  );
}

export default UseMemo;
