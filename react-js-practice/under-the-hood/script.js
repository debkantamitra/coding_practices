function Counter() {
  // we don't use simple variables, and instead we use state - which reacts to any activity and re renders the app
  const [count, setCount] = React.useState(0);
  //   let count = 0;

  const increment = () => {
    setCount(count + 1);
    // count += 1;
  };

  // below is the example of the Virtual DOM which react creates - which then gets compared with the html DOM
  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("p", null, `Count: ${count}`),
  //     React.createElement("button", { onClick: increment }, "Increment")
  //   );

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
