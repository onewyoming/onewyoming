# given a sorted array, find the last number n in the array and return its index


def get_last_n(input_array, value):
    # loop through entire array 
    # until we find something greater than value 
    # or we reach end of array 
    for index, element in enumerate(input_array):
        if element > value:
            return index - 1
    return -1

