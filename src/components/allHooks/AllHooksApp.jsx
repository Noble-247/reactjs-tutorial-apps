import UseEffect from "./all_hooks_components/UseEffect";
import UseReducers from "./all_hooks_components/UseReducers";
import UseState from "./all_hooks_components/UseState";

function AllHooksApp() {
  return (
    <section>
      <h2>ALL HOOKS IN REACT</h2>
      <UseState />
      <UseReducers />
      <UseEffect />
    </section>
  );
}

export default AllHooksApp;
