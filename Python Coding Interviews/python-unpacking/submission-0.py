from typing import List, Tuple

'''
    unpacking - a syntax which allows for extraction of set values from a set list size
    point1 = [0, 0]
    point2 = [2, 4]

    x1, y1 = point1 # x1 = 0, y1 = 0
    x2, y2 = point2 # x2 = 2, y2 = 4

    OR

    x1, y1 = point1[0], point1[1]
    x2, y2 = point2[0], point2[1]

    if there is not an equavalent variables to list-size, there will be a 
    "ValueError: too many values to unpack"
'''
# returns the sum of a 3-item list
def sum_3_integers(triplet: List[int]) -> int:
    int1, int2, int3 = triplet[0], triplet[1], triplet[2]
    return int1 + int2 + int3

# returns the volume = l x w x h
def compute_volume(box_dimensions: Tuple[int, int, int]) -> int:
    width, length, height = box_dimensions[0], box_dimensions[1], box_dimensions[2]
    return length * width * height
    
  

# do not modify below this line
print(sum_3_integers([1, 2, 3]))
print(sum_3_integers([4, 6, 2]))

print(compute_volume((1, 2, 3)))
print(compute_volume((3, 2, 1)))
print(compute_volume((3, 9, 7)))
