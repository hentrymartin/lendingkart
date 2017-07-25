export const onChange = (value, property) => {
  return {
    type: 'VALUE_CHANGED',
    value,
    property,
  };
};


export const onTeamSelect = (selectedTeam) => {
  return {
    type: 'TEAM_SELECTED',
    selectedTeam,
  };
};

export const onEmployeeSelect = (selectedEmployee) => {
  return {
    type: 'EMPLOYEE_SELECT',
    selectedEmployee,
  };
};

export const onCheckChange = (isChecked) => {
  return {
    type: 'ON_CHECKED_CHANGE',
    isChecked,
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  };
};

export const openModal = () => {
  return {
    type: 'OPEN_MODAL',
  };
};
