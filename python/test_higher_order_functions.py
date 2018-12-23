def fn_returns_fn(x):
    def inner(y):
        return x + y
    return inner

def fn_accepts_fn(fn):
    def inner(x):
        return fn(x)
    return inner

def test_hof_returns():
    assert fn_returns_fn(1)(2) == 3

def test_hof_params():
    assert fn_accepts_fn(lambda x: x + 1)(2) == 3

