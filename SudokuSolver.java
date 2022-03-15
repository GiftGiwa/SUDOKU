import java.io.FileInputStream;  
import java.io.IOException;  
import org.apache.poi.hssf.usermodel.HSSFSheet;  
import org.apache.poi.hssf.usermodel.HSSFWorkbook;  
import org.apache.poi.ss.usermodel.Cell;  
import org.apache.poi.ss.usermodel.FormulaEvaluator;  
import org.apache.poi.ss.usermodel.Row;

public class SudokuSolver {
    public static void main(String[] args) {
        try {
            File file = new File("ExcelLibrary/Sudoku Puzzle.xls");
            FileInputStream fs = new FileInputStream(file);
            HSSFWorkbook wb = new HSSFWorkbook(fs);
            HSSFSheet sheet = wb.getSheetAt(0);
            //HSSFRow row;
            //HSSFCell cell;
        
            int rows; // No of rows
            rows = sheet.getPhysicalNumberOfRows();
        
            System.out.print(rows);
        } catch(Exception ioe) {
            ioe.printStackTrace();
        }
        //System.out.println(isValidWithinBoxes(test));
        
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
