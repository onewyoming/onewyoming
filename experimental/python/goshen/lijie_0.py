# give a sorted array find the last number n in the array and return its index


def get_last_n(input_array, value):
    first = 0
    last = len(input_array) - 1
    found = False
    while first <= last and not found:
        midpoint = (first + last) // 2
        if value == input_array[midpoint]:
            found = True
        else:
            if value < input_array[midpoint]:
                last = midpoint - 1
            else:
                if value > midpoint:
                    first = midpoint + 1
    return found
