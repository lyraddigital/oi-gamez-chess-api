import { MovementPaths } from "../../models/movement-paths";

export const BLACK_SQUARE_BISHOP_MOVEMENT: Record<number, MovementPaths> = {
  0: {
    paths: {
      9: [],
      18: [9],
      27: [9, 18],
      36: [9, 18, 27],
      45: [9, 18, 27, 36],
      54: [9, 18, 27, 36, 45],
      63: [9, 18, 27, 36, 45, 54],
    },
  },
  2: {
    paths: {
      9: [],
      11: [],
      16: [9],
      20: [11],
      29: [11, 20],
      38: [11, 20, 29],
      47: [11, 20, 29, 38],
    },
  },
  4: {
    paths: {
      11: [],
      13: [],
      18: [11],
      22: [13],
      25: [11, 18],
      31: [13, 22],
      32: [11, 18, 25],
    },
  },
  6: {
    paths: {
      13: [],
      15: [],
      20: [13],
      27: [13, 20],
      34: [13, 20, 27],
      41: [13, 20, 27, 34],
      48: [13, 20, 27, 34, 41],
    },
  },
  9: {
    paths: {
      0: [],
      2: [],
      16: [],
      18: [],
      27: [18],
      36: [18, 27],
      45: [18, 27, 36],
      54: [18, 27, 36, 45],
      63: [18, 27, 36, 45, 54],
    },
  },
  11: {
    paths: {
      2: [],
      4: [],
      18: [],
      20: [],
      25: [18],
      29: [20],
      32: [18, 25],
      38: [20, 29],
      47: [20, 29, 38],
    },
  },
  13: {
    paths: {
      4: [],
      6: [],
      20: [],
      22: [],
      27: [20],
      31: [22],
      34: [20, 27],
      41: [20, 27, 34],
      48: [20, 27, 34, 41],
    },
  },
  15: {
    paths: {
      6: [],
      22: [],
      29: [22],
      36: [22, 29],
      43: [22, 29, 36],
      50: [22, 29, 36, 43],
      57: [22, 29, 36, 43, 50],
    },
  },
  16: {
    paths: {
      2: [9],
      9: [],
      25: [],
      34: [25],
      43: [25, 34],
      52: [25, 34, 43],
      61: [25, 34, 43, 52],
    },
  },
  18: {
    paths: {
      0: [9],
      4: [11],
      9: [],
      11: [],
      25: [],
      27: [],
      32: [25],
      36: [27],
      45: [27, 36],
      54: [27, 36, 45],
      63: [27, 36, 45, 54],
    },
  },
  20: {
    paths: {
      2: [11],
      6: [13],
      11: [],
      13: [],
      27: [],
      29: [],
      34: [27],
      38: [29],
      41: [27, 34],
      47: [29, 38],
      48: [27, 34, 41],
    },
  },
  22: {
    paths: {
      4: [13],
      13: [],
      15: [],
      29: [],
      31: [],
      36: [29],
      43: [29, 36],
      50: [29, 36, 43],
      57: [29, 36, 43, 50],
    },
  },
  25: {
    paths: {
      4: [18, 11],
      11: [18],
      16: [],
      18: [],
      32: [],
      34: [],
      43: [34],
      52: [34, 43],
      61: [34, 43, 52],
    },
  },
  27: {
    paths: {
      0: [18, 9],
      6: [20, 13],
      9: [18],
      13: [20],
      18: [],
      20: [],
      34: [],
      36: [],
      41: [34],
      45: [36],
      48: [34, 41],
      54: [36, 45],
      63: [36, 45, 54],
    },
  },
  29: {
    paths: {
      2: [20, 11],
      11: [20],
      15: [22],
      20: [],
      22: [],
      36: [],
      38: [],
      43: [36],
      47: [38],
      50: [36, 43],
      57: [36, 43, 50],
    },
  },
  31: {
    paths: {
      4: [22, 13],
      13: [22],
      22: [],
      38: [],
      45: [38],
      52: [38, 45],
      59: [38, 45, 52],
    },
  },
  32: {
    paths: {
      4: [25, 18, 11],
      11: [25, 18],
      18: [25],
      25: [],
      41: [],
      50: [41],
      59: [41, 50],
    },
  },
  34: {
    paths: {
      6: [27, 20, 13],
      13: [27, 20],
      16: [25],
      20: [27],
      25: [],
      27: [],
      41: [],
      43: [],
      48: [41],
      52: [43],
      61: [43, 52],
    },
  },
  36: {
    paths: {
      0: [27, 18, 9],
      9: [27, 18],
      15: [29, 22],
      18: [27],
      22: [29],
      27: [],
      29: [],
      43: [],
      45: [],
      50: [43],
      54: [45],
      57: [43, 50],
      63: [45, 54],
    },
  },
  38: {
    paths: {
      2: [29, 20, 11],
      11: [29, 20],
      20: [29],
      29: [],
      31: [],
      45: [],
      47: [],
      52: [45],
      59: [45, 52],
    },
  },
  41: {
    paths: {
      6: [34, 27, 20, 13],
      13: [34, 27, 20],
      20: [34, 27],
      27: [34],
      32: [],
      34: [],
      48: [],
      50: [],
      59: [50],
    },
  },
  43: {
    paths: {
      15: [36, 29, 22],
      16: [34, 25],
      22: [36, 29],
      25: [34],
      29: [36],
      34: [],
      36: [],
      50: [],
      52: [],
      57: [50],
      61: [52],
    },
  },
  45: {
    paths: {
      0: [36, 27, 18, 9],
      9: [36, 27, 18],
      18: [36, 27],
      27: [36],
      31: [38],
      36: [],
      38: [],
      52: [],
      54: [],
      59: [52],
      63: [54],
    },
  },
  47: {
    paths: {
      2: [38, 29, 20, 11],
      11: [38, 29, 20],
      20: [38, 29],
      29: [38],
      38: [],
      54: [],
      61: [54],
    },
  },
  48: {
    paths: {
      6: [41, 34, 27, 20, 13],
      13: [41, 34, 27, 20],
      20: [41, 34, 27],
      27: [41, 34],
      34: [41],
      41: [],
      57: [],
    },
  },
  50: {
    paths: {
      15: [43, 36, 29, 22],
      22: [43, 36, 29],
      29: [43, 36],
      32: [41],
      36: [43],
      41: [],
      43: [],
      57: [],
      59: [],
    },
  },
  52: {
    paths: {
      16: [43, 34, 25],
      25: [43, 34],
      31: [45, 38],
      34: [43],
      38: [45],
      43: [],
      45: [],
      59: [],
      61: [],
    },
  },
  54: {
    paths: {
      0: [45, 36, 27, 18, 9],
      9: [45, 36, 27, 18],
      18: [45, 36, 27],
      27: [45, 36],
      36: [45],
      45: [],
      47: [],
      61: [],
      63: [],
    },
  },
  57: {
    paths: {
      15: [50, 43, 36, 29, 22],
      22: [50, 43, 36, 29],
      29: [50, 43, 36],
      36: [50, 43],
      43: [50],
      48: [],
      50: [],
    },
  },
  59: {
    paths: {
      31: [52, 45, 38],
      32: [50, 41],
      38: [52, 45],
      41: [50],
      45: [52],
      50: [],
      52: [],
    },
  },
  61: {
    paths: {
      16: [52, 43, 34, 25],
      25: [52, 43, 34],
      34: [52, 43],
      43: [52],
      47: [54],
      52: [],
      54: [],
    },
  },
  63: {
    paths: {
      0: [54, 45, 36, 27, 18, 9],
      9: [54, 45, 36, 27, 18],
      18: [54, 45, 36, 27],
      27: [54, 45, 36],
      36: [54, 45],
      45: [54],
      54: [],
    },
  },
};
