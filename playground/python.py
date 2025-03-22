import os
import sys

def add(a, b):
    return a + b

num1 = float(input("请输入第一个数: "))

'''
123132
'''

print("两数之和:", add(1, 2))

def is_even(num):
    return num % 2 == 0

def is_odd(num):
    return num % 2 != 0

num = int(input("请输入一个整数: "))

if is_even(num):
    print(num, "是偶数")
else:
    print(num, "是奇数")

for i in range(5):
    if i == 3:
        print("i 等于 3")
    else:
        print("i 不等于 3")

fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)

person = {"name": "张三", "age": 25, "city": "北京"}

for key, value in person.items():
    print(f"{key}: {value}")

numbers = {1, 2, 3, 4, 5}
