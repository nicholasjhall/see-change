import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

function Log({ date }: { date: string }) {
  return (
    <Card>
      <CardText>Date: {date}</CardText>
    </Card>
  );
}

export default Log;
