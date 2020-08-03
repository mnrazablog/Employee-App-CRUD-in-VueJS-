<template>
  <div id="app" class="small-container">
    <h1>Employee</h1>

    <employee-form @add:employee="addEmployee" />
    <employee-table
      :employees="employees"
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</template>

<script>
import EmployeeTable from "@/components/EmployeeTable";
import EmployeeForm from "@/components/EmployeeForm";

export default {
  name: "App",
  components: {
    EmployeeTable,
    EmployeeForm
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "MN Raza",
          email: "mnraza95@gmail.com"
        },
        {
          id: 2,
          name: "MH Raza",
          email: "mhraza95@gmail.com"
        },
        {
          id: 3,
          name: "H Shyama",
          email: "shyma@gmail.com"
        },
        {
          id: 4,
          name: "Rahul",
          email: "rahul@gmail.com"
        },
        {
          id: 5,
          name: "Turgut Alp ",
          email: "iyi.alp@gmail.com"
        }
      ]
    };
  },
  methods: {
    addEmployee(employee) {
      this.employees = [...this.employees, employee];
    },
    deleteEmployee(id) {
      this.employees = this.employees.filter(employee => employee.id !== id);
    },
    editEmployee(id, updatedEmployee) {
      this.employees = this.employees.map(employee =>
        employee.id === id ? updatedEmployee : employee
      );
    }
  }
};
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
