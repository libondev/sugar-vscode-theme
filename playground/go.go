package main

import (
	"fmt"
)

type Person struct {
	Name string
	Age  int
}

func main() {
	add := func(a, b float64) float64 {
		return a + b
	}

	multiply := func(a, b float64) float64 {
		return a * b
	}

	subtract := func(a, b float64) float64 {
		return a - b
	}

	divide := func(a, b float64) (float64, error) {
		if b == 0 {
			return 0, fmt.Errorf("除数不能为0")
		}
		return a / b, nil
	}

	num1 := float64(0)
	num2 := float64(0)
	fmt.Print("请输入两个数，用空格分隔: ")
	_, err := fmt.Scan(&num1, &num2)
	if err != nil {
		fmt.Println("输入错误: ", err)
		return
	}

	fmt.Printf("两数之和: %v\n", add(num1, num2))
	fmt.Printf("两数之积: %v\n", multiply(num1, num2))
	fmt.Printf("两数之差: %v\n", subtract(num1, num2))
	result, err := divide(num1, num2)
	if err != nil {
		fmt.Println("除法错误: ", err)
	} else {
		fmt.Printf("两数之商: %v\n", result)
	}

	isEven := func(num int) bool {
		return num%2 == 0
	}

	num := 0
	fmt.Print("请输入一个整数: ")
	fmt.Scan(&num)

	if isEven(num) {
		fmt.Println(num, "是偶数")
	} else {
		fmt.Println(num, "是奇数")
	}

	// 循环和条件语句
	for i := 0; i < 5; i++ {
		fmt.Println(i)

		// 使用条件语句
		if i == 3 {
			fmt.Println("i 等于 3")
		} else {
			fmt.Println("i 不等于 3")
		}
	}


	// 使用循环和条件语句
	for i := 0; i < 5; i++ {
		if i == 3 {
			fmt.Println("i 等于 3")
		} else {
			fmt.Println("i 不等于 3")
		}
	}

	// 使用切片和循环
	fruits := []string{"apple", "banana", "cherry"}
	for _, fruit := range fruits {
		fmt.Println(fruit)
	}

	// 使用map和循环
	person := map[string]string{"name": "张三", "age": "25", "city": "北京"}
	for key, value := range person {
		fmt.Printf("%s: %s\n", key, value)
	}

	// 使用集合和循环
	numbers := []int{1, 2, 3, 4, 5}
	for number := range numbers {
		fmt.Println(number)
	}
}
