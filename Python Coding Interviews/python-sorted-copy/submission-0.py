from typing import List

'''
    .sort() - returns None, has 'key' and 'reverse' parameters
    sorted() - returns a copy, has 'key' and 'reverse' parameters
'''

# returns a copy of a list of words sorted ASC
def sort_words(words: List[str]) -> List[str]:
    new_words = sorted(words)
    return new_words

# returns a copy of a list of numbers sorted DESC and abs-val
def sort_numbers(numbers: List[int]) -> List[int]:
    new_numbers = sorted(numbers, key=lambda num : abs(num), reverse=True)
    return new_numbers

# do not modify below this line
original_words = ["cherry", "apple", "blueberry", "banana", "watermelon", "zucchini", "kiwi", "pear"]

print(original_words)
print(sort_words(original_words))

original_numbers = [1, -5, -3, 2, 4, 11, -19, 9, -2, 5, -6, 7, -4, 2, 6]

print(original_numbers)
print(sort_numbers(original_numbers))
