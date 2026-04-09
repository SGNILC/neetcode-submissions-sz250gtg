class Solution:
    '''
    U - we are given a 9 x 9 array and must return true if all values are between 1-9 and every 3x3 block is unique
        I - boardp[][]; a 2-D array with str
        O - bool; true if 
                - each row contains 1-9
                - each column contains 1-9
                - each subset contains 1-9 and no duplicates
        E - 
            [] --> false
    P -
        # Create a frequency map for each row 

        # Create a frequency map for each col

        # create a frequency map for each block
        

        # Navigate through 3x3 cell of the 9 blocks

            # check if the number is unique in the row map, col map, and block
                # if not, return false
        
        else 
        
        # return true




    I
    '''
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        # Create a frequency map for each row 
        row = defaultdict(set)
        # Create a frequency map for each col
        col = defaultdict(set)
        # create a frequency map for each block
        block = defaultdict(set)

        # Navigate through 3x3 cell of the 9 blocks
             # Navigate through 3x3 cell of the 9 blocks
        for i in range(9):
            for j in range(9):
            
                # if [i][j] is a '.', then pass

                if board[i][j] == '.':
                    continue
                # check if the number is unique in the row map, col map, and block

                char = board[i][j]

                if (char in row[i] or char in col[j] or char in block[(i // 3), (j // 3)]):
                    return False
                else: 
                    row[i].add(char)
                    col[j].add(char)
                    block[(i // 3), (j // 3)].add(char)
        return True      