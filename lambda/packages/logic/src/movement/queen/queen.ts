import { MovementPaths } from "../../models/movement-paths";

export const QUEEN_MOVEMENT: Record<number, MovementPaths> = {
  0: {
    paths: {
      1: [],
      2: [1],
      3: [1, 2],
      4: [1, 2, 3],
      5: [1, 2, 3, 4],
      6: [1, 2, 3, 4, 5],
      7: [1, 2, 3, 4, 5, 6],
      8: [],
      9: [],
      16: [8],
      18: [9],
      24: [8, 16],
      27: [9, 18],
      32: [8, 16, 24],
      36: [9, 18, 27],
      40: [8, 16, 24, 32],
      45: [9, 18, 27, 36],
      48: [8, 16, 24, 32, 40],
      54: [9, 18, 27, 36, 45],
      56: [8, 16, 24, 32, 40, 48],
      63: [9, 18, 27, 36, 45, 54],
    },
  },
  1: {
    paths: {
      0: [],
      2: [],
      3: [2],
      4: [2, 3],
      5: [2, 3, 4],
      6: [2, 3, 4, 5],
      7: [2, 3, 4, 5, 6],
      8: [],
      9: [],
      10: [],
      17: [9],
      19: [10],
      25: [9, 17],
      28: [10, 19],
      33: [9, 17, 25],
      37: [10, 19, 28],
      41: [9, 17, 25, 33],
      46: [10, 19, 28, 37],
      49: [9, 17, 25, 33, 41],
      55: [10, 19, 28, 37, 46],
      57: [9, 17, 25, 33, 41, 49],
    },
  },
  2: {
    paths: {
      0: [1],
      1: [],
      3: [],
      4: [3],
      5: [3, 4],
      6: [3, 4, 5],
      7: [3, 4, 5, 6],
      9: [],
      10: [],
      11: [],
      16: [9],
      18: [10],
      20: [11],
      26: [10, 18],
      29: [11, 20],
      34: [10, 18, 26],
      38: [11, 20, 29],
      42: [10, 18, 26, 34],
      47: [11, 20, 29, 38],
      50: [10, 18, 26, 34, 42],
      58: [10, 18, 26, 34, 42, 50],
    },
  },
  3: {
    paths: {
      0: [2, 1],
      1: [2],
      2: [],
      4: [],
      5: [4],
      6: [4, 5],
      7: [4, 5, 6],
      10: [],
      11: [],
      12: [],
      17: [10],
      19: [11],
      21: [12],
      24: [10, 17],
      27: [11, 19],
      30: [12, 21],
      35: [11, 19, 27],
      39: [12, 21, 30],
      43: [11, 19, 27, 35],
      51: [11, 19, 27, 35, 43],
      59: [11, 19, 27, 35, 43, 51],
    },
  },
  4: {
    paths: {
      0: [3, 2, 1],
      1: [3, 2],
      2: [3],
      3: [],
      5: [],
      6: [5],
      7: [5, 6],
      11: [],
      12: [],
      13: [],
      18: [11],
      20: [12],
      22: [13],
      25: [11, 18],
      28: [12, 20],
      31: [13, 22],
      32: [11, 18, 25],
      36: [12, 20, 28],
      44: [12, 20, 28, 36],
      52: [12, 20, 28, 36, 44],
      60: [12, 20, 28, 36, 44, 52],
    },
  },
  5: {
    paths: {
      0: [4, 3, 2, 1],
      1: [4, 3, 2],
      2: [4, 3],
      3: [4],
      4: [],
      6: [],
      7: [6],
      12: [],
      13: [],
      14: [],
      19: [12],
      21: [13],
      23: [14],
      26: [12, 19],
      29: [13, 21],
      33: [12, 19, 26],
      37: [13, 21, 29],
      40: [12, 19, 26, 33],
      45: [13, 21, 29, 37],
      53: [13, 21, 29, 37, 45],
      61: [13, 21, 29, 37, 45, 53],
    },
  },
  6: {
    paths: {
      0: [5, 4, 3, 2, 1],
      1: [5, 4, 3, 2],
      2: [5, 4, 3],
      3: [5, 4],
      4: [5],
      5: [],
      7: [],
      13: [],
      14: [],
      15: [],
      20: [13],
      22: [14],
      27: [13, 20],
      30: [14, 22],
      34: [13, 20, 27],
      38: [14, 22, 30],
      41: [13, 20, 27, 34],
      46: [14, 22, 30, 38],
      48: [13, 20, 27, 34, 41],
      54: [14, 22, 30, 38, 46],
      62: [14, 22, 30, 38, 46, 54],
    },
  },
  7: {
    paths: {
      0: [6, 5, 4, 3, 2, 1],
      1: [6, 5, 4, 3, 2],
      2: [6, 5, 4, 3],
      3: [6, 5, 4],
      4: [6, 5],
      5: [6],
      6: [],
      14: [],
      15: [],
      21: [14],
      23: [15],
      28: [14, 21],
      31: [15, 23],
      35: [14, 21, 28],
      39: [15, 23, 31],
      42: [14, 21, 28, 35],
      47: [15, 23, 31, 39],
      49: [14, 21, 28, 35, 42],
      55: [15, 23, 31, 39, 47],
      56: [14, 21, 28, 35, 42, 49],
      63: [15, 23, 31, 39, 47, 55],
    },
  },
  8: {
    paths: {
      0: [],
      1: [],
      9: [],
      10: [9],
      11: [9, 10],
      12: [9, 10, 11],
      13: [9, 10, 11, 12],
      14: [9, 10, 11, 12, 13],
      15: [9, 10, 11, 12, 13, 14],
      16: [],
      17: [],
      24: [16],
      26: [17],
      32: [16, 24],
      35: [17, 26],
      40: [16, 24, 32],
      44: [17, 26, 35],
      48: [16, 24, 32, 40],
      53: [17, 26, 35, 44],
      56: [16, 24, 32, 40, 48],
      62: [17, 26, 35, 44, 53],
    },
  },
  9: {
    paths: {
      0: [],
      1: [],
      2: [],
      8: [],
      10: [],
      11: [10],
      12: [10, 11],
      13: [10, 11, 12],
      14: [10, 11, 12, 13],
      15: [10, 11, 12, 13, 14],
      16: [],
      17: [],
      18: [],
      25: [17],
      27: [18],
      33: [17, 25],
      36: [18, 27],
      41: [17, 25, 33],
      45: [18, 27, 36],
      49: [17, 25, 33, 41],
      54: [18, 27, 36, 45],
      57: [17, 25, 33, 41, 49],
      63: [18, 27, 36, 45, 54],
    },
  },
  10: {
    paths: {
      1: [],
      2: [],
      3: [],
      8: [9],
      9: [],
      11: [],
      12: [11],
      13: [11, 12],
      14: [11, 12, 13],
      15: [11, 12, 13, 14],
      17: [],
      18: [],
      19: [],
      24: [17],
      26: [18],
      28: [19],
      34: [18, 26],
      37: [19, 28],
      42: [18, 26, 34],
      46: [19, 28, 37],
      50: [18, 26, 34, 42],
      55: [19, 28, 37, 46],
      58: [18, 26, 34, 42, 50],
    },
  },
  11: {
    paths: {
      2: [],
      3: [],
      4: [],
      8: [10, 9],
      9: [10],
      10: [],
      12: [],
      13: [12],
      14: [12, 13],
      15: [12, 13, 14],
      18: [],
      19: [],
      20: [],
      25: [18],
      27: [19],
      29: [20],
      32: [18, 25],
      35: [19, 27],
      38: [20, 29],
      43: [19, 27, 35],
      47: [20, 29, 38],
      51: [19, 27, 35, 43],
      59: [19, 27, 35, 43, 51],
    },
  },
  12: {
    paths: {
      3: [],
      4: [],
      5: [],
      8: [11, 10, 9],
      9: [11, 10],
      10: [11],
      11: [],
      13: [],
      14: [13],
      15: [13, 14],
      19: [],
      20: [],
      21: [],
      26: [19],
      28: [20],
      30: [21],
      33: [19, 26],
      36: [20, 28],
      39: [21, 30],
      40: [19, 26, 33],
      44: [20, 28, 36],
      52: [20, 28, 36, 44],
      60: [20, 28, 36, 44, 52],
    },
  },
  13: {
    paths: {
      4: [],
      5: [],
      6: [],
      8: [12, 11, 10, 9],
      9: [12, 11, 10],
      10: [12, 11],
      11: [12],
      12: [],
      14: [],
      15: [14],
      20: [],
      21: [],
      22: [],
      27: [20],
      29: [21],
      31: [22],
      34: [20, 27],
      37: [21, 29],
      41: [20, 27, 34],
      45: [21, 29, 37],
      48: [20, 27, 34, 41],
      53: [21, 29, 37, 45],
      61: [21, 29, 37, 45, 53],
    },
  },
  14: {
    paths: {
      5: [],
      6: [],
      7: [],
      8: [13, 12, 11, 10, 9],
      9: [13, 12, 11, 10],
      10: [13, 12, 11],
      11: [13, 12],
      12: [13],
      13: [],
      15: [],
      21: [],
      22: [],
      23: [],
      28: [21],
      30: [22],
      35: [21, 28],
      38: [22, 30],
      42: [21, 28, 35],
      46: [22, 30, 38],
      49: [21, 28, 35, 42],
      54: [22, 30, 38, 46],
      56: [21, 28, 35, 42, 49],
      62: [22, 30, 38, 46, 54],
    },
  },
  15: {
    paths: {
      6: [],
      7: [],
      8: [14, 13, 12, 11, 10, 9],
      9: [14, 13, 12, 11, 10],
      10: [14, 13, 12, 11],
      11: [14, 13, 12],
      12: [14, 13],
      13: [14],
      14: [],
      22: [],
      23: [],
      29: [22],
      31: [23],
      36: [22, 29],
      39: [23, 31],
      43: [22, 29, 36],
      47: [23, 31, 39],
      50: [22, 29, 36, 43],
      55: [23, 31, 39, 47],
      57: [22, 29, 36, 43, 50],
      63: [23, 31, 39, 47, 55],
    },
  },
  16: {
    paths: {
      0: [8],
      2: [9],
      8: [],
      9: [],
      17: [],
      18: [17],
      19: [17, 18],
      20: [17, 18, 19],
      21: [17, 18, 19, 20],
      22: [17, 18, 19, 20, 21],
      23: [17, 18, 19, 20, 21, 22],
      24: [],
      25: [],
      32: [24],
      34: [25],
      40: [24, 32],
      43: [25, 34],
      48: [24, 32, 40],
      52: [25, 34, 43],
      56: [24, 32, 40, 48],
      61: [25, 34, 43, 52],
    },
  },
  17: {
    paths: {
      1: [9],
      3: [10],
      8: [],
      9: [],
      10: [],
      16: [],
      18: [],
      19: [18],
      20: [18, 19],
      21: [18, 19, 20],
      22: [18, 19, 20, 21],
      23: [18, 19, 20, 21, 22],
      24: [],
      25: [],
      26: [],
      33: [25],
      35: [26],
      41: [25, 33],
      44: [26, 35],
      49: [25, 33, 41],
      53: [26, 35, 44],
      57: [25, 33, 41, 49],
      62: [26, 35, 44, 53],
    },
  },
  18: {
    paths: {
      0: [9],
      2: [10],
      4: [11],
      9: [],
      10: [],
      11: [],
      16: [17],
      17: [],
      19: [],
      20: [19],
      21: [19, 20],
      22: [19, 20, 21],
      23: [19, 20, 21, 22],
      25: [],
      26: [],
      27: [],
      32: [25],
      34: [26],
      36: [27],
      42: [26, 34],
      45: [27, 36],
      50: [26, 34, 42],
      54: [27, 36, 45],
      58: [26, 34, 42, 50],
      63: [27, 36, 45, 54],
    },
  },
  19: {
    paths: {
      1: [10],
      3: [11],
      5: [12],
      10: [],
      11: [],
      12: [],
      16: [18, 17],
      17: [18],
      18: [],
      20: [],
      21: [20],
      22: [20, 21],
      23: [20, 21, 22],
      26: [],
      27: [],
      28: [],
      33: [26],
      35: [27],
      37: [28],
      40: [26, 33],
      43: [27, 35],
      46: [28, 37],
      51: [27, 35, 43],
      55: [28, 37, 46],
      59: [27, 35, 43, 51],
    },
  },
  20: {
    paths: {
      2: [11],
      4: [12],
      6: [13],
      11: [],
      12: [],
      13: [],
      16: [19, 18, 17],
      17: [19, 18],
      18: [19],
      19: [],
      21: [],
      22: [21],
      23: [21, 22],
      27: [],
      28: [],
      29: [],
      34: [27],
      36: [28],
      38: [29],
      41: [27, 34],
      44: [28, 36],
      47: [29, 38],
      48: [27, 34, 41],
      52: [28, 36, 44],
      60: [28, 36, 44, 52],
    },
  },
  21: {
    paths: {
      3: [12],
      5: [13],
      7: [14],
      12: [],
      13: [],
      14: [],
      16: [20, 19, 18, 17],
      17: [20, 19, 18],
      18: [20, 19],
      19: [20],
      20: [],
      22: [],
      23: [22],
      28: [],
      29: [],
      30: [],
      35: [28],
      37: [29],
      39: [30],
      42: [28, 35],
      45: [29, 37],
      49: [28, 35, 42],
      53: [29, 37, 45],
      56: [28, 35, 42, 49],
      61: [29, 37, 45, 53],
    },
  },
  22: {
    paths: {
      4: [13],
      6: [14],
      13: [],
      14: [],
      15: [],
      16: [21, 20, 19, 18, 17],
      17: [21, 20, 19, 18],
      18: [21, 20, 19],
      19: [21, 20],
      20: [21],
      21: [],
      23: [],
      29: [],
      30: [],
      31: [],
      36: [29],
      38: [30],
      43: [29, 36],
      46: [30, 38],
      50: [29, 36, 43],
      54: [30, 38, 46],
      57: [29, 36, 43, 50],
      62: [30, 38, 46, 54],
    },
  },
  23: {
    paths: {
      5: [14],
      7: [15],
      14: [],
      15: [],
      16: [22, 21, 20, 19, 18, 17],
      17: [22, 21, 20, 19, 18],
      18: [22, 21, 20, 19],
      19: [22, 21, 20],
      20: [22, 21],
      21: [22],
      22: [],
      30: [],
      31: [],
      37: [30],
      39: [31],
      44: [30, 37],
      47: [31, 39],
      51: [30, 37, 44],
      55: [31, 39, 47],
      58: [30, 37, 44, 51],
      63: [31, 39, 47, 55],
    },
  },
  24: {
    paths: {
      0: [16, 8],
      3: [17, 10],
      8: [16],
      10: [17],
      16: [],
      17: [],
      25: [],
      26: [25],
      27: [25, 26],
      28: [25, 26, 27],
      29: [25, 26, 27, 28],
      30: [25, 26, 27, 28, 29],
      31: [25, 26, 27, 28, 29, 30],
      32: [],
      33: [],
      40: [32],
      42: [33],
      48: [32, 40],
      51: [33, 42],
      56: [32, 40, 48],
      60: [33, 42, 51],
    },
  },
  25: {
    paths: {
      1: [17, 9],
      4: [18, 11],
      9: [17],
      11: [18],
      16: [],
      17: [],
      18: [],
      24: [],
      26: [],
      27: [26],
      28: [26, 27],
      29: [26, 27, 28],
      30: [26, 27, 28, 29],
      31: [26, 27, 28, 29, 30],
      32: [],
      33: [],
      34: [],
      41: [33],
      43: [34],
      49: [33, 41],
      52: [34, 43],
      57: [33, 41, 49],
      61: [34, 43, 52],
    },
  },
  26: {
    paths: {
      2: [18, 10],
      5: [19, 12],
      8: [17],
      10: [18],
      12: [19],
      17: [],
      18: [],
      19: [],
      24: [25],
      25: [],
      27: [],
      28: [27],
      29: [27, 28],
      30: [27, 28, 29],
      31: [27, 28, 29, 30],
      33: [],
      34: [],
      35: [],
      40: [33],
      42: [34],
      44: [35],
      50: [34, 42],
      53: [35, 44],
      58: [34, 42, 50],
      62: [35, 44, 53],
    },
  },
  27: {
    paths: {
      0: [18, 9],
      3: [19, 11],
      6: [20, 13],
      9: [18],
      11: [19],
      13: [20],
      18: [],
      19: [],
      20: [],
      24: [26, 25],
      25: [26],
      26: [],
      28: [],
      29: [28],
      30: [28, 29],
      31: [28, 29, 30],
      34: [],
      35: [],
      36: [],
      41: [34],
      43: [35],
      45: [36],
      48: [34, 41],
      51: [35, 43],
      54: [36, 45],
      59: [35, 43, 51],
      63: [36, 45, 54],
    },
  },
  28: {
    paths: {
      1: [19, 10],
      4: [20, 12],
      7: [21, 14],
      10: [19],
      12: [20],
      14: [21],
      19: [],
      20: [],
      21: [],
      24: [27, 26, 25],
      25: [27, 26],
      26: [27],
      27: [],
      29: [],
      30: [29],
      31: [29, 30],
      35: [],
      36: [],
      37: [],
      42: [35],
      44: [36],
      46: [37],
      49: [35, 42],
      52: [36, 44],
      55: [37, 46],
      56: [35, 42, 49],
      60: [36, 44, 52],
    },
  },
  29: {
    paths: {
      2: [20, 11],
      5: [21, 13],
      11: [20],
      13: [21],
      15: [22],
      20: [],
      21: [],
      22: [],
      24: [28, 27, 26, 25],
      25: [28, 27, 26],
      26: [28, 27],
      27: [28],
      28: [],
      30: [],
      31: [30],
      36: [],
      37: [],
      38: [],
      43: [36],
      45: [37],
      47: [38],
      50: [36, 43],
      53: [37, 45],
      57: [36, 43, 50],
      61: [37, 45, 53],
    },
  },
  30: {
    paths: {
      3: [21, 12],
      6: [22, 14],
      12: [21],
      14: [22],
      21: [],
      22: [],
      23: [],
      24: [29, 28, 27, 26, 25],
      25: [29, 28, 27, 26],
      26: [29, 28, 27],
      27: [29, 28],
      28: [29],
      29: [],
      31: [],
      37: [],
      38: [],
      39: [],
      44: [37],
      46: [38],
      51: [37, 44],
      54: [38, 46],
      58: [37, 44, 51],
      62: [38, 46, 54],
    },
  },
  31: {
    paths: {
      4: [22, 13],
      7: [23, 15],
      13: [22],
      15: [23],
      22: [],
      23: [],
      24: [30, 29, 28, 27, 26, 25],
      25: [30, 29, 28, 27, 26],
      26: [30, 29, 28, 27],
      27: [30, 29, 28],
      28: [30, 29],
      29: [30],
      30: [],
      38: [],
      39: [],
      45: [38],
      47: [39],
      52: [38, 45],
      55: [39, 47],
      59: [38, 45, 52],
      63: [39, 47, 55],
    },
  },
  32: {
    paths: {
      0: [24, 16, 8],
      4: [25, 18, 11],
      8: [24, 16],
      11: [25, 18],
      16: [24],
      18: [25],
      24: [],
      25: [],
      33: [],
      34: [33],
      35: [33, 34],
      36: [33, 34, 35],
      37: [33, 34, 35, 36],
      38: [33, 34, 35, 36, 37],
      39: [33, 34, 35, 36, 37, 38],
      40: [],
      41: [],
      48: [40],
      50: [41],
      56: [40, 48],
      59: [41, 50],
    },
  },
  33: {
    paths: {
      1: [25, 17, 9],
      5: [26, 19, 12],
      9: [25, 17],
      12: [26, 19],
      17: [25],
      19: [26],
      24: [],
      25: [],
      26: [],
      32: [],
      34: [],
      35: [34],
      36: [34, 35],
      37: [34, 35, 36],
      38: [34, 35, 36, 37],
      39: [34, 35, 36, 37, 38],
      40: [],
      41: [],
      42: [],
      49: [41],
      51: [42],
      57: [41, 49],
      60: [42, 51],
    },
  },
  34: {
    paths: {
      2: [26, 18, 10],
      6: [27, 20, 13],
      10: [26, 18],
      13: [27, 20],
      16: [25],
      18: [26],
      20: [27],
      25: [],
      26: [],
      27: [],
      32: [33],
      33: [],
      35: [],
      36: [35],
      37: [35, 36],
      38: [35, 36, 37],
      39: [35, 36, 37, 38],
      41: [],
      42: [],
      43: [],
      48: [41],
      50: [42],
      52: [43],
      58: [42, 50],
      61: [43, 52],
    },
  },
  35: {
    paths: {
      3: [27, 19, 11],
      7: [28, 21, 14],
      8: [26, 17],
      11: [27, 19],
      14: [28, 21],
      17: [26],
      19: [27],
      21: [28],
      26: [],
      27: [],
      28: [],
      32: [34, 33],
      33: [34],
      34: [],
      36: [],
      37: [36],
      38: [36, 37],
      39: [36, 37, 38],
      42: [],
      43: [],
      44: [],
      49: [42],
      51: [43],
      53: [44],
      56: [42, 49],
      59: [43, 51],
      62: [44, 53],
    },
  },
  36: {
    paths: {
      0: [27, 18, 9],
      4: [28, 20, 12],
      9: [27, 18],
      12: [28, 20],
      15: [29, 22],
      18: [27],
      20: [28],
      22: [29],
      27: [],
      28: [],
      29: [],
      32: [35, 34, 33],
      33: [35, 34],
      34: [35],
      35: [],
      37: [],
      38: [37],
      39: [37, 38],
      43: [],
      44: [],
      45: [],
      50: [43],
      52: [44],
      54: [45],
      57: [43, 50],
      60: [44, 52],
      63: [45, 54],
    },
  },
  37: {
    paths: {
      1: [28, 19, 10],
      5: [29, 21, 13],
      10: [28, 19],
      13: [29, 21],
      19: [28],
      21: [29],
      23: [30],
      28: [],
      29: [],
      30: [],
      32: [36, 35, 34, 33],
      33: [36, 35, 34],
      34: [36, 35],
      35: [36],
      36: [],
      38: [],
      39: [38],
      44: [],
      45: [],
      46: [],
      51: [44],
      53: [45],
      55: [46],
      58: [44, 51],
      61: [45, 53],
    },
  },
  38: {
    paths: {
      2: [29, 20, 11],
      6: [30, 22, 14],
      11: [29, 20],
      14: [30, 22],
      20: [29],
      22: [30],
      29: [],
      30: [],
      31: [],
      32: [37, 36, 35, 34, 33],
      33: [37, 36, 35, 34],
      34: [37, 36, 35],
      35: [37, 36],
      36: [37],
      37: [],
      39: [],
      45: [],
      46: [],
      47: [],
      52: [45],
      54: [46],
      59: [45, 52],
      62: [46, 54],
    },
  },
  39: {
    paths: {
      3: [30, 21, 12],
      7: [31, 23, 15],
      12: [30, 21],
      15: [31, 23],
      21: [30],
      23: [31],
      30: [],
      31: [],
      32: [38, 37, 36, 35, 34, 33],
      33: [38, 37, 36, 35, 34],
      34: [38, 37, 36, 35],
      35: [38, 37, 36],
      36: [38, 37],
      37: [38],
      38: [],
      46: [],
      47: [],
      53: [46],
      55: [47],
      60: [46, 53],
      63: [47, 55],
    },
  },
  40: {
    paths: {
      0: [32, 24, 16, 8],
      5: [33, 26, 19, 12],
      8: [32, 24, 16],
      12: [33, 26, 19],
      16: [32, 24],
      19: [33, 26],
      24: [32],
      26: [33],
      32: [],
      33: [],
      41: [],
      42: [41],
      43: [41, 42],
      44: [41, 42, 43],
      45: [41, 42, 43, 44],
      46: [41, 42, 43, 44, 45],
      47: [41, 42, 43, 44, 45, 46],
      48: [],
      49: [],
      56: [48],
      58: [49],
    },
  },
  41: {
    paths: {
      1: [33, 25, 17, 9],
      6: [34, 27, 20, 13],
      9: [33, 25, 17],
      13: [34, 27, 20],
      17: [33, 25],
      20: [34, 27],
      25: [33],
      27: [34],
      32: [],
      33: [],
      34: [],
      40: [],
      42: [],
      43: [42],
      44: [42, 43],
      45: [42, 43, 44],
      46: [42, 43, 44, 45],
      47: [42, 43, 44, 45, 46],
      48: [],
      49: [],
      50: [],
      57: [49],
      59: [50],
    },
  },
  42: {
    paths: {
      2: [34, 26, 18, 10],
      7: [35, 28, 21, 14],
      10: [34, 26, 18],
      14: [35, 28, 21],
      18: [34, 26],
      21: [35, 28],
      24: [33],
      26: [34],
      28: [35],
      33: [],
      34: [],
      35: [],
      40: [41],
      41: [],
      43: [],
      44: [43],
      45: [43, 44],
      46: [43, 44, 45],
      47: [43, 44, 45, 46],
      49: [],
      50: [],
      51: [],
      56: [49],
      58: [50],
      60: [51],
    },
  },
  43: {
    paths: {
      3: [35, 27, 19, 11],
      11: [35, 27, 19],
      15: [36, 29, 22],
      16: [34, 25],
      19: [35, 27],
      22: [36, 29],
      25: [34],
      27: [35],
      29: [36],
      34: [],
      35: [],
      36: [],
      40: [42, 41],
      41: [42],
      42: [],
      44: [],
      45: [44],
      46: [44, 45],
      47: [44, 45, 46],
      50: [],
      51: [],
      52: [],
      57: [50],
      59: [51],
      61: [52],
    },
  },
  44: {
    paths: {
      4: [36, 28, 20, 12],
      8: [35, 26, 17],
      12: [36, 28, 20],
      17: [35, 26],
      20: [36, 28],
      23: [37, 30],
      26: [35],
      28: [36],
      30: [37],
      35: [],
      36: [],
      37: [],
      40: [43, 42, 41],
      41: [43, 42],
      42: [43],
      43: [],
      45: [],
      46: [45],
      47: [45, 46],
      51: [],
      52: [],
      53: [],
      58: [51],
      60: [52],
      62: [53],
    },
  },
  45: {
    paths: {
      0: [36, 27, 18, 9],
      5: [37, 29, 21, 13],
      9: [36, 27, 18],
      13: [37, 29, 21],
      18: [36, 27],
      21: [37, 29],
      27: [36],
      29: [37],
      31: [38],
      36: [],
      37: [],
      38: [],
      40: [44, 43, 42, 41],
      41: [44, 43, 42],
      42: [44, 43],
      43: [44],
      44: [],
      46: [],
      47: [46],
      52: [],
      53: [],
      54: [],
      59: [52],
      61: [53],
      63: [54],
    },
  },
  46: {
    paths: {
      1: [37, 28, 19, 10],
      6: [38, 30, 22, 14],
      10: [37, 28, 19],
      14: [38, 30, 22],
      19: [37, 28],
      22: [38, 30],
      28: [37],
      30: [38],
      37: [],
      38: [],
      39: [],
      40: [45, 44, 43, 42, 41],
      41: [45, 44, 43, 42],
      42: [45, 44, 43],
      43: [45, 44],
      44: [45],
      45: [],
      47: [],
      53: [],
      54: [],
      55: [],
      60: [53],
      62: [54],
    },
  },
  47: {
    paths: {
      2: [38, 29, 20, 11],
      7: [39, 31, 23, 15],
      11: [38, 29, 20],
      15: [39, 31, 23],
      20: [38, 29],
      23: [39, 31],
      29: [38],
      31: [39],
      38: [],
      39: [],
      40: [46, 45, 44, 43, 42, 41],
      41: [46, 45, 44, 43, 42],
      42: [46, 45, 44, 43],
      43: [46, 45, 44],
      44: [46, 45],
      45: [46],
      46: [],
      54: [],
      55: [],
      61: [54],
      63: [55],
    },
  },
  48: {
    paths: {
      0: [40, 32, 24, 16, 8],
      6: [41, 34, 27, 20, 13],
      8: [40, 32, 24, 16],
      13: [41, 34, 27, 20],
      16: [40, 32, 24],
      20: [41, 34, 27],
      24: [40, 32],
      27: [41, 34],
      32: [40],
      34: [41],
      40: [],
      41: [],
      49: [],
      50: [49],
      51: [49, 50],
      52: [49, 50, 51],
      53: [49, 50, 51, 52],
      54: [49, 50, 51, 52, 53],
      55: [49, 50, 51, 52, 53, 54],
      56: [],
      57: [],
    },
  },
  49: {
    paths: {
      1: [41, 33, 25, 17, 9],
      7: [42, 35, 28, 21, 14],
      9: [41, 33, 25, 17],
      14: [42, 35, 28, 21],
      17: [41, 33, 25],
      21: [42, 35, 28],
      25: [41, 33],
      28: [42, 35],
      33: [41],
      35: [42],
      40: [],
      41: [],
      42: [],
      48: [],
      50: [],
      51: [50],
      52: [50, 51],
      53: [50, 51, 52],
      54: [50, 51, 52, 53],
      55: [50, 51, 52, 53, 54],
      56: [],
      57: [],
      58: [],
    },
  },
  50: {
    paths: {
      2: [42, 34, 26, 18, 10],
      10: [42, 34, 26, 18],
      15: [43, 36, 29, 22],
      18: [42, 34, 26],
      22: [43, 36, 29],
      26: [42, 34],
      29: [43, 36],
      32: [41],
      34: [42],
      36: [43],
      41: [],
      42: [],
      43: [],
      48: [49],
      49: [],
      51: [],
      52: [51],
      53: [51, 52],
      54: [51, 52, 53],
      55: [51, 52, 53, 54],
      57: [],
      58: [],
      59: [],
    },
  },
  51: {
    paths: {
      3: [43, 35, 27, 19, 11],
      11: [43, 35, 27, 19],
      19: [43, 35, 27],
      23: [44, 37, 30],
      24: [42, 33],
      27: [43, 35],
      30: [44, 37],
      33: [42],
      35: [43],
      37: [44],
      42: [],
      43: [],
      44: [],
      48: [50, 49],
      49: [50],
      50: [],
      52: [],
      53: [52],
      54: [52, 53],
      55: [52, 53, 54],
      58: [],
      59: [],
      60: [],
    },
  },
  52: {
    paths: {
      4: [44, 36, 28, 20, 12],
      12: [44, 36, 28, 20],
      16: [43, 34, 25],
      20: [44, 36, 28],
      25: [43, 34],
      28: [44, 36],
      31: [45, 38],
      34: [43],
      36: [44],
      38: [45],
      43: [],
      44: [],
      45: [],
      48: [51, 50, 49],
      49: [51, 50],
      50: [51],
      51: [],
      53: [],
      54: [53],
      55: [53, 54],
      59: [],
      60: [],
      61: [],
    },
  },
  53: {
    paths: {
      5: [45, 37, 29, 21, 13],
      8: [44, 35, 26, 17],
      13: [45, 37, 29, 21],
      17: [44, 35, 26],
      21: [45, 37, 29],
      26: [44, 35],
      29: [45, 37],
      35: [44],
      37: [45],
      39: [46],
      44: [],
      45: [],
      46: [],
      48: [52, 51, 50, 49],
      49: [52, 51, 50],
      50: [52, 51],
      51: [52],
      52: [],
      54: [],
      55: [54],
      60: [],
      61: [],
      62: [],
    },
  },
  54: {
    paths: {
      0: [45, 36, 27, 18, 9],
      6: [46, 38, 30, 22, 14],
      9: [45, 36, 27, 18],
      14: [46, 38, 30, 22],
      18: [45, 36, 27],
      22: [46, 38, 30],
      27: [45, 36],
      30: [46, 38],
      36: [45],
      38: [46],
      45: [],
      46: [],
      47: [],
      48: [53, 52, 51, 50, 49],
      49: [53, 52, 51, 50],
      50: [53, 52, 51],
      51: [53, 52],
      52: [53],
      53: [],
      55: [],
      61: [],
      62: [],
      63: [],
    },
  },
  55: {
    paths: {
      1: [46, 37, 28, 19, 10],
      7: [47, 39, 31, 23, 15],
      10: [46, 37, 28, 19],
      15: [47, 39, 31, 23],
      19: [46, 37, 28],
      23: [47, 39, 31],
      28: [46, 37],
      31: [47, 39],
      37: [46],
      39: [47],
      46: [],
      47: [],
      48: [54, 53, 52, 51, 50, 49],
      49: [54, 53, 52, 51, 50],
      50: [54, 53, 52, 51],
      51: [54, 53, 52],
      52: [54, 53],
      53: [54],
      54: [],
      62: [],
      63: [],
    },
  },
  56: {
    paths: {
      0: [48, 40, 32, 24, 16, 8],
      7: [49, 42, 35, 28, 21, 14],
      8: [48, 40, 32, 24, 16],
      14: [49, 42, 35, 28, 21],
      16: [48, 40, 32, 24],
      21: [49, 42, 35, 28],
      24: [48, 40, 32],
      28: [49, 42, 35],
      32: [48, 40],
      35: [49, 42],
      40: [48],
      42: [49],
      48: [],
      49: [],
      57: [],
      58: [57],
      59: [57, 58],
      60: [57, 58, 59],
      61: [57, 58, 59, 60],
      62: [57, 58, 59, 60, 61],
      63: [57, 58, 59, 60, 61, 62],
    },
  },
  57: {
    paths: {
      1: [49, 41, 33, 25, 17, 9],
      9: [49, 41, 33, 25, 17],
      15: [50, 43, 36, 29, 22],
      17: [49, 41, 33, 25],
      22: [50, 43, 36, 29],
      25: [49, 41, 33],
      29: [50, 43, 36],
      33: [49, 41],
      36: [50, 43],
      41: [49],
      43: [50],
      48: [],
      49: [],
      50: [],
      56: [],
      58: [],
      59: [58],
      60: [58, 59],
      61: [58, 59, 60],
      62: [58, 59, 60, 61],
      63: [58, 59, 60, 61, 62],
    },
  },
  58: {
    paths: {
      2: [50, 42, 34, 26, 18, 10],
      10: [50, 42, 34, 26, 18],
      18: [50, 42, 34, 26],
      23: [51, 44, 37, 30],
      26: [50, 42, 34],
      30: [51, 44, 37],
      34: [50, 42],
      37: [51, 44],
      40: [49],
      42: [50],
      44: [51],
      49: [],
      50: [],
      51: [],
      56: [57],
      57: [],
      59: [],
      60: [59],
      61: [59, 60],
      62: [59, 60, 61],
      63: [59, 60, 61, 62],
    },
  },
  59: {
    paths: {
      3: [51, 43, 35, 27, 19, 11],
      11: [51, 43, 35, 27, 19],
      19: [51, 43, 35, 27],
      27: [51, 43, 35],
      31: [52, 45, 38],
      32: [50, 41],
      35: [51, 43],
      38: [52, 45],
      41: [50],
      43: [51],
      45: [52],
      50: [],
      51: [],
      52: [],
      56: [58, 57],
      57: [58],
      58: [],
      60: [],
      61: [60],
      62: [60, 61],
      63: [60, 61, 62],
    },
  },
  60: {
    paths: {
      4: [52, 44, 36, 28, 20, 12],
      12: [52, 44, 36, 28, 20],
      20: [52, 44, 36, 28],
      24: [51, 42, 33],
      28: [52, 44, 36],
      33: [51, 42],
      36: [52, 44],
      39: [53, 46],
      42: [51],
      44: [52],
      46: [53],
      51: [],
      52: [],
      53: [],
      56: [59, 58, 57],
      57: [59, 58],
      58: [59],
      59: [],
      61: [],
      62: [61],
      63: [61, 62],
    },
  },
  61: {
    paths: {
      5: [53, 45, 37, 29, 21, 13],
      13: [53, 45, 37, 29, 21],
      16: [52, 43, 34, 25],
      21: [53, 45, 37, 29],
      25: [52, 43, 34],
      29: [53, 45, 37],
      34: [52, 43],
      37: [53, 45],
      43: [52],
      45: [53],
      47: [54],
      52: [],
      53: [],
      54: [],
      56: [60, 59, 58, 57],
      57: [60, 59, 58],
      58: [60, 59],
      59: [60],
      60: [],
      62: [],
      63: [62],
    },
  },
  62: {
    paths: {
      6: [54, 46, 38, 30, 22, 14],
      8: [53, 44, 35, 26, 17],
      14: [54, 46, 38, 30, 22],
      17: [53, 44, 35, 26],
      22: [54, 46, 38, 30],
      26: [53, 44, 35],
      30: [54, 46, 38],
      35: [53, 44],
      38: [54, 46],
      44: [53],
      46: [54],
      53: [],
      54: [],
      55: [],
      56: [61, 60, 59, 58, 57],
      57: [61, 60, 59, 58],
      58: [61, 60, 59],
      59: [61, 60],
      60: [61],
      61: [],
      63: [],
    },
  },
  63: {
    paths: {
      0: [54, 45, 36, 27, 18, 9],
      7: [55, 47, 39, 31, 23, 15],
      9: [54, 45, 36, 27, 18],
      15: [55, 47, 39, 31, 23],
      18: [54, 45, 36, 27],
      23: [55, 47, 39, 31],
      27: [54, 45, 36],
      31: [55, 47, 39],
      36: [54, 45],
      39: [55, 47],
      45: [54],
      47: [55],
      54: [],
      55: [],
      56: [62, 61, 60, 59, 58, 57],
      57: [62, 61, 60, 59, 58],
      58: [62, 61, 60, 59],
      59: [62, 61, 60],
      60: [62, 61],
      61: [62],
      62: [],
    },
  },
};