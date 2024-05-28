import { INDEX_TO_CELL_CODE_LOOKUP } from "@oigamez/logic";

export const mapFromNumberStringMapToStringStringMap = (
  numberStringMap: Map<number, string>
): Map<string, string> => {
  const mapToReturn = new Map<string, string>();

  for (const key of numberStringMap.keys()) {
    const lookupCode = INDEX_TO_CELL_CODE_LOOKUP[key];
    const value = numberStringMap.get(key);

    if (lookupCode && value) {
      mapToReturn.set(lookupCode, value);
    }
  }

  return mapToReturn;
};
