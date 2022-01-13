import { useQuery } from "@apollo/client";
import React, { useMemo } from "react";
import { GET_LOGS } from "../graphql/queries";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Log from "./Log";
import Loading from "./Loading";
import Error from "./Error";

function LogList() {
  const { loading, data, error } = useQuery(GET_LOGS);

  const loadedData = useMemo(() => {
    if (loading || error) return null;
    return data;
  }, [loading, error, data]);

  if (loading) return <Loading />;
  if (error) return <Error />;


  return (
    <div>
      <Card>
        <CardHeader>List of All Logs</CardHeader>
        <CardBody>
          <ListGroup>
            {loadedData.logs.map((log: any) => (
              <ListGroupItem key={log.id}>
                <Log date={log.date} />
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default LogList;
