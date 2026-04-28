-- Write your query below
-- UNDERSTAND
    -- find and return a student's highest exam score
    -- I - table including student_id, exam_id, and score
    -- O - a table including student_id, exam_id, and score ORDERED BY student_ID in ascending order
    -- E - if the highest score is the same on multiple exams, return the smallest EXAM_ID
-- MATCH
    -- using aggregate functions and order by to appropriately compute and return averages
-- PLAN
    -- return the required columns
    -- from tableName
    -- Perform student_id comparison
    --     for every student ID of the same value
    --         - order by score DESC
    --         - ORDER By exam ID ASC
    --         - return the first row
    -- order the results by sutdent ID ASC

-- IMPLEMENT
SELECT 
    DISTINCT ON (student_id) -- this returns the top row of the sorted, highest exam scores
    student_id, 
    exam_id, 
    score
FROM 
    exam_results
ORDER BY student_id, score DESC, exam_id