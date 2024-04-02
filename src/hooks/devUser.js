export const colUser = [
  {
    name: "userId",
    align: "center",
    label: "userId",
    field: (row) => row.userId,
    sortable: true,
  },
  {
    name: "roleId",
    align: "center",
    label: "roleId",
    field: (row) => row.roleId,
    sortable: true,
  },
  {
    name: "username",
    align: "center",
    label: "username",
    field: (row) => row.username,
    sortable: true,
  },
  {
    name: "password",
    align: "left",
    label: "Password",
    field: (row) => row.password,
    sortable: true,
  },
];

export const rowsUser = [
  {
    userId: 1,
    roleId: 1,
    username:"Admin",
    password:"Admin123"
  },
  {
    userId: 2,
    roleId: 2,
    username:"User",
    password:"User123"
  },
]
