from sock_merchant import get_number_of_matching_pairs_of_socks


def test_get_number_of_matching_pairs_of_socks():
    n = 9
    ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    result = get_number_of_matching_pairs_of_socks(n, ar)
    assert result == 3


def test_get_number_of_matching_pairs_of_socks_again():
    n = 10
    ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
    result = get_number_of_matching_pairs_of_socks(n, ar)
    assert result == 4
