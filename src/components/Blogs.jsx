import React from "react";
import PageTopStyle from "./PageTopStyle";

const Blogs = () => {
  return (
    <div className="z-0 ">
      <div>
        <PageTopStyle>Blog</PageTopStyle>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            <h3>When should we use Context API?</h3>
          </div>
          <div className="collapse-content ">
            <p tabIndex={0} className="px-8">
              <strong className="text-2xl font-bold italic font-mono">
                Context API:
              </strong>
              <br />
              The Context API is a feature in React that allows data to be
              passed down the component tree without having to pass it through
              each component manually. It provides a way to share data between
              components without having to use props or state, and it helps
              avoid the "prop drilling" problem where you have to pass down
              props through multiple levels of components.
              <br />
              <br />
              <strong className="text-2xl font-bold italic font-mono">
                Using Field Of Context API:
              </strong>
              <br />
              The Context API in React should be used when you have data that
              needs to be shared across multiple components in your application.
              <br />
              Here are some scenarios when the Context API can be useful:
            </p>
            <div className="mt-3 px-12 space-y-4 ">
              <li>
                The Context API in React is a way to share data between
                components without having to pass it down through each component
                as props. It provides a centralized place to store and access
                data that can be accessed by any child component.
              </li>
              <li>
                The Context API consists of two main components: the Context
                object and the Provider component. The Context object is used to
                define the data that you want to share between components, and
                the Provider component is used to provide that data to the
                components that need it.
              </li>
              <li>
                The Provider component is placed at the top of the component
                tree and wraps all of the components that need access to the
                shared data. The Provider component passes the shared data down
                to all child components using the Context object.
              </li>
              <li>
                To access the shared data in a child component, you can use the
                useContext hook, which allows you to access the data stored in
                the Context object.
              </li>
              <li>
                The Context API can be useful in a variety of scenarios, such as
                theming, authentication, and language localization. However, it
                may not be the best solution for managing state in very large or
                complex applications.
              </li>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            <h3>What is Custom hook?</h3>
          </div>
          <div className="collapse-content ">
            <p tabIndex={0} className="px-8 text-lg py-3">
              <strong className="text-2xl font-bold italic font-mono">
                Definition of Custom Hook:
              </strong>{" "}
              <br />A custom hook in React is a function that allows you to
              encapsulate reusable logic and stateful behavior that can be
              shared across multiple components. Custom hooks are used to
              simplify and reduce the amount of code needed to manage complex
              logic that is used in multiple places within a React application.{" "}
              <br />
              <br />
              <strong className="text-2xl font-bold italic font-mono">
                Purposes of Custom Hook:
              </strong>
              <br />
            </p>
            <p className=" px-6 text-lg">
              The purpose of a custom hook is to abstract away complex logic
              into a single function that can be used in multiple components.
              This can help to improve the readability and maintainability of
              your code, as well as reduce code duplication. Custom hooks can
              have any name, but they must start with the word "use" to indicate
              to React that it is a hook. Custom hooks should also follow the
              same rules as React's built-in hooks, such as using hooks only at
              the top level of a component, and not using hooks conditionally.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            <h3>What is useRef?</h3>
          </div>
          <div className="collapse-content ">
            <p tabIndex={0} className="px-8 py-3 text-lg tracking-wide">
              <strong className="text-2xl font-bold italic font-mono">
                Definition of useRef hook in React:
              </strong>{" "}
              <br />
              The useRef hook in React provides a way to create a mutable
              reference to a DOM element or a variable that persists across
              component re-renders. The useRef hook can be used to access the
              underlying DOM element of a component, or to store and update
              mutable state within a component without triggering a re-render.
              The useRef hook returns an object with a single property called
              "current", which can be used to store and update a mutable
              reference value. The value of the "current" property can be
              updated at any time, and changes to the value will not trigger a
              re-render of the component. The useRef hook is commonly used to
              access the underlying DOM element of a component, such as when you
              need to read or modify the value of an input field or trigger a
              focus event. It can also be used to store and update mutable state
              within a component that needs to persist across re-renders, such
              as when you need to maintain a count or toggle state. <br />{" "}
              <br />
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-xl font-medium">
            <h3>What is useMemo?</h3>
          </div>
          <div className="collapse-content ">
            <p tabIndex={0} className="px-8 py-3 text-lg">
              <strong className="text-2xl font-bold italic font-mono">
                Definition and Purpose of useMemo:
              </strong>
              <br /> <br />
              The useMemo hook in React is used to optimize the performance of a
              component by memoizing a computed value that depends on a set of
              dependencies. The useMemo hook takes two arguments: a function
              that computes the value to be memoized, and an array of
              dependencies that the computed value depends on. The useMemo hook
              returns the memoized value, which will only be recomputed when one
              or more of the dependencies have changed. The useMemo hook is
              useful in situations where the computed value is expensive to
              compute, and is needed in multiple places within a component. By
              memoizing the value and only recomputing it when necessary, you
              can reduce the amount of unnecessary computation and improve the
              performance of your application. One common use case for useMemo
              is to compute the result of a complex calculation, such as
              filtering or sorting a large dataset, and then use that memoized
              result in multiple places within a component. By memoizing the
              result, you can avoid the overhead of recomputing the calculation
              every time the component is re-rendered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
