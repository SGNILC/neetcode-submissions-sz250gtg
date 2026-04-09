'''
U - identify the frequency of integers in an array. return the top k frequent elements
    - I: int[] - an array of integers
    - O: int[] - an array of the top two elemts
    - E: 
        if arr.length == 1 return arr
        
M - Frequency Mapping
P - using a dictionary

    # create dictionary

    # check if number exists in dict

        # if yes, increase count

        # if no, instantiate the value
    
    # return a list of the highest frequencies (dict.items())
    # sort the list DESC

    # create array which stores frequencies [:k]

    # create another array (top_nums[])
    for i in new_array:
        top_nums.add(dict.get((i)))

    return top_nums
I -
R -
E -
'''


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:    
        # create dictionary
        freq = {}
        # check if number exists in dict
        for num in nums:
            if num in freq:
            # if yes, increase count
                freq[num] = freq[num] + 1
            # if no, instantiate the value
            else:
                freq[num] = 1
        print(freq)
        # create a list of the highest frequencies (dict.items())
        # sort the list DESC
        freq_values = list(freq.values())
        print(freq_values.sort(reverse=True))
        # create array which stores frequencies [:k]
        freq_values = freq_values[:k]
        print(freq_values)

        # create another array (top_nums[])
        top_nums = []
        for key, val in freq.items():
            if val in freq_values:
                top_nums.append(key)

        return top_nums[:k]
        