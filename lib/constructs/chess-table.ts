import { Construct } from "constructs";
import { AttributeType, TableV2 } from "aws-cdk-lib/aws-dynamodb";

import { ChessTableProps } from "../props";

export class ChessTable extends Construct {
  public table: TableV2;

  constructor(scope: Construct, id: string, props: ChessTableProps) {
    super(scope, id);

    this.table = new TableV2(this, "OIGamezRoomData", {
      partitionKey: { name: "PK", type: AttributeType.STRING },
      sortKey: { name: "SK", type: AttributeType.STRING },
    });

    this.table.addGlobalSecondaryIndex({
      indexName: props.roomCodeIndexName,
      partitionKey: { name: "RoomCode", type: AttributeType.STRING },
      sortKey: { name: "GameId", type: AttributeType.STRING },
    });
  }
}
