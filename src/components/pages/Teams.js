import React from 'react';
import TeamsList from '../teams-list';
import './Pages.css';

function Teams() {
  return (
    <div className="page">
      <TeamsList/>
    </div>
  );
}

export default Teams;
// import React, {Component} from 'react';
// import TeamsList from "../teams-list/TeamsList";
// import './Pages.css';
//
// class Teams extends Component {
//   render() {
//     return (
//       <div className="page">
//         <TeamsList/>
//       </div>
//     );
//   }
// }
//
// export default Teams;
