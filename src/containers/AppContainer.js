import React from 'react';
import { connect } from 'react-redux';
import AppWrapper from './../components/AppWrapper/AppWrapper';
import {
  onChange,
  onTeamSelect,
  onEmployeeSelect,
  onCheckChange,
  closeModal,
  openModal,
} from './../actions/LendingKartActions';

const mapStatesToProps = (state) => {
  return {
    teamName: state.LendingKartReducer.teamName,
    employeeName: state.LendingKartReducer.employeeName,
    teamData: state.LendingKartReducer.teamData,
    selectedTeam: state.LendingKartReducer.selectedTeam,
    selectedEmployee: state.LendingKartReducer.selectedEmployee,
    isChecked: state.LendingKartReducer.isChecked,
    modalVisibility: state.LendingKartReducer.modalVisibility,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTeamChange: (event) => {
      dispatch(onChange(event.target.value, 'teamName'));
    },
    onTeamSelect: (selectedTeam) => {
      dispatch(onTeamSelect(selectedTeam));
    },
    onEmployeeChange: (event) => {
      dispatch(onChange(event.target.value, 'employeeName'));
    },
    onEmployeeSelect: (selectedEmployee) => {
      dispatch(onEmployeeSelect(selectedEmployee));
    },
    onCheckChange: (value) => {
      dispatch(onCheckChange(value));
    },
    closeModal: () => {
      dispatch(closeModal());
    },
    openModal: () => {
      dispatch(openModal());
    },
  };
};

const AppContainer = connect(mapStatesToProps, mapDispatchToProps)(AppWrapper);

export default AppContainer;