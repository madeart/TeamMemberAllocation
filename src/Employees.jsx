import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';
import Teams from './Teams'
import TeamMembers from './TeamMembers'

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
  
  return ( 
  <main className='container'>
    <div className='row justify-content-center mt-3 mb-3'>
      <div className="cl-8">
       <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
      </div>
    </div>
    
    <div className='row justify-content-center mt-3 mb-3'>
      <div className="cl-8">
        <div className='card-collection'>
    <TeamMembers employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
        </div> 
      </div>
    </div> 
  </main>
      
  );
}
export default Employees;