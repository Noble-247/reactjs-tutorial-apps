import { useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const inputRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Focus the input when the component loads
    inputRef.current.focus();

    const sectionElement = sectionRef.current;

    // Animate the sectionElement's opacity on mount
    sectionElement.style.opacity = 0.5;
    setTimeout(() => {
      sectionElement.style.opacity = 1;
    }, 5000);

    return () => {
      // Clean up animation when the component unmounts
      sectionElement.style.opacity = 0.5;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: "100vh" }}
      className="bg-black text-info"
    >
      <h2>USELAYOUTEFFECT HOOK</h2>
      <small>
        Description:{" "}
        <span>
          The input will be focused when the page loads because of the
          useLayoutEffect Hook
        </span>
      </small>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          name="name"
          id="name"
          aria-describedby="helpId"
          placeholder="Enter your name"
        />
        <small id="helpId" className="form-text text-muted">
          This field is required
        </small>
      </div>
    </section>
  );
}

export default UseLayoutEffect;
