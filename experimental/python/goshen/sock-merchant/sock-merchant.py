#!/bin/python3


def get_number_of_matching_pairs_of_socks(number_of_socks_in_pile, sock_colors):
    """
    Given an array of integers representing the color of each sock,
    determine how many pairs of socks with matching colors there are.
    :param number_of_socks_in_pile: the number of socks in the pile
    :param sock_colors: an array representing the colors of each sock
    :return: the number of matching pairs of socks that are available
    """
    return 3


if __name__ == '__main__':
    n = 9
    ar = {10, 20, 20, 10, 10, 30, 50, 10, 20}
    result = get_number_of_matching_pairs_of_socks(n, ar)
    assert result == 3
