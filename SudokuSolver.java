public class SudokuSolver {
    public static void main(String[] args) {
        int[][] test = { {3, 1, 6, 5, 7, 8, 4, 9, 2}, 
                         {5, 2, 9, 1, 3, 4, 7, 6, 8},
                         {4, 8, 7, 6, 2, 9, 5, 3, 1},
                         {2, 6, 3, 4, 1, 5, 9, 8, 7},
                         {9, 7, 4, 8, 6, 3, 1, 2, 5},
                         {8, 5, 1, 7, 9, 2, 6, 4, 3},
                         {1, 3, 8, 9, 4, 7, 2, 5, 6},
                         {6, 9, 2, 3, 5, 1, 8, 7, 4},
                         {7, 4, 5, 2, 8, 6, 3, 1, 9} };
        System.out.println(isValidWithinBoxes(test));
        
    }
    /* 
    have the iterations of the nested for loops change by intervals of three between each
    iteration, so the rows and columns could be checked on 0-8, 3-8, 6-8
    for each chunk of the full sudoku puzzle, the Arrays.copyOf() can be called to get the top-right
    3x3 chunk of the sudoku. For example, when i = 0 and j = 0, the 3x3 in the top right corner
    would be checked. When i = 3 and j = 3, the 3x3 in the center of the puzzle would be checked

    test what values are being printed for each 3x3 before continuing
    */
    public static boolean isValidWithinBoxes(int[][] grid) { //complete
        for (int i = 0; i < grid.length; i += 3) {
            for (int j = 0; j < grid[0].length; j += 3) {
                int[][] box = new int[3][3];
                for (int m = i, mx = 0; m < i + 3; mx++, m++) {
                    for (int n = j, my = 0; n < j + 3; my++, n++) {
                        box[mx][my] = grid[m][n]; 
                    }
                }
                for (int k = 0; k < box.length; k++) {
                    for (int l = 0; l < box[0].length; l++) {
                        int temp = box[k][l];
                        for (int a = 0; a < box.length; a++) {
                            for (int b = l + 1; b < box[0].length; b++) {
                                if (box[a][b] == temp)
                                    return false;
                            }
                        }
                    }
                    
                }
            }
        }
        return true;
    }

    public static boolean isValidAcrossRows(int[][] grid) { //complete
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                int temp = grid[i][j];
                for (int k = j + 1; k < grid[0].length; k++) {
                    if (grid[i][k] == temp)
                        return false;
                }
            }
        }
        return true;
    }

    public static boolean isValidAcrossColumns(int[][] grid) { //complete
        for (int i = 0; i < grid[0].length; i++) {
            for (int j = 0; j < grid.length; j++) {
                int temp = grid[j][i];
                for (int k = j + 1; k < grid.length; k++) {
                    if (grid[k][i] == temp)
                        return false;
                }
            }
        }
        return true;
    }
}
