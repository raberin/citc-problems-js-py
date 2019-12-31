# Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

# Brute Force


def is_unique_brute(str):
    for index, char in enumerate(str):
        for index1, char1 in enumerate(str):
            print(char, char1, index, index1)
            if index != index1 and char == char1:
                return False
    return True


print(is_unique_brute('abcdefghijkl'))  # True
print(is_unique_brute('aa'))  # False

# Optimized


def is_unique_optimized(str):
    hash = {}
    for char in str:
        print(char)
        if char in hash:
            return False
        else:
            hash[char] = 1
    return True


print(is_unique_optimized('abcdefghijkl'))  # True
print(is_unique_optimized('aa'))  # False
