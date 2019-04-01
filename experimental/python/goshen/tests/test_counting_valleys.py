from counting_valleys import counting_valleys


def test_counting_valleys():
    n = 8
    s = "UDDDUDUU"
    result = counting_valleys(n, s)
    assert result == 1
