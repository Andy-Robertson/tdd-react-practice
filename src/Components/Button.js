// import React, { useState } from "react";

// const Button = () => {
//   const [count, setCount] = useState(0);

//   const countClickHandler = () => {
//     setCount((count) => {
//       return (count + 1) % 4;
//       // if (count === 3) {
//       //   return 0;
//       // } else {
//       //   return count + 1;
//       // }
//     });
//   };

//   return (
//     <button data-testid="button" onClick={countClickHandler}>
//       {count}
//     </button>
//   );
// };

// export default Button;

import React, { Component } from "react";

export default class Button extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState((state) => {
      return {
        count: (state.count + 1) % 4,
      };
    });
  };

  render() {
    return (
      <button data-testid="button" onClick={this.increment}>
        {this.state.count}
      </button>
    );
  }
}
