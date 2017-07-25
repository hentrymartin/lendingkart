import React, {Component} from 'react';
import Modal from './../Modal/Modal';
import AutoComplete from './../AutoComplete/AutoComplete';
import Checkbox from './../Checkbox/Checkbox';
import Button from './../Button/Button';
import './AppWrapper.scss';

class AppWrapper extends Component {
  constructor(props) {
    super(props);

    this.validateInput = this.validateInput.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  validateInput() {
    if (!this.props.selectedEmployee || !this.props.employeeName) {
      alert('Please Select an Employee');
      return;
    }

    const filtered = this.props.selectedTeam.employees.filter((employee) => {
      return employee === this.props.employeeName;
    });

    if (filtered.length === 0) {
      alert(this.props.employeeName + 'is not in the employees list');
      return;
    }

    alert('Thanks for selecting ' + this.props.employeeName);
  }

  closeModal() {
    if (this.props.teamName || this.props.employeeName) {
      const isOk = confirm("Are you sure to close the modal?");

      if (isOk) {
        this.props.closeModal();
      }
    } else {
      this.props.closeModal();
    }
  }

  render () {
    return (
      <div className="app-wrapper">
        <Button
          value="Show Modal"
          onClick={this.props.openModal}/>
        <Modal
          visibility={this.props.modalVisibility}
          closeModal={this.closeModal}>
          <div className="app-wrapper__header">Select an Employee</div>
          <div>
            <Checkbox
              onChange={this.props.onCheckChange}
              checked={this.props.isChecked}
              label="Send welcome email to employee"
            />
          </div>
          <div className="app-wrapper__team-wrapper">
            <AutoComplete
              value={this.props.teamName}
              data={this.props.teamData}
              onChange={this.props.onTeamChange}
              onSelect={this.props.onTeamSelect}
              placeholder="Select Team..."
              keyValue="team"
              label="Select a Team in the Organization"
            />
          </div>
          <div className="app-wrapper__employees-wrapper">
            <AutoComplete
              value={this.props.employeeName}
              data={this.props.selectedTeam && this.props.selectedTeam.employees}
              onChange={this.props.onEmployeeChange}
              onSelect={this.props.onEmployeeSelect}
              placeholder="Select Employee..."
              keyValue=""
              label="Select an Employee"
            />
          </div>
          <div className="app-wrapper__footer">
            <Button
              value="Cancel"
              className="grey"
              onClick={this.closeModal}/>
            <Button
              value="Ok"
              onClick={this.validateInput}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AppWrapper;
