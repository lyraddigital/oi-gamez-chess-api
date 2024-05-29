import { INDEX_TO_CELL_CODE_LOOKUP } from "@oigamez/logic";

export const mapFromNumberStringMapToRecord = (
  numberStringMap: Map<number, string>
): Record<string, string> => {
  const recordToReturn: Record<string, string> = {};

  for (const key of numberStringMap.keys()) {
    const lookupCode = INDEX_TO_CELL_CODE_LOOKUP[key];
    const value = numberStringMap.get(key);

    if (lookupCode !== undefined && value !== undefined) {
      recordToReturn[lookupCode] = value;
    }
  }

  return recordToReturn;
};
