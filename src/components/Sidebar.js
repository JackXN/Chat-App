import React from 'react'
import "../Styles/Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';


function Sidebar() {
    return (
        <div className='sidebar'>
          <div className='sidebar_header'>
              <div className='sidebar_info'>
        <h2>Coders Club</h2>
              <h3><FiberManualRecordIcon/>
              Jack Rigan
              </h3>
              </div>
            <CreateIcon/>
          </div>
          <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
          <SidebarOption title='Gaming'/>
        </div>
    )
}

export default Sidebar
