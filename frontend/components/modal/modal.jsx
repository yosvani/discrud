import React from 'react';
import CreateServerContainer from '../servers/create_server_container';
import EditServerContainer from '../servers/edit_server_container';
import Invitation from '../servers/invitation';

// Modal names
export const ADD_SERVER = "ADD_SERVER";
export const CREATE_SERVER = "CREATE_SERVER";
export const EDIT_SERVER = "EDIT_SERVER";
export const INVITE_TO_SERVER = "INVITE_TO_SERVER";

function Modal({ modal, clearModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {

    case CREATE_SERVER:
      component = <CreateServerContainer />
      break;

    case EDIT_SERVER:
      component = <EditServerContainer />
      break;

    case INVITE_TO_SERVER:
      component = <Invitation />
      break;

    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={clearModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;