#!/bin/python3


def get_number_of_matching_pairs_of_socks(number_of_socks_in_pile, sock_colors):
    """
    Given an array of integers representing the color of each sock,
    determine how many pairs of socks with matching colors there are.
    :param number_of_socks_in_pile: the number of socks in the pile
    :param sock_colors: an array representing the colors of each sock
    :return: the number of matching pairs of socks that are available
    """
    from collections import Counter
    sock_colors_dictionary = Counter(sock_colors)
    my_count = 0
    for sock_count in sock_colors_dictionary.values():
        current_counter = sock_count // 2
        my_count = my_count + current_counter
    return my_count
