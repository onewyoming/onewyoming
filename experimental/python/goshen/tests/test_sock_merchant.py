from sock_merchant import get_number_of_matching_pairs_of_socks


def test_get_number_of_matching_pairs_of_socks():
    n = 9
    ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    result = get_number_of_matching_pairs_of_socks(n, ar)
    assert result == 3
