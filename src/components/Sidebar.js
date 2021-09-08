import React from 'react'
import "../Styles/Sidebar.css";
import { FiberManualRecord } from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
    return (
        <div className='sidebar'>
          <div className='sidebar_header'>
              <div className='sidebar_info'>

              <h3><FiberManualRecord/>
              Jack Rigan
              </h3>
              </div>
            <CreateIcon/>
          </div>
        </div>
    )
}

export default Sidebar
