import React from 'react'
import { Table } from 'semantic-ui-react'

const Table = ({ data }) => (

   console.log(data)
  <Table celled fixed singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Access</Table.HeaderCell>
        <Table.HeaderCell>Temperature</Table.HeaderCell>
        <Table.HeaderCell>Power</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>73ºF</Table.Cell>
        <Table.Cell>7kWh</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>73ºF</Table.Cell>
        <Table.Cell>7kWh</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>73ºF</Table.Cell>
        <Table.Cell>7kWh</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default Table
