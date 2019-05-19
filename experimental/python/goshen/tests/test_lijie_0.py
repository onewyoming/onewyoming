from lijie_0 import get_last_n


def test_get_last_n():
    input_array = [1, 2, 4, 6, 7, 7, 7, 7, 7, 9, 11, 40, 100]
    n_to_find = 7
    expected_index = 8
    assert get_last_n(input_array, n_to_find) == expected_index

def test_freebie():
    assert 2 == 2 

