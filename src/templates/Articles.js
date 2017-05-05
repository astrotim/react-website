import React from 'react';

class Articles extends React.Component {
  render() {
    return (
      <main>
        <h1>What is Lexical Scope Anyway?</h1>
        <p>
          A relatively basic concept in JavaScript is that each declared function creates its own scope. What gets a little more mind bending is the concept of a closure - a function which is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
        </p>

        <p>
          Lexical scope is the scope model used by the JavaScript language, which differs to some other languages which use dynamic scope. Lexical scope is the scope defined at lexing time.
        </p>

        <h3>So, what is lexing time?</h3>
        <p>
          This digs into the mechanics of how JavaScript engine works. Despite commonly being referred to as an interpreted language, JavaScript compiles code immediately before executing it. For example the statement:
          <code>var a = 2;</code>
          is split into two separate steps at lexing time:
        </p>
        <ul>
          <li>
            <code>var a</code>
            This declares the variable in the scope, before code execution.
          </li>

          <li>
            <code>a = 2</code>
            This assigns the value 2 to the variable a, if it is found in the available scope.
          </li>
        </ul>

        <p>
          The lexing phase of compilation determines where and how all identifiers are declared, and thus how they will be looked up during execution. This is the same mechanism which results in “hoisting” variables. The variables are not actually moved within the source code, the declarations simply occur during the lexing phase and so the JavaScript engine is aware of these before execution.
        </p>

        <p>
          This demonstrates that during the lexing phase, the JavaScript engine declares the variables first, before the following step in which the values are assigned to the identifiers - this is hoisting. Because functions are also defined at this time (lexing phase), we can say that lexical scope is based on where variables and blocks of scope exist at author time, and thus are locked down at the end of the lexing phase. Scope is not defined at runtime, rather it can be accessed at runtime.
        </p>

        <p>
          Again, a closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
        </p>

        <p>
          So… lexical scope is the author-time scope created by a closure. It is the ‘outer’ scope of a function which is defined inside a closure.
        </p>

        <blockquote>
          function scope of outer function === lexical scope of inner function.
        </blockquote>
      </main>
    );
  }
}

export default Articles;
