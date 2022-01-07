import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_LOGS } from '../graphql/queries'
import {Card, CardHeader, CardBody} from "reactstrap";

function LogList() {
  const getAllLogs = useQuery(GET_LOGS); 
  return (
    <div>
      <Card>
        <CardHeader>List of All Logs</CardHeader>
        <CardBody>
          <pre>
            {JSON.stringify(getAllLogs.data)}
          </pre>
        </CardBody>
      </Card>
    </div>
  )
}

export default LogList
