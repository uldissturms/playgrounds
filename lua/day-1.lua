function ends_in_3(num)
  return num % 10 == 3
end

function is_prime(num)
  for i=2, math.sqrt(num) do
    if (num % i == 0) then
      return false
    end
  end
  return num >= 1
end

function first_n_primes_that_end_in_3(n)
  local x = n
  local i = 1

  while x > 0 do

    if is_prime(i) and ends_in_3(i) then
      print(i)
      x = x - 1
    end

    i = i + 1
  end
end

function for_loop(a, b, f)
  local i = a
  while i <= b do
    f(i)
    i = i + 1
  end
end

function add(p, n)
  return p + n
end

function reduce(max, init, f)
  local res = init
  for_loop(1, max, function (i)
    res = f(res, i)
  end)
  return res
end

function multiply(a, b)
  return a * b
end

function factorial(n)
  if n <= 0 then
    return 0
  end

  return reduce(n, 1, multiply)
end
