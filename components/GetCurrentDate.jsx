import React from "react";

class GetCurrentDate extends React.Component {
    state = {date: new Date()}
  
    render() {
      return (
        <div class="date">
          <p> Current Date {this.state.date.toLocaleDateString()}</p>
          <p> Current Time {this.state.date.toLocaleTimeString()}</p>
        </div>
      );
    }
  }
  
  export default GetCurrentDate;