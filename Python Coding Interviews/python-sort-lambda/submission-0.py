from typing import List

def word_length(word):
    return len(word)

def abs_value(num):
    return abs(num)
'''
    Returns a list where:
        - sorted based on length
        - sored in DESC order
'''
def sort_words(words: List[str]) -> List[str]:
    words.sort(key=lambda word: len(word), reverse=True)  
    return words  

'''
    Returns a list where:
        - sorted based on abs valaue
        - sored in ASC order
'''
def sort_numbers(numbers: List[int]) -> List[int]:
    numbers.sort(key=lambda num: abs(num))
    return numbers


# do not modify below this line
print(sort_words(["cherry", "apple", "blueberry", "banana", "watermelon", "zucchini", "kiwi", "pear"]))

print(sort_numbers([1, -5, -3, 2, 4, 11, -19, 9, -2, 5, -6, 7, -4, 2, 6]))
